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
function sortByPos(arr) {
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
  return result;
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

const showPokeDetail = (div, name) => {
  if (!PokeLinks[name]) {
    alert('No PokeLinks ', name);
    return;
  }
  var ivs = $(`<div class="ivs">
    <input id="ivHP" inputmode="numeric" placeholder="HP">
    <input id="ivAtk" inputmode="numeric" placeholder="ATK">
    <input id="ivDef" inputmode="numeric" placeholder="DEF">
    <input id="ivSpe" inputmode="numeric" placeholder="SPD">
    <input id="ivLink" inputmode="numeric" placeholder="Lnk">
    <select name="ivEnergy" id="ivEnergy">
      <option value="110">Very High</option>
      <option value="105">High</option>
      <option value="100">Medium</option>
      <option value="95">Low</option>
      <option value="90">Very Low</option>
    </select>
    <button onclick="executeIVCalc(this)">Calculate IVs</button>
    <pre id="ivResult"></pre>
  </div>`);
  ivs.attr('name', name);
  var detail =
    '<table class="tbl">' +
    PokeLinks[name]
      .sort(cpHeroLink)
      .map((v) => {
        let color = '';
        if (lget(`${v.hero}-poke-${name}`) == 'own') color = 'hero-has-poke ';
        if (lget(`${v.hero}-own`)) color += 'has-hero';
        return `<tr class="${v.link.includes(100) ? 'hundred-link' : v.link.includes(90) ? 'ninety-link' : ''}">
                <td class="${color}" name="${v.hero}-${name}">
                  <div class="dstar">
                    <a href="#hero-${v.hero}">${v.hero}</a>
                    <span class="star" onclick="starClick(this, '${v.hero.replace("'", "\\'")}', '${name}')">★</span>
                  </div>
                </td>
                ${v.link.map((u) => `<td class="max-link show" name="${v.hero}">${u}</td>`).join('')}
              </tr>`;
      })
      .join('') +
    '</table>';
  div.empty();
  div.append($('<div class="divTbl">').append(ivs, detail));
  div.append(
    $(`<button class="close">✖</button>`).click(() =>
      div.closest('la').hide(),
    ),
  );
  div.find('.show').click(function () {
    var divDe = div.closest('.divLa').find('.more');
    showHeroDetail(divDe, $(this).attr('name'), '.more');
    divDe.show();
  });
};

const showHeroDetail = (div, hero, close) => {
  if (!HeroLinks[hero]) {
    alert('No HeroLinks', hero);
    return;
  }
  var heroName = `<div class="hero-name"><img src="${heroImgs[hero]}" class="HeroLinks" name="${hero}"/>${hero}</div>`;
  var heroSkill = $(`<div class="hero-skill"></div>`);
  if (heroRankUp[hero]) {
    $(`<div>Rank-Up</div>`).appendTo(heroSkill);
    var rankUp = $(`<ul>`).appendTo(heroSkill);
    rankUp.append(heroRankUp[hero].map((v, i) => `<li>${i + 1}. ${v}</li>`));
  }
  $(`<div>Skills</div>`).appendTo(heroSkill);
  var skillL = $(`<ul>`).appendTo(heroSkill);
  heroSkills[hero].forEach((v, i) => {
    skillL.append(`<li>${i + 1}.${v}: ${skillsList[v]}</li>`);
  });
  var detail =
    '<table class="tbl">' +
    sortByPos(HeroLinks[hero])
      .map((v) => {
        var move = pokeMoves[v.name]?.name;
        if (!move) {
          ll('No move: ' + move);
          return;
        }
        move = allMoves[move];
        let color = '';
        if (lget(`${hero}-poke-${v.name}`) == 'own') color = 'hero-has-poke ';
        return `<tr class="${v.link.includes(100) ? 'hundred-link' : v.link.includes(90) ? 'ninety-link' : ''}">
                ${v.link.map((u) => `<td class="max-link">${u}</td>`).join('')}
                <td class="add-poke" name="${v.name}"><img src="https://www.serebii.net/conquest/pokemon/${String(v.id).padStart(3, '0')}.png"></td>
                <td class="${color}" name="${hero}-${v.name}">
                  <div class="dstar">
                    <a href="#poke-${v.name}">${v.name}</a>
                    <span class="star" onclick="starClick(this, '${hero.replace("'", "\\'")}', '${v.name}')">★</span>
                  </div>
                </td>
                <td>${pokeData[v.name].total}</td>
                <td style="text-align: center;"><div>${move.pow}</div><div>${move.star}</div></td>
                <td>${move.acc}</td>
                <td><img style="width: 30px;" src="${move.range}"></td>
              </tr>`;
      })
      .join('') +
    '</table>';
  div.empty();
  div.append($('<div class="divTbl">').append(heroName, heroSkill, detail));
  div.append(
    $(`<button class="close">✖</button>`).click(() =>
      div.closest(close || 'la').hide(),
    ),
  );
  div.find('.add-poke').click(function () {
    id = +prompt('Add Pokemon to Hero:', '0');
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
      pos: $(this).attr('name'),
    };
    HeroLinks[hero].push(pkm);
    PokeLinks[pkm.name].push({ hero: hero, link: pkm.link });
    ladd('HeroLinks', { hero, pkm });
    showHeroDetail(div, hero, close);
  });
};

function starClick(e, hero, poke) {
  if (lget(`${hero}-poke-${poke}`) == 'own') {
    lset(`${hero}-poke-${poke}`, '');
  } else {
    lset(`${hero}-poke-${poke}`, 'own');
  }
  $(`.divTbl td[name="${hero}-${poke}"]`).toggleClass('hero-has-poke');
}

$(function () {
  let startTime = new Date().getTime();

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
    var img = $(`<img src="${v}" border="0" id=${v.match(/([^/]+).gif$/)[1]}>`);
    $('.pktype').append(img);
  });
  $('.pktype img').click(function () {
    filterPokemon(3, $(this).attr('src'));
  });

  // Filter Pokemon's move
  pokeTypes.forEach((v) => {
    var img = $(`<img src="${v}" border="0" id=${v.match(/([^/]+).gif$/)[1]}>`);
    $('.movetype').append(img);
  });
  $('.movetype img').click(function () {
    filterPokemon(4, $(this).attr('src'));
  });
  ll('Filter Pokemons move: ', new Date().getTime() - startTime);
  startTime = new Date().getTime();

  // Link pokemon to veekun.com
  $('#myTable>tbody>tr').each(function () {
    const tds = $(this).children();
    const lnk = $(tds[2]).find('a');
    const name = lnk.text().trim();
  });
  ll('Modify table: ', new Date().getTime() - startTime);
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
    var la = $(this).next();
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
  var data = [...plink1, ...plink2];
  var map = {};
  data.forEach((line) => {
    // 1. Tách phần trong ngoặc (nếu có)
    let match = line.match(/^(.*?)(\s*\([^)]*\))?$/);
    const mainPart = match[1]; // Shingen - Rhyperior//Groudon
    const extraPart = match[2] || ''; // (not Rhyhorn/Rhydon)
    const [hero, pokes] = mainPart.split('-').map((s) => s.trim());
    if (!pokes) return;

    // 2. Tách theo pokemon nhưng giữ separator
    const regex = /([\/]*)([^\/]+)/g;
    while ((match = regex.exec(pokes)) !== null) {
      const prefix = match[1]; // /// hoặc /
      const poke = match[2]; // Pokemon
      if (!map[poke]) map[poke] = [];
      map[poke].push({ hero, prefix });
    }
  });
  document.querySelectorAll('#myTable>tbody>tr').forEach((tr) => {
    const td = tr.children[2];
    if (!td) return;
    const poke = td.textContent.trim();
    if (map[poke]) {
      map[poke].forEach((v) => {
        const div = $(`<div style="margin-top:2px"></div>`);
        const color = lget(`${v.hero}-own`) ? 'aqua' : 'darkgray';
        $(div).append(
          `<a href="#hero-${v.hero}" style="color: ${color}">${v.prefix + v.hero}</a>`,
        );
        $(td).append(div);
      });
    }
  });
  ll('Fill Heroes vào pokemon: ', new Date().getTime() - startTime);
  startTime = new Date().getTime();

  // HERO LIST
  const ppp = (line) => {
    // 1. Tách phần trong ngoặc (nếu có)
    let match = line.match(/^(.*?)(\s*\([^)]*\))?$/);
    const mainPart = match[1]; // Shingen - Rhyperior//Groudon
    const extraPart = match[2] || ''; // (not Rhyhorn/Rhydon)
    // 2. Tách hero và pokemon
    const [hero, pokes] = mainPart.split('-').map((s) => s.trim());

    // Hero image
    const herod = $(`<div id="hero-${hero}" class="herod"></div>`);
    if (lget(`${hero}-own`)) herod.addClass('hero-own');

    // Show Hero detail: rank-up and pokemons max-link
    herod.append(
      `<span class="skill">
        <img src="${heroImgs[hero]}" class="HeroLinks" name="${hero}">
      	<la></la>
      </span>`,
    );

    // Toggle has/not own Hero
    const handp = $(`<div></div>`);
    handp.append(
      `<a href="https://veekun.com/dex/conquest/warriors/${hero}" target="_blank">${hero}</a>`,
    );
    const add = $(
      `<span>&nbsp;${'+'.repeat(heroRankUp[hero]?.length || 1)}&nbsp;</span>`,
    ).click(() => {
      herod.toggleClass('hero-own');
      lset(`${hero}-own`, herod.hasClass('hero-own'));
    });
    handp.append(add);

    // Pokemons name
    let pokel = [];
    const regex = /([\/]*)([^\/]+)/g;
    while ((match = regex.exec(pokes)) !== null) {
      const prefix = match[1]; // /// hoặc /
      const poke = match[2].trim(); // Pokemon
      const pk = $(`<a href="#poke-${poke}">${poke}</a>`);
      if (lget(`${hero}-poke-${poke}`) == 'own') {
        pk.addClass('poke-own');
      } else if (lget(`${hero}-poke-${poke}`)) {
        pk.addClass('poke-want');
      }
      pokel.push([poke, pk, prefix]);
      handp.append(prefix, pk);
    }
    // handp.append(extraPart);
    herod.append(handp);

    // Pokemons images
    pokel.forEach((pk) => {
      var pokd = $(
        `<div class="pklink"><img pk="${pk[0]}" src="${pokeImgs[pk[0]]}"/></div>`,
      );
      pokd.click(() => {
        if (!pk[1].hasClass('poke-want') && !pk[1].hasClass('poke-own')) {
          pk[1].toggleClass('poke-want');
          lset(`${hero}-poke-${pk[0]}`, 'want');
        } else if (pk[1].hasClass('poke-own')) {
          pk[1].toggleClass('poke-own');
          lset(`${hero}-poke-${pk[0]}`, '');
        } else if (pk[1].hasClass('poke-want')) {
          pk[1].toggleClass('poke-want');
          pk[1].toggleClass('poke-own');
          lset(`${hero}-poke-${pk[0]}`, 'own');
        }
      });
      herod.append(pokd);
    });
    // Hero skills
    if (!heroSkills[hero]) {
      alert('No hero skill ' + hero);
      return;
    }
    heroSkills[hero].forEach((v, i) => {
      herod.append(
        `<span class="skill"><span class="skillsList">${i + 1}.${v}</span><la></la></span>`,
      );
    });
    $('#plink').append(herod);
  };
  $('#plink').append(`<div><h1>WARLORD/POKEMON</h1></div>`);
  plink1.forEach(ppp);
  $('#plink').append(`<div><h1>WARRIOR/POKEMON</h1></div>`);
  plink2.forEach(ppp);
  // Show Hero detail
  $('.HeroLinks').click(function (e) {
    e.stopPropagation();
    var la = $(this).next();
    var name = $(this).attr('name').trim();
    var div = $('<div>');
    la.empty().append(div);
    showHeroDetail(div, name);
    la.show();
  });
  // Show Hero skill detail
  $('.skillsList').click(function (e) {
    e.stopPropagation();
    var la = $(this).next();
    var v = $(this)
      .text()
      .trim()
      .match(/\d+\.(.*)/)[1];
    la.text(skillsList[v]);
    la.show();
  });

  // Hide msg-box
  $('body').on('click', function () {
    $('la').hide();
  });
  $('.skill la').on('click', function (e) {
    e.stopPropagation();
  });

  ll('HERO LIST: ', new Date().getTime() - startTime);
  startTime = new Date().getTime();
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
      alert('Uploaded');
    } else if (version < hver) {
      // GET from HOST
      Object.keys(valsHost.data).forEach((key) => {
        localStorage.setItem(key, valsHost.data[key]);
      });
      alert('Downloaded');
      window.location.reload();
    } else {
      alert('No updated');
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
}
