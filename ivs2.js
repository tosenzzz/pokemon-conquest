/* --- POKEMON DATA --- */
const PokeStats = {
  Eevee: [220, 115, 119, 115],
  Vaporeon: [370, 225, 159, 135],
  Jolteon: [240, 225, 159, 265],
  Flareon: [240, 265, 175, 135],
  Espeon: [240, 265, 159, 225],
  Umbreon: [300, 135, 245, 135],
  Leafeon: [240, 225, 199, 195],
  Glaceon: [240, 265, 209, 135],
  Ralts: [166, 95, 65, 85],
  Kirlia: [186, 135, 95, 105],
  Gardevoir: [246, 255, 185, 165],
  Gallade: [246, 255, 185, 165],
  Magikarp: [150, 25, 79, 165],
  Gyarados: [300, 255, 183, 167],
  Pichu: [150, 75, 55, 125],
  Pikachu: [180, 105, 75, 185],
  Raichu: [230, 185, 139, 205],
  Wooper: [220, 55, 75, 35],
  Quagsire: [300, 175, 155, 75],
  Igglybuff: [290, 65, 39, 35],
  Jigglypuff: [340, 95, 49, 45],
  Wigglytuff: [390, 145, 99, 95],
  Zubat: [190, 95, 79, 115],
  Golbat: [260, 135, 149, 185],
  Crobat: [280, 185, 165, 265],
  Starly: [190, 115, 65, 125],
  Staravia: [220, 155, 95, 165],
  Staraptor: [280, 245, 125, 205],
  Bidoof: [228, 95, 85, 67],
  Bibarel: [268, 175, 125, 147],
  Venipede: [170, 95, 103, 119],
  Whirlipede: [190, 115, 183, 99],
  Scolipede: [230, 185, 163, 229],
  Shinx: [200, 85, 73, 95],
  Luxio: [230, 175, 103, 125],
  Luxray: [270, 195, 163, 145],
  Litwick: [210, 135, 115, 45],
  Lampent: [230, 195, 125, 115],
  Chandelure: [230, 295, 185, 165],
  Roggenrola: [220, 155, 115, 35],
  Boldore: [250, 215, 149, 45],
  Gigalith: [280, 275, 205, 55],
  Petilil: [200, 145, 105, 65],
  Lilligant: [250, 225, 155, 185],
  Mareep: [220, 135, 89, 75],
  Flaaffy: [250, 165, 119, 95],
  Ampharos: [290, 235, 169, 115],
  Cottonee: [190, 79, 115, 137],
  Whimsicott: [230, 159, 165, 237],
  Riolu: [190, 145, 85, 125],
  Lucario: [250, 235, 145, 185],
  Chingling: [200, 135, 105, 95],
  Chimecho: [240, 195, 155, 135],
  Ekans: [180, 125, 103, 115],
  Arbok: [230, 175, 153, 165],
  Pineco: [210, 135, 129, 35],
  Forretress: [260, 185, 205, 85],
  Meowth: [190, 95, 79, 185],
  Persian: [240, 145, 129, 235],
  Spheal: [250, 115, 105, 55],
  Sealeo: [290, 155, 145, 95],
  Walrein: [330, 195, 185, 135],
  Gothita: [200, 115, 119, 95],
  Gothorita: [230, 155, 159, 115],
  Gothitelle: [250, 195, 209, 135],
  Sandile: [210, 149, 75, 135],
  Krokorok: [230, 169, 95, 153],
  Krookodile: [300, 239, 145, 189],
  Duskull: [150, 85, 185, 55],
  Dusclops: [190, 145, 265, 55],
  Dusknoir: [200, 205, 0, 275],
  Munna: [262, 139, 105, 53],
  Musharna: [342, 219, 185, 63],
  Blitzle: [200, 125, 69, 157],
  Zebstrika: [260, 165, 131, 237],
  Dratini: [192, 105, 99, 105],
  Dragonair: [232, 173, 139, 145],
  Dragonite: [292, 273, 199, 165],
  Larvitar: [210, 133, 105, 87],
  Pupitar: [250, 173, 145, 107],
  Tyranitar: [310, 273, 215, 127],
  Beldum: [190, 115, 145, 65],
  Metang: [230, 155, 185, 105],
  Metagross: [270, 275, 225, 145],
  Gible: [226, 85, 95, 89],
  Gabite: [246, 185, 125, 169],
  Garchomp: [326, 265, 185, 209],
  Croagunk: [206, 127, 85, 105],
  Toxicroak: [276, 177, 135, 175],
  Deino: [214, 95, 105, 81],
  Zweilous: [254, 175, 145, 121],
  Hydreigon: [294, 255, 185, 201],
  Snorunt: [210, 105, 105, 105],
  Glalie: [270, 165, 165, 165],
  Froslass: [250, 165, 145, 225],
  Minccino: [220, 105, 85, 155],
  Cinccino: [260, 195, 125, 235],
  Machop: [250, 165, 89, 75],
  Machoke: [270, 205, 135, 95],
  Machamp: [290, 265, 169, 115],
  Timburr: [260, 165, 95, 75],
  Gurdurr: [280, 215, 139, 85],
  Conkeldurr: [320, 285, 165, 95],
  Cubchoo: [220, 125, 85, 85],
  Beartic: [300, 225, 165, 105],
  Oshawott: [220, 131, 95, 95],
  Dewott: [260, 171, 125, 125],
  Samurott: [300, 205, 159, 145],
  Charmander: [188, 125, 97, 135],
  Charmeleon: [226, 133, 127, 165],
  Charizard: [266, 223, 167, 205],
  Gastly: [170, 205, 69, 165],
  Haunter: [200, 235, 105, 195],
  Gengar: [230, 265, 139, 225],
  Chimchar: [198, 121, 93, 127],
  Monferno: [238, 161, 109, 167],
  Infernape: [262, 213, 147, 221],
  Snivy: [200, 95, 115, 131],
  Servine: [230, 125, 155, 171],
  Serperior: [260, 155, 195, 231],
  Tepig: [240, 95, 95, 95],
  Pignite: [290, 191, 115, 115],
  Emboar: [330, 205, 135, 135],
  Sewaddle: [200, 85, 135, 89],
  Swadloon: [220, 105, 175, 89],
  Leavanny: [260, 145, 155, 189],
  Abra: [160, 215, 75, 185],
  Kadabra: [190, 245, 105, 215],
  Alakazam: [220, 275, 135, 245],
  Treecko: [190, 135, 95, 145],
  Grovyle: [210, 175, 115, 195],
  Sceptile: [250, 215, 155, 245],
  Piplup: [216, 127, 113, 85],
  Prinplup: [238, 167, 149, 105],
  Empoleon: [278, 227, 193, 125],
  Pansage: [210, 111, 101, 133],
  Simisage: [260, 201, 131, 207],
  Pansear: [210, 111, 101, 133],
  Simisear: [260, 201, 131, 207],
  Panpour: [210, 111, 101, 133],
  Simipour: [260, 201, 131, 207],
  Darumaka: [250, 185, 95, 105],
  Darmanitan: [320, 285, 115, 195],
  Axew: [202, 179, 105, 119],
  Fraxure: [242, 239, 125, 139],
  Haxorus: [262, 299, 165, 199],
  Joltik: [210, 119, 105, 135],
  Galvantula: [250, 199, 125, 221],
  Aron: [210, 145, 145, 65],
  Lairon: [230, 185, 195, 85],
  Aggron: [250, 225, 245, 105],
  Drilbur: [230, 175, 89, 141],
  Excadrill: [330, 275, 129, 181],
  Zorua: [190, 165, 85, 135],
  Zoroark: [230, 245, 125, 215],
  Skorupi: [190, 105, 149, 135],
  Drapion: [250, 185, 189, 195],
  Pawniard: [200, 175, 115, 125],
  Bisharp: [240, 255, 175, 145],
  Rhyhorn: [270, 175, 129, 55],
  Rhydon: [320, 265, 169, 85],
  Rhyperior: [340, 285, 189, 85],
  Shieldon: [170, 89, 211, 65],
  Bastiodon: [230, 109, 311, 65],
  Scraggy: [210, 155, 145, 101],
  Scrafty: [240, 185, 235, 121],
  Drifloon: [290, 125, 83, 145],
  Drifblim: [410, 165, 103, 165],
  Rufflet: [250, 171, 105, 125],
  Braviary: [310, 251, 155, 165],
  Anorith: [200, 195, 105, 155],
  Armaldo: [260, 255, 185, 95],
  Larvesta: [220, 175, 115, 125],
  Volcarona: [280, 275, 175, 205],
  Onix: [180, 95, 209, 145],
  Steelix: [260, 175, 269, 65],
  Beedril: [240, 165, 125, 155],
  Munchlax: [380, 175, 129, 15],
  Snorlax: [430, 225, 179, 65],
  Emolga: [220, 155, 125, 211],
  Sneasel: [220, 195, 135, 235],
  Weavile: [250, 245, 155, 255],
  Misdreavus: [230, 175, 149, 175],
  Mismagius: [230, 215, 169, 215],
  Audino: [316, 125, 177, 105],
  Carnivine: [258, 205, 149, 97],
  Spiritomb: [210, 189, 221, 75],
  Scyther: [250, 225, 165, 215],
  Scizor: [250, 265, 185, 135],
  Lapras: [370, 175, 179, 125],
  Terrakion: [292, 263, 185, 221],
  Articuno: [290, 195, 229, 175],
  Registeel: [270, 155, 305, 105],
  Groudon: [310, 305, 235, 185],
  Dialga: [310, 305, 225, 185],
  Mewtwo: [322, 313, 185, 265],
  Reshiram: [310, 305, 225, 185],
  Zekrom: [310, 305, 225, 185],
  Arceus: [350, 245, 245, 245],
  Rayquaza: [325, 310, 190, 200],
};

/* --- CALCULATION FUNCTIONS --- */

function calculateOneStat(base, iv, link, energy) {
  return Math.trunc(
    (Math.trunc(((base + iv) * Math.trunc(link)) / 100) * energy) / 100,
  );
}

function CalcIVs(statList, baseList, link, energy) {
  let min = [-1, -1, -1, -1];
  let max = [-1, -1, -1, -1];

  for (let iv = 0; iv < 32; iv++) {
    for (let i = 0; i < 4; i++) {
      const stat = calculateOneStat(baseList[i], iv, link, energy);
      const target = statList[i];

      if ((iv === 0 && stat > target) || (iv === 31 && stat < target)) {
        min[i] = -1000;
        max[i] = 1000;
      }

      if (stat === target && min[i] === -1) {
        min[i] = iv;
        max[i] = iv;
      }

      if (stat === target && max[i] < iv) {
        max[i] = iv;
      }
    }
  }
  return [min, max];
}

function CalcStats(ivList, baseList, link, energy) {
  return ivList.map((iv, i) => {
    if (iv < 0 || iv > 31) return 'Err';
    return calculateOneStat(baseList[i], iv, link, energy);
  });
}

/* --- EXECUTION --- */

function clearIVCalc(e) {
  var div = $(e).closest('.ivs');
  setVals(div, '', '', '', '', '', 110);
}

async function pasteIVs(e) {
  var div = $(e).closest('.ivs');
  var str = await navigator.clipboard.readText();
  var arr = str
    .split(/[\s\-]/)
    .map((v) => +v)
    .filter((v) => !Number.isNaN(v));
  // arr.splice(4, 0, '');
  setVals(div, ...arr);
}

var minIVs = [0, 0, 0, 0];
var maxIVs = [31, 31, 31, 31];
function executeIVCalc(e) {
  var div = $(e).closest('.ivs');
  var poke = div.attr('poke');
  var baseStats = PokeStats[poke];
  if (!baseStats) {
    alert('No pokemon ' + poke);
  }
  var hero = div.attr('hero');
  div.find('#ivResult').empty();

  var stats = [
    Number(div.find('#ivHP').val()),
    Number(div.find('#ivAtk').val()),
    Number(div.find('#ivDef').val()),
    Number(div.find('#ivSpe').val()),
  ];
  var link = Number(div.find('#ivLink').val());
  var energy = +div.find('#ivEnergy').val();

  if (link > 0 && stats.some((v) => v > 0)) {
    var [min, max] = CalcIVs(stats, baseStats, link, energy);
    var maxS = CalcStats(maxIVs, baseStats, link, energy);

    if (!hero) {
      showIVs(div, stats, link, energy, min, max, maxS, poke);
    } else {
      // Optimze min-max IVs
      var last = lget(`${hero}-ivs-${poke}`);
      if (last?.min?.length && last?.max?.length) {
        if (
          min.every((v, i) => v < last.max[i]) &&
          max.every((v, i) => v > last.min[i])
        ) {
          for (i = 0; i < 4; i++) {
            min[i] = Math.max(min[i], last.min[i]);
            max[i] = Math.min(max[i], last.max[i]);
          }
        }
      }

      var total = showIVs(div, stats, link, energy, min, max, maxS, poke);
      var tdIvs = $(`[name="${hero}-ivs-${poke}"]`);
      tdIvs.text(total + '%');
      tdIvs.removeClass(['max-ivs', 'good-ivs']);
      tdIvs.addClass(cssIVs(total));
      lset(`${hero}-ivs-${poke}`, { stats, link, energy, total, min, max });
    }
  } else {
    if (link <= 0) {
      // Find all valid IVs
      var bestIvs = 0;
      for (link = 1; link <= 100; link++) {
        var [min, max] = CalcIVs(stats, baseStats, link, energy);
        var maxS = CalcStats(maxIVs, baseStats, link, energy);
        if (
          !min.some((v) => v == -1000 || v == 1000) &&
          !max.some((v) => v == -1000 || v == 1000)
        ) {
          var total = showIVs(div, stats, link, energy, min, max, maxS, poke);
          if (total > bestIvs) bestIvs = total;
        }
      }
      var history = [...stats, 0, energy, bestIvs];
      var SearchHistory = lget(`ivs-${poke}`) || [];
      if (bestIvs > 0) {
        setVals(div, '', '', '', '', '', energy);
        if (!SearchHistory.some((v) => v.join(',') == history.join(','))) {
          SearchHistory.push(history);
          lset(`ivs-${poke}`, SearchHistory);
        }
      }
    } else {
      // Find Max Stats
      var maxs = CalcStats(maxIVs, baseStats, link, energy);
      showIVs(div, maxs, link, energy, maxIVs, maxIVs, maxs, poke);
      setVals(div, '', '', '', '', link, energy);
    }
  }
  div.find('.history-list').empty();
}

function cssIVs(total) {
  if (total >= 85) return 'max-ivs';
  else if (total >= 70) return 'good-ivs';
  return;
}

function setVals(div, hp, atk, def, spd, lnk, ener) {
  div.find('#ivHP').val(hp);
  div.find('#ivAtk').val(atk);
  div.find('#ivDef').val(def);
  div.find('#ivSpe').val(spd);
  div.find('#ivLink').val(lnk);
  div.find('#ivEnergy').val(ener);
}

var CopyIVs = [];
function showIVs(div, stats, link, energy, min, max, maxStats, poke) {
  setVals(div, ...stats, link, energy);

  const labels = ['HP', 'Atk', 'Def', 'Spe'];
  let out = [
    `<tr>
      <td class="add">${link}%</td>
      <th>Mn</th>
      <th class="paste">Mx</th>
      <th>SMx</th>
      <th>Dif</th>
    </tr>`,
  ];
  let total1 = 0;
  let total2 = 0;
  let maxTt = 0;
  for (let i = 0; i < 4; i++) {
    if (min[i] === -1000 || max[i] === 1000) {
      out.push(`<tr><th>${labels[i]}</th><td>ERR</td></tr>`);
    } else {
      total1 += min[i];
      total2 += max[i];
      maxTt += maxStats[i];
      out.push(
        `<tr>
          <th>${labels[i]}</th>
          <td>${min[i]}</td>
          <td>${max[i]}</td>
          <td>${maxStats[i]}</td>
          <td>${maxStats[i] - stats[i]}</td>
        </tr>`,
      );
    }
  }
  total1 = Math.trunc((total1 * 100) / (31 * 4));
  total2 = Math.trunc((total2 * 100) / (31 * 4));
  out.push(
    `<tr>
      <th>Total</th>
      <td class="${cssIVs(total1)}">${total1}</td>
      <td class="${cssIVs(total2)} copy">${total2}</td>
      <td>${maxTt}</td>
      <td>${maxTt - stats.reduce((tt, v) => tt + v, 0)}</td>
    </tr>`,
  );
  var tbl = $(`<table>`);
  tbl.appendTo(div.find('#ivResult')).html(out);

  tbl.find('.add').click(function () {
    setVals(div, ...stats, $(this).text().replace('%', ''), energy);
  });
  tbl.find('.copy').attr('IVs', max);
  tbl.find('.copy').click(function () {
    CopyIVs = $(this)
      .attr('IVs')
      .split(',')
      .map((v) => +v);
    $(this).css('color', 'blue');
  });
  tbl.find('.paste').click(function () {
    var baseStats = PokeStats[poke];
    var maxStats = CalcStats(maxIVs, baseStats, link, energy);
    var copyStats = CalcStats(CopyIVs, baseStats, link, energy);
    div.find('#ivResult').empty();
    showIVs(div, copyStats, link, energy, CopyIVs, CopyIVs, maxStats, poke);
  });
  return total2;
}
