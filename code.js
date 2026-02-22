const ll = console.log;
const lget = (key) => JSON.parse(localStorage.getItem(key));
const lset = (key, val) => {
  localStorage.setItem('version', +(lget('version') || 0) + 1);
  localStorage.setItem(key, JSON.stringify(val));
};
const ladd = (key, val) => {
  data = lget(key) || [];
  data.push(val);
  localStorage.setItem('version', +(lget('version') || 0) + 1);
  localStorage.setItem(key, JSON.stringify(data));
};
const lrem = (key, hero, poke) => {
  data = lget(key) || [];
  idx = data.findIndex((v) => v.hero == hero && v.pkm.name == poke);
  item = null;
  if (idx >= 0) {
    item = data.splice(idx, 1);
    localStorage.setItem('version', +(lget('version') || 0) + 1);
    localStorage.setItem(key, JSON.stringify(data));
  }
  return item;
};
var MinLNK = +lget('min-link') || 0;
var FilterPk = lget('filter-poke');

const API = (type, url, data) => {
  return new Promise((ok, err) => {
    $.ajax({
      url: url,
      type: type,
      contentType: 'application/json',
      headers: { authorization: lget('key') },
      data: data,
      success: function (data) {
        ok(data);
      },
      error: function (e) {
        err(e);
      },
    });
  });
};
const cpHeroLink = (a, b) => {
  d1 = { 'Player ♂': '0', 'Player ♀': '1', Oichi: '2' };
  d2 = (v) => (v.length > 1 ? '1' : '2');
  s1 = d1[a.hero] || '3';
  s2 = d1[b.hero] || '3';
  s1 += d2(a.link);
  s2 += d2(b.link);
  s1 += a.hero;
  s2 += b.hero;
  return s1.localeCompare(s2);
};
function sortByPos(arr, hero) {
  const result = [...arr];
  for (let i = 0; i < result.length; i++) {
    const item = result[i];
    if (!item.pos) continue;
    const targetIndex = result.findIndex((x) => x.name === item.pos);
    if (targetIndex === -1) continue;
    // Nếu đã đúng vị trí (đứng trước target) thì bỏ qua
    if (i === targetIndex - 1) continue;
    // Gỡ item ra
    result.splice(i, 1);
    // Nếu item nằm trước target ban đầu thì index bị lệch 1
    const insertIndex = i < targetIndex ? targetIndex - 1 : targetIndex;
    // Chèn lại trước target
    result.splice(insertIndex, 0, item);
  }
  return result.filter((v) =>
    v.link.some((x) => x >= MinLNK || lget(`${hero}-poke-${v.name}`) == 'own'),
  );
}
function sortByIVs(arr, hero) {
  const result = [...arr]
    .map((v) => {
      var { total, cls, text } = getIVs(hero, v.name);
      v.total = total;
      v.cls = cls;
      v.text = text;
      return v;
    })
    .sort((a, b) => b.total - a.total);
  return result.filter((v) =>
    v.link.some((x) => x >= MinLNK || lget(`${hero}-poke-${v.name}`) == 'own'),
  );
}
function sortByLnk(arr, poke) {
  return arr.filter(
    (v) => lget(`${v.hero}-poke-${poke}`) || v.link.some((x) => x >= MinLNK),
  );
}

const addBoxV2 = (title, fn, ...pr) => {
  let sdiv = $(`<span class="skill"></span>`);
  let dTitle = $(`<span>${title}</span>`);
  let dDetail = $(`<la></la>`);
  dTitle.click(function (e) {
    e.stopPropagation();
    dDetail.empty();
    fn(dDetail, ...pr);
    dDetail.show();
  });
  sdiv.append(dTitle, dDetail);
  return sdiv;
};

const getIVs = (hero, poke) => {
  var ivsData = lget(`${hero}-ivs-${poke}`);
  var total = 0;
  var text = '';
  var cls = '';
  if (ivsData) {
    total = ivsData.total;
    cls = cssIVs(ivsData.total);
    text = total + '%';
  }
  return { total, cls, text };
};

const showPokeDetail = (div, name) => {
  if (!PokeLinks[name]) {
    alert('No PokeLinks ', name);
    return;
  }
  div.empty();
  var divIvs = getIVsDiv('', name);
  var detail =
    '<table class="tbl">' +
    sortByLnk(PokeLinks[name], name)
      .sort(cpHeroLink)
      .map((v) => {
        let color = '';
        if (lget(`${v.hero}-poke-${name}`) == 'own') color = 'hero-has-poke ';
        if (lget(`${v.hero}-own`)) color += 'has-hero';
        var { text, cls } = getIVs(v.hero, name);
        var hrimg = `https://veekun.com/dex/media/warriors/big-icons/${heroImgs[v.hero]}`;
        return `<tr class="${v.link.includes(100) ? 'hundred-link' : v.link.includes(90) ? 'ninety-link' : ''}">
                <td class="${color}" name="${v.hero}-${name}">
                  <div class="dstar">
                    <div class="flex0"><img class="hrimg" src="${hrimg}"/><a href="#hero-${v.hero}">${v.hero}</a></div>
                    <span class="star" hero="${v.hero}" poke="${name}">★</span>
                  </div>
                </td>
                ${v.link
                  .concat(Array(Math.max(0, 3 - v.link.length)).fill(''))
                  .map(
                    (u) =>
                      `<td class="max-link show" hero="${v.hero}">${u}</td>`,
                  )
                  .join('')}
                <td name="${v.hero}-ivs-${name}" class="show ${cls}" hero="${v.hero}">${text}</td>
              </tr>`;
      })
      .join('') +
    '</table>';
  div.append($('<div class="divTbl">').append(divIvs, detail));
  div.append(
    $(`<button class="close">✖</button>`).click(() =>
      div.closest('la').hide(),
    ),
  );
  div.find('.star').click(function () {
    var hero = $(this).attr('hero');
    var poke = $(this).attr('poke');
    starClick(hero, poke);
  });
  div.find('.show').click(function () {
    var divDe = div.closest('.divLa').find('.more');
    showHeroDetail(divDe, $(this).attr('hero'), '.more', name);
    divDe.show();
  });
};

const getIVsDiv = (hero, poke) => {
  var ivs = $(`
      <div class="ivs history">
        <div class="ivs-cal">
          <input id="ivHP" inputmode="numeric" placeholder="HP">
          <input id="ivAtk" inputmode="numeric" placeholder="ATK">
          <input id="ivDef" inputmode="numeric" placeholder="DEF">
          <input id="ivSpe" inputmode="numeric" placeholder="SPD">
          <input id="ivLink" inputmode="numeric" placeholder="Lnk">
          <select name="ivEnergy" id="ivEnergy">
            <option value="110">↑</option>
            <option value="105">↗</option>
            <option value="100">→</option>
            <option value="95">↘</option>
            <option value="90">↓</option>
          </select>
          <button onclick="executeIVCalc(this)" style="color:green">✔</button>
          <button onclick="clearIVCalc(this)" style="color:red">✖</button>
        </div>
        <div class="history-list"></div>
        <div id="ivResult" class="ivs-cal"></div>
      </div>`);
  ivs.attr('poke', poke);
  if (!!hero) {
    var hrimg = `https://veekun.com/dex/media/warriors/big-icons/${heroImgs[hero]}`;
    var pkimg = `https://www.serebii.net/conquest/pokemon/${String(pokeData[poke].id).padStart(3, '0')}.png`;
    ivs.prepend(
      `<div class="ivs-img"><img src="${pkimg}"/> ˚ʚ♡ɞ˚ <img src="${hrimg}"/></div>`,
    );
    ivs.attr('hero', hero);
    var ivsData = lget(`${hero}-ivs-${poke}`);
    if (ivsData) {
      var { stats, link, energy, min, max, maxStats } = ivsData;
      showIVs(ivs, stats, link, energy, min, max, maxStats, poke);
    }
  }
  ivs.find('#ivHP').change(function () {
    var hp = +$(this).val();
    var hlst = (lget(`ivs-${poke}`) || [])
      .filter((v) => v[0] == hp)
      .sort((a, b) => {
        s1 = [...a].map((v) => String(v).padStart(3, '0')).join('');
        s2 = [...b].map((v) => String(v).padStart(3, '0')).join('');
        return s2.localeCompare(s1);
      });
    ivs
      .find('.history-list')
      .empty()
      .append(hlst.map((v) => `<tr>${v.map((y) => `<td>${y}</td>`)}</tr>`))
      .find('tr')
      .click(function () {
        setVals(
          ivs,
          ...$(this)
            .find('td')
            .get()
            .map((v) => +$(v).text()),
        );
      });
    $('.history-list tr td:last-child')
      .get()
      .forEach((v) => {
        $(v).addClass(cssIVs($(v).text()));
      });
  });
  return ivs;
};

const showHeroDetail = (div, hero, close, poke) => {
  if (!HeroLinks[hero]) {
    alert('No HeroLinks', hero);
    return;
  }
  div.empty();
  var hrimg = `https://veekun.com/dex/media/warriors/big-icons/${heroImgs[hero]}`;
  var heroName = `<div class="hero-name"><img src="${hrimg}" class="HeroLinks" name="${hero}"/>${hero}</div>`;
  var heroSkill = $(`<div class="hero-skill"></div>`);
  if (!heroCap[hero]) {
    alert('No hero capacity ' + hero);
    return;
  }
  $(`<div>Capacity: ${heroCap[hero].join('/')}</div>`).appendTo(heroSkill);
  if (heroRankUp[hero]) {
    $(`<div>Rank-Up</div>`).appendTo(heroSkill);
    var rankUp = $(`<ul>`).appendTo(heroSkill);
    rankUp.append(heroRankUp[hero].map((v, i) => `<li>${i + 1}. ${v}</li>`));
  }
  $(`<div>Skills</div>`).appendTo(heroSkill);
  var skillL = $(`<ul>`).appendTo(heroSkill);
  heroSkills[hero].forEach((v, i) => {
    skillL.append(`<li>${i + 1}. ${v}: ${skillsList[v]}</li>`);
  });

  if (poke) {
    heroSkill.append(getIVsDiv(hero, poke));
  }

  var detail =
    '<table class="tbl">' +
    sortByPos(HeroLinks[hero], hero)
      .map((v) => {
        var move = pokeMoves[v.name]?.name;
        if (!move) {
          ll('No move: ' + move);
          return;
        }
        move = allMoves[move];
        pdt = pokeData[v.name];
        let color = '';
        if (lget(`${hero}-poke-${v.name}`) == 'own') color = 'hero-has-poke ';
        var { text, cls } = getIVs(hero, v.name);
        return `<tr class="${v.link.includes(100) ? 'hundred-link' : v.link.some((v) => v > 89) ? 'ninety-link' : ''}">
                ${v.link.map((u) => `<td class="max-link show" poke="${v.name}">${u}</td>`).join('')}
                <td name="${hero}-ivs-${v.name}" class="show ${cls}" poke="${v.name}">${text}</td>
                <td class="add-poke" hero="${hero}" poke="${v.name}"><img src="https://www.serebii.net/conquest/pokemon/${String(v.id).padStart(3, '0')}.png"></td>
                <td class="${color}" name="${hero}-${v.name}">
                  <div class="dstar" hero="${hero}" poke="${v.name}">
                    <div>${v.name}</div>
                    <div class="typ">${pdt.type.map((typ) => `<img src="https://veekun.com/dex/media/types/en/${typ}.png"/>`).join('')}</div>
                  </div>
                </td>
                <td>${pdt.total}</td>
                <td style="text-align:center;"><div>${move.pow}</div><div>${move.star}</div></td>
                <td style="text-align:center;">${move.acc}<div><img src="https://veekun.com/dex/media/types/en/${move.typ}.png"/></div></td>
                <td><img style="width:30px;" src="https://veekun.com/dex/media/chrome/conquest-move-ranges/${move.range}"/></td>
              </tr>`;
      })
      .join('') +
    '</table>';
  div.append($('<div class="divTbl">').append(heroName, heroSkill, detail));
  div.append(
    $(`<button class="close">✖</button>`).click(() =>
      div.closest(close || 'la').hide(),
    ),
  );
  div.find('.dstar').click(function () {
    var hero = $(this).attr('hero');
    var poke = $(this).attr('poke');
    starClick(hero, poke);
  });
  div.find('.add-poke').click(function () {
    var hero = $(this).attr('hero');
    var poke = $(this).attr('poke');
    id = +prompt('Add Pokemon to Hero:', '');
    if (!id) return;
    if (id == -1) {
      var item = lrem('HeroLinks', hero, poke);
      if (item) {
        var pkm = item[0].pkm;
        HeroLinks[hero].splice(
          HeroLinks[hero].findIndex((v) => v.id == pkm.id),
          1,
        );
        PokeLinks[pkm.name].splice(
          PokeLinks[pkm.name].findIndex((v) => v.hero == hero),
          1,
        );
      }
    } else {
      pkm = Object.values(pokeData).find((a) => a.id == id);
      if (!pkm) {
        alert(`No Pokemon with ID [${id}]!`);
        return;
      }
      if (!!HeroLinks[hero].find((a) => a.id == id)) {
        alert(`Hero with Pokemon [${pkm.name}] existed!`);
        return;
      }
      pkm = {
        id: id,
        name: pkm.name,
        link: [...HeroLinks[hero][0].link].fill(60),
        pos: poke,
      };
      HeroLinks[hero].push(pkm);
      PokeLinks[pkm.name].push({ hero: hero, link: pkm.link });
      ladd('HeroLinks', { hero, pkm });
    }
    showHeroDetail(div, hero, close, poke);
  });
  div.find('.show').click(function () {
    var poke = $(this).attr('poke');
    var divDe = div.closest('.divLa').find('.more');
    divDe.empty();
    divDe.append(getIVsDiv(hero, poke));
    $(`<table class="pk-detail">`)
      .append($(`#myTable tr#poke-${poke}`).clone().show())
      .appendTo(divDe);
    divDe.append(
      $(`<button class="close">✖</button>`).click(() => divDe.hide()),
    );
    divDe.show();
  });
};

function starClick(hero, poke) {
  if (lget(`${hero}-poke-${poke}`) == 'own') {
    lset(`${hero}-poke-${poke}`, '');
  } else {
    lset(`${hero}-poke-${poke}`, 'own');
  }
  $(`[name="${hero}-${poke}"]`).toggleClass('hero-has-poke');
}

var lastFil1 = '';
function genHeroList(filter1, filter2) {
  lastFil1 = filter1;
  $('#plink #tbl1').empty();
  $('#plink #tbl2').empty();
  plink1.forEach((v) => genHero($('#plink #tbl1'), v, filter1, filter2));
  plink2.forEach((v) => genHero($('#plink #tbl2'), v, filter1, filter2));

  // Show Hero detail
  $('.HeroLinks').click(function (e) {
    e.stopPropagation();
    var la = $(this).next('la');
    if (la.length < 1) la = $('<la>').insertAfter($(this));
    var name = $(this).attr('name').trim();
    var div1 = $('<div class="divLa">');
    var div2 = $('<div>');
    la.empty().append(div1);
    div1.append(div2, '<div class="more">');
    showHeroDetail(div2, name, 'la');
    la.show();
  });

  // Show Pokemon IVs
  $('#plink')
    .find('.show-poke')
    .click(function (e) {
      e.stopPropagation();
      var hero = $(this).attr('hero').trim();
      var poke = $(this).attr('poke').trim();

      var ivsTb, pokeTb;
      if ($('.poke-list').is(':visible')) {
        ivsTb = $('.poke-list:visible').find('.ivs-tb');
        pokeTb = $('.poke-list:visible').find('.pk-detail');
      } else {
        var la = $(this).next('la');
        if (la.length < 1) la = $('<la>').insertAfter($(this));
        var div1 = $('<div class="divLa">');
        var div2 = $('<div class="poke-list">');
        ivsTb = $('<div class="ivs-tb">').appendTo(div2);
        pokeTb = $(`<table class="pk-detail">`).appendTo(div2);
        la.empty().append(div1);
        div1.append(div2, '<div class="more">');
        div2.append(
          $(`<button class="close">✖</button>`).click(() =>
            div2.closest('la').hide(),
          ),
        );
        la.show();
      }

      ivsTb.append(getIVsDiv(hero, poke));
      pokeTb.append($(`#myTable tr#poke-${poke}`).clone().show());
    });

  // Hide msg-box
  $('body').on('click', function () {
    $('la').hide();
  });
  $('.skill la').on('click', function (e) {
    e.stopPropagation();
  });
}

function genHero(div, line, filter1, filter2) {
  var { hero, pokes } = line;
  var dhero = sortByIVs(HeroLinks[hero], hero);

  // Filter check
  if (
    filter1 == 'own' &&
    !(
      lget(`${hero}-own`) &&
      (!filter2 ||
        dhero.some(
          (v) =>
            (lget(`${hero}-poke-${v.name}`) == 'own' || v.link.includes(100)) &&
            pokeData[v.name].type.includes(filter2),
        ))
    )
  )
    return;
  if (
    filter1 == 'own-100' &&
    !dhero.some(
      (v) =>
        lget(`${hero}-poke-${v.name}`) == 'own' &&
        v.link.includes(100) &&
        (!filter2 || pokeData[v.name].type.includes(filter2)),
    )
  )
    return;
  if (
    filter1 == 'good-ivs' &&
    !dhero.some(
      (v) =>
        lget(`${hero}-poke-${v.name}`) == 'own' &&
        ['good-ivs', 'max-ivs'].includes(v.cls) &&
        (!filter2 || pokeData[v.name].type.includes(filter2)),
    )
  )
    return;

  // Hero line
  const herod = $(`<tr id="hero-${hero}"></tr>`);
  if (lget(`${hero}-own`)) herod.addClass('hero-own');

  // Show Hero detail
  var hrimg = `https://veekun.com/dex/media/warriors/big-icons/${heroImgs[hero]}`;
  herod.append(
    `<td class="cen"><span class="skill">
        <img src="${hrimg}" class="HeroLinks" name="${hero}">
      	<la></la>
      </span></td>`,
  );

  herod.append(
    `<td class="cen"><a class="hrname" href="https://veekun.com/dex/conquest/warriors/${hero}" target="_blank">${hero}</a></td>`,
  );
  $(`<td class="cen">${'★'.repeat(heroRankUp[hero]?.length || 1)}</td>`)
    .click(() => {
      herod.toggleClass('hero-own');
      lset(`${hero}-own`, herod.hasClass('hero-own'));
    })
    .appendTo(herod);

  // Pokemons
  dhero.forEach((v) => {
    var poke = v.name;
    var pOwn = lget(`${hero}-poke-${poke}`) == 'own';
    if (pOwn || ((filter1 == 'own' || filter1 == '') && v.link.includes(100))) {
      var pkimg = `https://www.serebii.net/conquest/pokemon/${String(pokeData[poke].id).padStart(3, '0')}.png`;
      var td = $(
        `<td class="cen pklink show-ivs">
          <div class="skill">
            <div class="flex0 has-ivs show-poke" hero="${hero}" poke="${poke}">
              <div name="${hero}-ivs-${poke}" class="show-ivs ${v.cls}">${v.text || '&nbsp;'}</div>
              <img src="${pkimg}"/>
            </div>
            <la></la>
          </div>
        </td>`,
      ).appendTo(herod);
      if (v.link.includes(100)) {
        if (pOwn) td.addClass('pf-poke');
        else td.addClass('pf-poke-no');
      }
    }
  });

  div.append(herod);
}

$(function () {
  let startTime = new Date().getTime();
  $('#minLnk')
    .val(MinLNK)
    .change(function () {
      MinLNK = +$('#minLnk').val();
      lset('min-link', MinLNK);
    });

  // Add addition data to HeroLinks
  var addData = lget('HeroLinks') || [];
  addData.forEach((v) => {
    var { hero, pkm } = v;
    HeroLinks[hero].push(pkm);
    PokeLinks[pkm.name].push({ hero: hero, link: pkm.link });
  });

  // Search Enter-key
  $('#search').on('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      search();
    }
  });

  // Sync button
  if (lget('host') && lget('key')) {
    const syncBtn = $(`<button>Sync</button>`);
    $('.sbar').append(syncBtn);
    syncBtn.click(() => syncData());
  }

  // Filter Pokemon
  pokeTypes.forEach((v) => {
    var img = $(
      `<img src="https://www.serebii.net/pokedex-bw/type/${v}.gif" border="0" id="${v}">`,
    );
    $('.pktype').append(img);
  });
  $('.pktype img').click(function () {
    filterPokemon(3, $(this).attr('src'));
    lset('filter-poke', { col: 3, src: $(this).attr('src') });
  });

  // Filter Pokemon's move
  pokeTypes.forEach((v) => {
    var img = $(
      `<img src="https://www.serebii.net/pokedex-bw/type/${v}.gif" border="0" id="${v}">`,
    );
    $('.movetype').append(img);
  });
  $('.movetype img').click(function () {
    filterPokemon(4, $(this).attr('src'));
    lset('filter-poke', { col: 4, src: $(this).attr('src') });
  });
  if (FilterPk) {
    filterPokemon(FilterPk.col, FilterPk.src);
  }

  ll('Filter Pokemons move: ', new Date().getTime() - startTime);
  startTime = new Date().getTime();

  // Show Pokemon move detail
  $('.allMoves').click(function (e) {
    e.stopPropagation();
    var la = $(this).next();
    var move = allMoves[$(this).text().trim().toLowerCase()];
    la.text(move.eff);
    la.show();
  });

  // Show Pokemon skill detail
  $('.pokeSkills').click(function (e) {
    e.stopPropagation();
    var la = $(this).next();
    var v = $(this).text().trim();
    la.text(pokeSkills[v]);
    la.show();
  });

  // Show Pokemon detail
  $('.PokeLinks').click(function (e) {
    e.stopPropagation();
    var la = $(this).next('la');
    if (la.length < 1) la = $('<la>').insertAfter($(this));
    var name = $(this).attr('name').trim();
    var div1 = $('<div class="divLa">');
    var div2 = $('<div>');
    la.empty().append(div1);
    div1.append(div2, '<div class="more">');
    showPokeDetail(div2, name);
    la.show();
  });

  // Password pokemon
  var pwdl = {};
  pwd_data.forEach((line) => {
    const [label, ...right] = line
      .trim()
      .split(/[^\w]+/)
      .map((s) => s.trim());
    if (!right.length) return;
    if (!pwdl[label]) {
      pwdl[label] = right;
    } else {
      right.forEach((v) => {
        if (!pwdl[label].includes(v)) pwdl[label].push(v);
      });
    }
  });
  // Fill password vào pokemon
  document.querySelectorAll('#myTable>tbody>tr').forEach((tr) => {
    const tx = tr.children[1];
    const td = tr.children[2];
    if (!td || !tx) return;
    const name = td.textContent.trim();
    if (pwdl[name]) {
      const div = document.createElement('div');
      div.textContent = pwdl[name].join(' ');
      div.style.color = 'aqua';
      tx.append(div);
    }
  });
  ll('Password pokemon: ', new Date().getTime() - startTime);
  startTime = new Date().getTime();

  // Fill Heroes vào pokemon
  document.querySelectorAll('#myTable>tbody>tr').forEach((tr) => {
    const td = tr.children[2];
    if (!td) return;
    const poke = td.textContent.trim();
    if (plinkX[poke]) {
      plinkX[poke].forEach((hero) => {
        const div = $(`<div style="margin-top:2px"></div>`);
        const color = [
          lget(`${hero}-poke-${poke}`) == 'own' ? 'hero-has-poke' : '',
          lget(`${hero}-own`) ? 'has-hero' : 'no-hero',
        ];
        $(`<a href="#hero-${hero}"">${hero}</a>`)
          .addClass(color)
          .attr('name', `${hero}-${poke}`)
          .appendTo(div);
        $(td).append(div);
      });
    }
  });
  ll('Fill Heroes vào pokemon: ', new Date().getTime() - startTime);
  startTime = new Date().getTime();

  // HERO LIST
  genHeroList('good-ivs');

  // Filter Hero
  pokeTypes.forEach((v) => {
    var img = $(
      `<img src="https://www.serebii.net/pokedex-bw/type/${v}.gif" border="0" id="${v}">`,
    );
    img.attr('name', v);
    $('.herotype').append(img);
  });
  $('.herotype img').click(function () {
    genHeroList(lastFil1, $(this).attr('name'));
  });
});

async function syncData() {
  try {
    const items = {};
    Object.keys(localStorage).forEach((key) => {
      const value = localStorage.getItem(key);
      items[key] = value;
    });
    const vHost = lget('host');
    const version = +(items['version'] || 0);
    const valsHost = await API('GET', vHost, {
      game: 'pokemon_conquest',
      key: window.location.hostname || 'localhost',
    });
    const hver = +(valsHost?.data?.version || 0);
    ll(items, version, hver);
    // PUT to HOST
    if (!valsHost || version > hver) {
      await API(
        'PUT',
        vHost,
        JSON.stringify({
          game: 'pokemon_conquest',
          key: window.location.hostname || 'localhost',
          data: items,
        }),
      );
      alert('↑↑↑↑↑↑');
    } else if (version < hver) {
      // GET from HOST
      Object.keys(valsHost.data).forEach((key) => {
        localStorage.setItem(key, valsHost.data[key]);
      });
      alert('↓↓↓↓↓↓');
      window.location.reload();
    } else {
      alert('======');
    }

    $('#search').val('');
  } catch (e) {
    console.log(e);
    alert('error');
    return;
  }
}

function filterPokemon(col, src) {
  $('#myTable>tbody>tr').each(function () {
    const tds = $(this).children();
    const img = $(tds[col]).find(`img[src="${src}"]`);
    if (!img.length) {
      $(this).hide();
    } else {
      $(this).show();
    }
  });
}

async function search() {
  var val = $('#search').val().toLowerCase();
  // Sync
  if (val.startsWith('#')) {
    val = val.slice(1); // remove #, tách key / value
    const [key, value] = val.split('=', 2);
    if (key == 'key') {
      const [k, host] = value.split(',', 2);
      lset('key', k);
      lset('host', host);
      $('#search').val('');
    }
    return;
  }
  $('#myTable>tbody>tr').each(function () {
    const txt = $(this).text().toLowerCase();
    if (txt.indexOf(val) < 0) {
      $(this).hide();
    } else {
      $(this).show();
    }
  });
}

function clearS() {
  $('#search').val('');
  $('#myTable>tbody>tr').show();
  lset('filter-poke', null);
}
