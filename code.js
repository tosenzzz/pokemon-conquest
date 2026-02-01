const ll = console.log;
const lget = (key) => JSON.parse(localStorage.getItem(key));
const lset = (key, val) => {
  localStorage.setItem('version', +(lget('version') || 0) + 1);
  localStorage.setItem(key, JSON.stringify(val));
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

const addBox = (title, detail, tag = 'span') => {
  let sdiv = $(`<${tag} class="skill"></${tag}>`);
  let dTitle = $(`<span>${title}</span>`);
  let dDetail = $(`<la>${detail}</la>`);
  sdiv.append(dTitle, dDetail);
  dTitle.click(() => {
    dDetail.show();
    setTimeout(() => dDetail.hide(), 5000);
  });
  return sdiv;
};

$(function () {
  // Column sort
  $('#myTable').tableSortable();

  // Search Enter-key
  $('#search').on('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      search();
    }
  });

  const pokeImgs = {};
  // Link pokemon to veekun.com
  $('#myTable>tbody>tr').each(function () {
    const tds = $(this).children();
    const lnk = $(tds[2]).find('a');
    const name = lnk.text().trim();
    lnk.attr('href', `https://veekun.com/dex/conquest/pokemon/${name}`);
    lnk.attr('target', '_blank');
    const id = String(+$(tds[0]).text()).padStart(3, '0');
    pokeImgs[name] = `https://www.serebii.net/conquest/pokemon/${id}.png`;
    // Set row-id by Poke name
    $(this).attr('id', 'poke-' + name);

    // Update Pokemon's move
    const tr = $(tds[4]).find('tr');
    tr.append(
      `<td align="center" width="33%"><img src="${moveRanges[name]}" border="0"></td>`,
    );
    var moveTd = tr.find('td:eq(1)');
    var moveNm = moveTd.text();
    var move = pokeMoves[moveNm.trim().toLowerCase()];
    moveTd.empty();
    if (!move) alert('No pokemon move: ' + moveNm);
    else {
      moveTd.append(addBox(moveNm, move.eff));
      tr.find('td:eq(0)').html(
        tr.find('td:eq(0)').html().replace('Power', move.pow),
      );
      tr.find('td:eq(2)').prepend(`${move.acc}<br>`);
    }

    // Update Poke skill
    const pskills = [];
    $(tds[11])
      .find('a')
      .each(function () {
        pskills.push($(this).text().trim());
      });
    $(tds[11]).empty();
    var ul = $(`<ul></ul>`);
    $(tds[11]).append(ul);
    pskills.forEach((v, i) => {
      if (!pokeSkills[v]) alert(`No skill ${v}`);
      $(ul).append(addBox(v, pokeSkills[v], 'li'));
    });
    // Update locations
    const locas = $(tds[13])
      .html()
      .split('<br>')
      .map((v) => v.trim())
      .filter((v) => !!v);
    $(tds[13]).empty();
    var ul = $(`<ul></ul>`);
    $(tds[13]).append(ul);
    locas.forEach((v, i) => {
      ul.append(`<li>${v}</li>`);
    });
  });

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
    const add = $(`<img src="${heroImgs[hero]}" style="height:20px;"/>`).click(
      () => {
        herod.toggleClass('hero-own');
        lset(`${hero}-own`, herod.hasClass('hero-own'));
      },
    );
    herod.append(add);
    const handp = $(`<div></div>`);
    handp.append(
      `<a href="https://veekun.com/dex/conquest/warriors/${hero}" target="_blank">${hero}</a>`,
    );

    // Hero rank-up
    if (heroRankUp[hero]) {
      handp.append(
        addBox(
          '&nbsp;+&nbsp;',
          heroRankUp[hero]
            .map((v, i) => `<div>${i + 1}. ${v}</div>`)
            .join('\n'),
        ),
      );
    } else {
      handp.append(`&nbsp;-&nbsp;`);
    }

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
      var pokd = $(`<div class="pklink"><img src="${pokeImgs[pk[0]]}"/></div>`);
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
    (heroSkills[hero] || []).forEach((v, i) => {
      herod.append(addBox(`${i + 1}.${v}`, skillsList[v]));
    });
    $('#plink').append(herod);
  };
  $('#plink').append(`<div><h1>WARLORD/POKEMON</h1></div>`);
  plink1.forEach(ppp);
  $('#plink').append(`<div><h1>WARRIOR/POKEMON</h1></div>`);
  plink2.forEach(ppp);

  // Fill password vào pokemon
  var pwd = pwd_data.trim().split('\n').sort();
  var pwdl = {};
  pwd.forEach((line) => {
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
  // Show password list
  Object.keys(pwdl).forEach((k) => {
    $('#pwd').append(
      `${k}${k.length > 7 ? '\t' : '\t\t'}${pwdl[k].join(' ')}\n`,
    );
  });
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
        const color = lget(`${v.hero}-own`) ? 'yellow' : 'aqua';
        $(div).append(
          `<a href="#hero-${v.hero}" style="color:${color}">${v.prefix + v.hero}</a>`,
        );
        $(td).append(div);
      });
    }
  });

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

  // Sync button
  if (lget('host') && lget('key')) {
    const syncBtn = $(`<button>Sync</button>`);
    $('.sbar').append(syncBtn);
    syncBtn.click(() => syncData());
  }
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
