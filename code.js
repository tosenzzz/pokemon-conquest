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
        ll(e);
      },
    });
  });
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
  // Link pokemon detail2
  $('#myTable>tbody>tr').each(function () {
    const tds = $(this).children();
    const lnk = $(tds[2]).find('a');
    lnk.attr('href', `https://veekun.com/dex/conquest/pokemon/${lnk.text()}`);
    lnk.attr('target', '_blank');
    const id = String(+$(tds[0]).text()).padStart(3, '0');
    pokeImgs[lnk.text()] = `https://www.serebii.net/conquest/pokemon/${id}.png`;
  });

  // Gán id cho mỗi dòng table theo tên Pokémon
  $('#myTable>tbody>tr').each(function () {
    const name = $(this).find('td:eq(2)').text().trim();
    if (name) {
      $(this).attr('id', 'poke-' + name);
    }
    // Insert skill image
    const tr = $(this).find('td:eq(4) tr');
    tr.append(
      `<td align="center" width="33%"><img src="${SkillImgs[name]}" border="0"></td>`,
    );
  });

  // HERO LIST
  const ppp = (line) => {
    // 1. Tách phần trong ngoặc (nếu có)
    let match = line.match(/^(.*?)(\s*\([^)]*\))?$/);
    const mainPart = match[1]; // Shingen - Rhyperior//Groudon
    const extraPart = match[2] || ''; // (not Rhyhorn/Rhydon)
    // 2. Tách hero và pokemon
    const [hero, pokes] = mainPart.split('-').map((s) => s.trim());
    // 3. Tạo hyperlink CHỈ cho pokemon
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
    }
    // 4. Render ra HTML (GIỮ NGUYÊN NGOẶC)
    const herod = $(`<div id="hero-${hero}" class="herod"></div>`);
    const add = $(
      `<img src="${heroImgs[hero]}" style="height:20px;margin-right:5px;"/>`,
    ).click(() => {
      herod.toggleClass('hero-own');
      lset(`${hero}-own`, herod.hasClass('hero-own'));
    });
    herod.append(add);
    herod.append(
      `<a href="https://veekun.com/dex/conquest/warriors/${hero}" target="_blank">${hero}</a>&nbsp;-&nbsp;`,
    );
    pokel.forEach((pk) => {
      herod.append(pk[2], pk[1]);
    });
    herod.append(extraPart);
    if (lget(`${hero}-own`)) {
      herod.addClass('hero-own');
    }
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

  // Fill Warlord vào pokemon
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
});

async function search() {
  var val = $('#search').val().toLowerCase();
  // Config
  if (val.startsWith('#')) {
    val = val.slice(1); // remove #, tách key / value
    const [key, value] = val.split('=', 2);
    switch (key) {
      case 'key':
        const [k, host] = value.split(',', 2);
        lset('key', k);
        lset('host', host);
        break;
      case 'get':
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
        } else if (version < hver) {
          // GET from HOST
          Object.keys(valsHost.data).forEach((key) => {
            localStorage.setItem(key, valsHost.data[key]);
          });
          window.location.reload();
        } else {
          alert('Syned');
        }

        break;
      default:
        alert('invalid command');
    }
    $('#search').val('');
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
