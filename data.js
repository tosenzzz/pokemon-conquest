function initData() {
  $('#myTable tr').each(function () {
    const $cells = $(this).children();
    // Lấy cột 5-9
    const $move = $cells.slice(4, 9);
    // Append xuống cuối
    $(this).append($move);
  });

  $('#myTable table tr').each(function () {
    const $cells = $(this).children();
    // Lấy cột Power
    const $move = $cells.slice(2, 3);
    // Append lên đầu
    $(this).prepend($move);
  });

  // Move link outside of table
  $('#myTable>tbody>tr').each(function () {
    const tds = $(this).children();
    const lnk = $(tds[1]).find('a');
    $(tds[1]).append(lnk);
    $(tds[1]).find('table').remove();
  });

  // Get pokemons data (HP, Atk, Def, Spd): https://veekun.com/dex/conquest/pokemon
  pks = {};
  $('.dex-pokemon-moves>tbody>tr').each(function () {
    const tds = $(this).children();
    pks[$(tds[1]).text()] = [
      $(tds[5]).text(),
      $(tds[6]).text(),
      $(tds[7]).text(),
      $(tds[8]).text(),
      $(tds[9]).text(),
    ];
  });
  // Set pokemon data
  $('#myTable>tbody>tr').each(function () {
    const tds = $(this).children();
    nm = $(tds[2]).text().trim();
    pk = pks[nm] || ['0', '0', '0', '0', '0'];

    $(tds[9]).text(pk[0]);
    $(tds[10]).text(pk[1]);
    $(tds[11]).text(pk[2]);
    $(tds[12]).text(pk[3]);
    $(tds[13]).text(pk[4]);
  });

  // Get Hero list 1: https://veekun.com/dex/conquest/warriors
  a = [];
  $('.dex-pokemon-moves tbody tr')
    .find('td:eq(1)')
    .each((i, v) => {
      a.push($(v).text());
    });
  // Hero list 2
  var data = [...plink1, ...plink2];
  var b = [];
  data.forEach((line) => {
    // 1. Tách phần trong ngoặc (nếu có)
    let match = line.match(/^(.*?)(\s*\([^)]*\))?$/);
    const mainPart = match[1]; // Shingen - Rhyperior//Groudon
    const extraPart = match[2] || ''; // (not Rhyhorn/Rhydon)
    const [hero, pokes] = mainPart.split('-').map((s) => s.trim());
    if (!pokes) return;
    b.push(hero);
  });
  // Filter
  console.log(
    b
      .filter((v) => !a.includes(v))
      .sort()
      .join(', '),
  );
  console.log(
    a
      .filter((v) => !b.includes(v))
      .sort()
      .join(', '),
  );
}

// img.match(/([^/]+).gif$/)[1]
var pokeTypes = [
  'https://www.serebii.net/pokedex-bw/type/normal.gif',
  'https://www.serebii.net/pokedex-bw/type/fire.gif',
  'https://www.serebii.net/pokedex-bw/type/grass.gif',
  'https://www.serebii.net/pokedex-bw/type/water.gif',
  'https://www.serebii.net/pokedex-bw/type/fighting.gif',
  'https://www.serebii.net/pokedex-bw/type/flying.gif',
  'https://www.serebii.net/pokedex-bw/type/electric.gif',
  'https://www.serebii.net/pokedex-bw/type/bug.gif',
  'https://www.serebii.net/pokedex-bw/type/poison.gif',
  'https://www.serebii.net/pokedex-bw/type/psychic.gif',
  'https://www.serebii.net/pokedex-bw/type/ground.gif',
  'https://www.serebii.net/pokedex-bw/type/rock.gif',
  'https://www.serebii.net/pokedex-bw/type/steel.gif',
  'https://www.serebii.net/pokedex-bw/type/dark.gif',
  'https://www.serebii.net/pokedex-bw/type/ghost.gif',
  'https://www.serebii.net/pokedex-bw/type/ice.gif',
  'https://www.serebii.net/pokedex-bw/type/dragon.gif',
];

var pwd_data = `Abra		JkKxwkq1x8
Ampharos		tKAm8mrxLR
Anorith		SEHGJqBrwW
Arbok		fEvxXRGNRJ
Aron		EpAgXkR1R8
Audino		8gc33MmrnX
Axew		BqWxXEK3xg YRzX833J8x
Bastiodon		YRYXXh3m8F
Beartic		hqNFXEXD8J
Beedrill		ZqCGRJXwRX
Beldum		CMqkZRRSRX MJAJJrGPX8
Bibarel		mRfJX3wQRF
Bidoof		JLqRxrrZLR
Bisharp		bp4XiR4axM
Blitzle		Dan3JGnqkZ
Boldore		YqNxXEX28R
Braviary		YqYGXJ3EXg
Carnivine		FqEGJ1EmGR
Charmander		daQL8qGP88
Chimchar		DNB3x2gCgk RKGBxzC2n8 nMaxL2aRwR
Chimecho		eqCxRmXDJJ
Chingling		aMpX3CtsF3
Cinccino		CwDF3vHaJn vVALFrGTXX
Cincinno		vVALFrGTXX
Cottonee		LJLRRTrY38
Croagunk		LCrk8EXD8J LKpk8FRQR8
Crobat		a1ZXLqCJ8m
Cubchoo		RwGxL4HmJk
Darmanitan		DJgR8Lgrgn pK5RgzqLG8
Darumaka		JKGRmzraM8
Deino		8rf3XPwvJw PKSRGpCPZJ qwDg3PHmJk
Drapion		rakMJuxcgR
Dratini		JrPmMrqZFR Sr5Z5GqAgR
Drifblim		dRm8R1EmGR
Drifloon		LEbxXeqhgX eqCgRvXwXX
Drilbur		WCrZ8EXG88
Dusclops		CCDkJVag3J
Duskull		mmKkRqGP88
Eevee		2rz3XFCKmR m2KJZkRERR
Ekans		aRAXRdwvRg
Emolga		En3wnCCEJZ Jnm3kqgN8X
Excadrill		aKGXmzqtG8
Flaaffy		JSaRGCECFR
Forretress		wEMF8RBrm3
Fraxure		nMUxMPEqg8
Gabite		REkxJKkckR
Galvantula		EUPgnNqZgR
Gastly		merkFNqZgR
Gible		J3mmJr9rX8 LTb3n3RYJ8 Wag8mrm3nJ
Glalie		mRfJXpwvJg
Golbat		nHEm3gJCRJ
Gothita		EMz8LRt8xL
Gothorita		SJwZxEqAgR
Gurdurr		urNLXmXDJJ
Gyarados		mCGm8VmnmR mq2xRVNgRL
Haunter		LmLmRXRh8X
Igglybuff		wJVJRrarXm
Jigglypuff		JFER8RJCRR
Joltik		QaFwRFqvxX
Kadabra		Wau8nqJm88
Kirlia		Dqax8mEmxR
Krokorok		qmKkRRGPR8
Krookodile		VazLXFrA3J
Lairon		RApxXJ3qxx
Lampent		Nqix8WEMxJ
Lapras		GfV33RVN3F VrCMRaXwXX
Larvesta		ryZGxmpqLx yQAw81qxGR
Larvitar		Lpu3ggCYk8 gAxFRmrxLR
Leavanny		JKSRnprcw8
Lilligant		RwGxLbHRRk bmpm8FrA3J
Litwick		Rm1mRe5Q8R
Lucario		LaWJZCmykR
Luxio		wJHJJqur8m
Luxray		RGGmLzHJRm
Machoke		gJUR8CUbFk
Machop		ERf8XtwvJg
Magikarp		RkCRFCRmJJ
Mareep		nHamL4mqm8
Meowth		aX3nMrCJXm
Metang		zrzw8A3JJx
Minccino		up48iC5akG
Misdreavus		gmtmXCtmLn mnKX3qwrZR
Munchlax		qkNwmaNtXL
Munna		mCLk8ExkmF
Musharna		8HVmLVmrkX iMYXwqtHgL
Onix		uaWXZCJRJX
Oshawott		fC2kRVJLR8 frCLRpXG88
Panpour		CNZF3wpq3x NrGw8VJLR8
Pansage		6xSG8UCAZR q5wwwxHD8n qxCgJRRJRR
Pansear		Ra83RwxcgR niE33w9rwM
Pawniard		Nqix8zJ48X
Persian		8ccmWVECFJ
Petilil		J63RPRCJRm
Pichu		prpLJn3aRG
Pikachu		FZP8GqRZRR urALRZwvRg ZKxmRERx8R
Pineco		E9x8Jkra3J
Piplup		CETF8JeU33
Pupitar		zRz88F3JJx
Quagsire		Wp4JiRKJRm
Ralts		rV3XwJZqRx
Rhydon		6fSGZErAwR
Rhyhorn		YRYXXS3J8x
Riolu		LmLmRhCYm8 Shw8mxRAJR
Roggenrola		aqfGXiwQRF
Rufflet		Jipm3q188M
Sandile		EMz8LrtnGL
Scolipede		CGDk3QHaRn
Scrafty		bqmgR1mmnR
Scraggy		uaLXkrm6n8
Scyther		8GV3LMGrnM aGxMLkrU3X
Sealeo		SRwZxmrALR
Sewaddle		JDXx3CCEJZ
Shieldon		EjFgZRCERZ
Shinx		5USJZaRAXR
Skorupi		dvPGir1JX3
Sneasel		Rc338MpqLx cmvnXqGT8X
Snivy		4yTZXC1aJM XyADXkr138
Snorunt		EqWgXExWmF
Spheal		82cm3VEqF8
Staraptor		ACrm8aX2XR
Staravia		mMhJMRUpm3
Starly		aNZXLrCJXm
Swadloon		5aMw8RCrxx
Tepig		WaW8ZrEnG8
Timburr		aMhXMqtSgL
Toxicroak		Lau38URYJ8
Treecko		5Ji8XCgrFm
Tyranitar		gaa3RrUNGk
Venipede		mCfkXMwQRL
Walrein		R7FRFEFqZx
Weavile		aipn3r12XM
Whimsicott		jR2RRVEgxJ
Whirlipede		ga13Jq1wZm
Wooper		WpiJ5rHaXn
Zebstrika		CaCk5rRJXR
Zoroark		6iYmwq1Y8w rYeGPmeUL3
Zorua		6TSGwmRAJR CTeFMMeUM3
Zubat		aGZXJRCJRm
Zweilous		JzqmWNCZZR`
  .trim()
  .split('\n')
  .map((v) => v.trim())
  .sort();

// Perfect Link Data
/*
  var data = [...plink1];
  var b = [];
  data.forEach((line) => {
    // 1. Tách phần trong ngoặc (nếu có)
    var match = line.match(/^(.*?)(\s*\([^)]*\))?$/);
    var mainPart = match[1]; // Shingen - Rhyperior//Groudon
    var extraPart = match[2] || ''; // (not Rhyhorn/Rhydon)
    var [hero, pokes] = mainPart.split('-').map((s) => s.trim());
    pokes = pokes.split('/').filter(v => !!v)
    b.push({hero, pokes});
  });
JSON.stringify(b);
*/
var plink1 = [
  { hero: 'Player ♂', pokes: ['Eevee', 'Vaporeon', 'Jolteon'] },
  { hero: 'Player ♂', pokes: ['Flareon', 'Espeon', 'Umbreon'] },
  { hero: 'Player ♂', pokes: ['Leafeon', 'Glaceon', 'Arceus'] },
  { hero: 'Oichi', pokes: ['Jigglypuff', 'Wigglytuff'] },
  { hero: 'Hideyoshi', pokes: ['Monferno', 'Infernape', 'Reshiram'] },
  { hero: 'Aya', pokes: ['Snorunt', 'Froslass'] },
  { hero: 'Ginchiyo', pokes: ['Luxio', 'Luxray'] },
  { hero: 'Gracia', pokes: ['Gothorita', 'Gothitelle'] },
  { hero: 'Hanbei', pokes: ['Pikachu', 'Raichu'] },
  { hero: 'Hanzō', pokes: ['Haunter', 'Gengar'] },
  { hero: 'Ieyasu', pokes: ['Aggron', 'Registeel'] },
  { hero: 'Ina', pokes: ['Prinplup', 'Empoleon'] },
  { hero: 'Kai', pokes: ['Darumaka', 'Darmanitan'] },
  { hero: 'Kanbei', pokes: ['Lampent', 'Chandelure'] },
  { hero: 'Kanetsugu', pokes: ['Kadabra', 'Alakazam'] },
  { hero: 'Keiji', pokes: ['Bastiodon', 'Terrakion'] },
  { hero: 'Kenshin', pokes: ['Gallade', 'Mewtwo'] },
  { hero: 'Kiyomasa', pokes: ['Fraxure', 'Haxorus'] },
  { hero: 'Kotarō', pokes: ['Zorua', 'Zoroark'] },
  { hero: 'Kunoichi', pokes: ['Sneasel', 'Weavile'] },
  { hero: 'Magoichi', pokes: ['Grovyle', 'Sceptile'] },
  { hero: 'Masamune', pokes: ['Rufflet', 'Braviary'] },
  { hero: 'Masanori', pokes: ['Krokorok', 'Krookodile'] },
  { hero: 'Mitsuhide', pokes: ['Lapras', 'Articuno'] },
  { hero: 'Mitsunari', pokes: ['Pawniard', 'Bisharp'] },
  { hero: 'Motochika', pokes: ['Dewott', 'Samurott'] },
  { hero: 'Motonari', pokes: ['Servine', 'Serperior'] },
  { hero: 'Muneshige', pokes: ['Staravia', 'Staraptor'] },
  { hero: 'Nene', pokes: ['Golbat', 'Crobat'] },
  { hero: 'Nobunaga', pokes: ['Hydreigon', 'Zekrom', 'Rayquaza'] },
  { hero: 'Nō', pokes: ['Misdreavus', 'Mismagius'] },
  { hero: 'Okuni', pokes: ['Larvesta', 'Volcarona'] },
  { hero: 'Ranmaru', pokes: ['Riolu', 'Lucario'] },
  { hero: 'Shingen', pokes: ['Rhyperior', 'Groudon'] },
  { hero: 'Tadakatsu', pokes: ['Metagross', 'Dialga'] },
  { hero: 'Ujiyasu', pokes: ['Boldore', 'Gigalith'] },
  { hero: 'Yoshihiro', pokes: ['Gurdurr', 'Conkeldurr'] },
  { hero: 'Yoshimoto', pokes: ['Pineco', 'Forretress'] },
  { hero: 'Yukimura', pokes: ['Charmeleon', 'Charizard'] },
];
var plink2 = [
  { hero: 'Akizane', pokes: ['Pichu', 'Pikachu', 'Raichu'] },
  { hero: 'Asahi', pokes: ['Drilbur', 'Excadrill'] },
  { hero: 'Bokuden', pokes: ['Shieldon', 'Bastiodon'] },
  { hero: 'Bokuzen', pokes: ['Gastly', 'Haunter', 'Gengar'] },
  { hero: 'Chacha', pokes: ['Minccino', 'Cinccino'] },
  { hero: 'Chikamasa', pokes: ['Wooper', 'Quagsire'] },
  { hero: 'Chikayasu', pokes: ['Oshawott', 'Dewott', 'Samurott'] },
  { hero: 'Chōan', pokes: ['Bidoof', 'Bibarel'] },
  { hero: 'Dōsan', pokes: ['Ekans', 'Arbok'] },
  { hero: 'Dōsetsu', pokes: ['Shinx', 'Luxio', 'Luxray'] },
  { hero: 'Ekei', pokes: ['Carnivine'] },
  { hero: 'Fujitaka', pokes: ['Lapras'] },
  { hero: "Gen'an", pokes: ['Onix', 'Steelix'] },
  { hero: 'Genba', pokes: ['Scraggy', 'Scrafty'] },
  { hero: 'Gotoku', pokes: ['Deino', 'Zweilous', 'Hydreigon'] },
  { hero: 'Gō', pokes: ['Piplup', 'Prinplup', 'Empoleon'] },
  { hero: 'Hana', pokes: ['Munna', 'Musharna'] },
  { hero: 'Haruyuki', pokes: ['Rufflet', 'Braviary'] },
  { hero: 'Hatsu', pokes: ['Igglybuff', 'Jigglypuff', 'Wigglytuff'] },
  { hero: 'Hideaki', pokes: ['Venipede', 'Whirlipede', 'Scolipede'] },
  { hero: 'Hidetada', pokes: ['Pawniard', 'Bisharp'] },
  { hero: 'Hideyori', pokes: ['Chimchar', 'Monferno', 'Infernape'] },
  { hero: 'Hiroko', pokes: ['Snorunt', 'Froslass'] },
  { hero: 'Hisaaki', pokes: ['Scraggy', 'Scrafty'] },
  { hero: 'Hisahide', pokes: ['Deino', 'Zweilous', 'Hydreigon'] },
  { hero: 'Ise', pokes: ['Gothita', 'Gothorita', 'Gothitelle'] },
  { hero: 'Jinpachi', pokes: ['Misdreavus', 'Mismagius'] },
  { hero: 'Jūbei', pokes: ['Ralts', 'Kirlia', 'Gallade'] },
  { hero: 'Jūzō', pokes: ['Pansear', 'Simisear'] },
  { hero: 'Kagekatsu', pokes: ['Ralts', 'Kirlia', 'Gardevoir'] },
  { hero: 'Kagetsuna', pokes: ['Dratini', 'Dragonair', 'Dragonite'] },
  { hero: 'Kame', pokes: ['Pineco', 'Forretress'] },
  { hero: 'Kanemori', pokes: ['Croagunk', 'Toxicroak'] },
  { hero: 'Kashinkoji', pokes: ['Skorupi', 'Drapion'] },
  { hero: 'Katsuyori', pokes: ['Larvitar', 'Pupitar', 'Tyranitar'] },
  { hero: 'Kazumasu', pokes: ['Axew', 'Fraxure', 'Haxorus'] },
  { hero: 'Kei', pokes: ['Drilbur', 'Excadrill'] },
  { hero: 'Kitsuno', pokes: ['Dratini', 'Dragonair', 'Dragonite'] },
  { hero: 'Kiyo', pokes: ['Blitzle', 'Zebstrika'] },
  { hero: 'Koroku', pokes: ['Timburr', 'Gurdurr'] },
  { hero: 'Maa', pokes: ['Litwick', 'Lampent', 'Chandelure'] },
  { hero: 'Madoka', pokes: ['Roggenrola', 'Boldore', 'Gigalith'] },
  { hero: 'Masakage', pokes: ['Charmander', 'Charmeleon', 'Charizard'] },
  { hero: 'Masanobu', pokes: ['Litwick'] },
  { hero: 'Masatoshi', pokes: ['Machop', 'Machoke', 'Machamp'] },
  { hero: 'Masatoyo', pokes: ['Rhyhorn', 'Rhydon', 'Rhyperior'] },
  { hero: 'Masatsuna', pokes: ['Beedrill'] },
  { hero: 'Masayuki', pokes: ['Larvesta', 'Volcarona'] },
  { hero: 'Morichika', pokes: ['Oshawott', 'Dewott', 'Samurott'] },
  { hero: 'Morikiyo', pokes: ['Croagunk', 'Toxicroak'] },
  { hero: 'Morinari', pokes: ['Duskull', 'Dusclops', 'Dusknoir'] },
  { hero: 'Motoharu', pokes: ['Axew', 'Fraxure', 'Haxorus'] },
  { hero: 'Motozane', pokes: ['Joltik', 'Galvantula'] },
  { hero: 'Munenori', pokes: ['Scyther', 'Scizor'] },
  { hero: 'Munetoki', pokes: ['Rufflet', 'Braviary'] },
  { hero: 'Munezane', pokes: ['Starly', 'Staravia', 'Staraptor'] },
  { hero: 'Murashige', pokes: ['Treecko', 'Grovyle', 'Sceptile'] },
  { hero: 'Nagahide', pokes: ['Dratini', 'Dragonair', 'Dragonite'] },
  { hero: 'Nagayasu', pokes: ['Darumaka', 'Darmanitan'] },
  { hero: 'Nagayoshi', pokes: ['Riolu', 'Lucario'] },
  { hero: 'Naka', pokes: ['Drilbur', 'Excadrill'] },
  { hero: 'Naoie', pokes: ['Deino', 'Zweilous', 'Hydreigon'] },
  { hero: 'Naomasa', pokes: ['Tepig', 'Pignite', 'Emboar'] },
  { hero: 'Nobuchika', pokes: ['Magikarp', 'Gyarados'] },
  { hero: 'Norishige', pokes: ['Mareep', 'Flaaffy', 'Ampharos'] },
  { hero: 'Omi', pokes: ['Beedrill'] },
  { hero: 'Rikyū', pokes: ['Pansage', 'Simisage'] },
  { hero: 'Sadamitsu', pokes: ['Munna', 'Musharna'] },
  { hero: 'Sadatoshi', pokes: ['Cottonee', 'Whimsicott'] },
  { hero: 'Saizō', pokes: ['Gastly', 'Haunter', 'Gengar'] },
  { hero: 'Sandayū', pokes: ['Zubat', 'Golbat', 'Crobat'] },
  { hero: 'Saneyori', pokes: ['Chingling', 'Chimecho'] },
  { hero: 'Seikurō', pokes: ['Skorupi', 'Drapion'] },
  { hero: 'Sekisō', pokes: ['Joltik', 'Galvantula'] },
  { hero: 'Sen', pokes: ['Chingling', 'Chimecho'] },
  { hero: 'Sena', pokes: ['Beedrill'] },
  { hero: 'Sessai', pokes: ['Larvesta', 'Volcarona'] },
  { hero: 'Shigemoto', pokes: ['Cubchoo', 'Beartic'] },
  { hero: 'Shigezane', pokes: ['Scyther', 'Scizor'] },
  { hero: 'Shimoyama', pokes: ['Scraggy', 'Scrafty'] },
  { hero: 'Shizuka', pokes: ['Rhyhorn', 'Rhydon', 'Rhyperior'] },
  { hero: 'Shōun', pokes: ['Mareep', 'Flaaffy', 'Ampharos'] },
  { hero: 'Sōrin', pokes: ['Pichu', 'Pikachu', 'Raichu'] },
  { hero: 'Sōun', pokes: ['Larvitar', 'Pupitar', 'Tyranitar'] },
  { hero: 'Tadamoto', pokes: ['Croagunk', 'Toxicroak'] },
  { hero: 'Tadaoki', pokes: ['Gothita', 'Gothorita', 'Gothitelle'] },
  { hero: 'Tadasumi', pokes: ['Blitzle', 'Zebstrika'] },
  { hero: 'Tadatsugu', pokes: ['Aron', 'Lairon', 'Aggron'] },
  { hero: 'Tadatsune', pokes: ['Machop', 'Machoke', 'Machamp'] },
  { hero: 'Takahiro', pokes: ['Abra', 'Kadabra', 'Alakazam'] },
  { hero: 'Takahisa', pokes: ['Timburr', 'Gurdurr', 'Conkeldurr'] },
  { hero: 'Takakage', pokes: ['Treecko', 'Grovyle', 'Sceptile'] },
  { hero: 'Takamoto', pokes: ['Snivy', 'Servine', 'Serperior'] },
  { hero: 'Takanobu', pokes: ['Munchlax', 'Snorlax'] },
  { hero: 'Takatane', pokes: ['Shinx', 'Luxio', 'Luxray'] },
  { hero: 'Takatora', pokes: ['Litwick', 'Lampent', 'Chandelure'] },
  { hero: 'Takayori', pokes: ['Panpour', 'Simipour'] },
  { hero: 'Takeyoshi', pokes: ['Magikarp', 'Gyarados'] },
  { hero: 'Tatsuko', pokes: ['Tepig', 'Pignite', 'Emboar'] },
  { hero: 'Terumoto', pokes: ['Petilil', 'Lilligant'] },
  { hero: 'Tokitaka', pokes: ['Timburr', 'Gurdurr', 'Conkeldurr'] },
  { hero: 'Toku', pokes: ['Aron', 'Lairon', 'Aggron'] },
  { hero: 'Tomonobu', pokes: ['Ralts', 'Kirlia', 'Gardevoir'] },
  { hero: 'Tsunamoto', pokes: ['Snorunt', 'Glalie'] },
  { hero: 'Tsunehisa', pokes: ['Meowth', 'Persian'] },
  { hero: 'Ujichika', pokes: ['Sewaddle', 'Swadloon', 'Leavanny'] },
  { hero: 'Ujihiro', pokes: ['Sewaddle', 'Swadloon', 'Leavanny'] },
  { hero: 'Ujikuni', pokes: ['Anorith', 'Armaldo'] },
  { hero: 'Ujinao', pokes: ['Anorith', 'Armaldo'] },
  { hero: 'Ujisato', pokes: ['Snivy', 'Servine', 'Serperior'] },
  { hero: 'Ujiteru', pokes: ['Shieldon', 'Bastiodon'] },
  { hero: 'Ujizane', pokes: ['Pineco', 'Forretress'] },
  { hero: 'Ume', pokes: ['Drilbur', 'Excadrill'] },
  { hero: 'Yasumasa', pokes: ['Dratini', 'Dragonair', 'Dragonite'] },
  { hero: 'Yasunaga', pokes: ['Venipede', 'Whirlipede', 'Scolipede'] },
  { hero: 'Yasutomo', pokes: ['Joltik', 'Galvantula'] },
  { hero: 'Yatarō', pokes: ['Treecko', 'Grovyle', 'Sceptile'] },
  { hero: 'Yazaemon', pokes: ['Ekans', 'Arbok'] },
  { hero: 'Yoshi', pokes: ['Zubat', 'Golbat', 'Crobat'] },
  { hero: 'Yoshiaki', pokes: ['Carnivine'] },
  { hero: 'Yoshikiyo', pokes: ['Cubchoo', 'Beartic'] },
  { hero: 'Yoshitatsu', pokes: ['Gastly', 'Haunter', 'Gengar'] },
  { hero: 'Yukimasa', pokes: ['Spheal', 'Sealeo', 'Walrein'] },
  { hero: 'Yukitaka', pokes: ['Sandile', 'Krokorok', 'Krookodile'] },
];
var plinkX = {};
[...plink1, ...plink2].forEach((line) => {
  var { hero, pokes } = line;
  pokes.forEach((poke) => {
    if (!plinkX[poke]) plinkX[poke] = [];
    plinkX[poke].push(hero);
  });
});

/*
// Hero images: https://veekun.com/dex/conquest/warriors
a = {};
$('.dex-pokemon-moves tbody tr').each((i, v) => {
  a[v.find('td:eq(1)').text()] = 'https://veekun.com' + v.find('img').attr('src')
})
*/
const heroImgs = {
  'Player ♂': 'https://veekun.com/dex/media/warriors/big-icons/player-m-1.png',
  'Player ♀': 'https://veekun.com/dex/media/warriors/big-icons/player-f-1.png',
  Nobunaga: 'https://veekun.com/dex/media/warriors/big-icons/nobunaga-2.png',
  Oichi: 'https://veekun.com/dex/media/warriors/big-icons/oichi-1.png',
  Hideyoshi: 'https://veekun.com/dex/media/warriors/big-icons/hideyoshi-1.png',
  Motochika: 'https://veekun.com/dex/media/warriors/big-icons/motochika-1.png',
  Ginchiyo: 'https://veekun.com/dex/media/warriors/big-icons/ginchiyo-1.png',
  Motonari: 'https://veekun.com/dex/media/warriors/big-icons/motonari-1.png',
  Mitsuhide: 'https://veekun.com/dex/media/warriors/big-icons/mitsuhide-1.png',
  Yoshihiro: 'https://veekun.com/dex/media/warriors/big-icons/yoshihiro-1.png',
  Nene: 'https://veekun.com/dex/media/warriors/big-icons/nene-1.png',
  Shingen: 'https://veekun.com/dex/media/warriors/big-icons/shingen-1.png',
  Masamune: 'https://veekun.com/dex/media/warriors/big-icons/masamune-1.png',
  Kenshin: 'https://veekun.com/dex/media/warriors/big-icons/kenshin-1.png',
  Yoshimoto: 'https://veekun.com/dex/media/warriors/big-icons/yoshimoto-1.png',
  Ujiyasu: 'https://veekun.com/dex/media/warriors/big-icons/ujiyasu-1.png',
  Nō: 'https://veekun.com/dex/media/warriors/big-icons/no-1.png',
  Kotarō: 'https://veekun.com/dex/media/warriors/big-icons/kotaro-1.png',
  Ieyasu: 'https://veekun.com/dex/media/warriors/big-icons/ieyasu-1.png',
  Hanbei: 'https://veekun.com/dex/media/warriors/big-icons/hanbei-1.png',
  Kanbei: 'https://veekun.com/dex/media/warriors/big-icons/kanbei-1.png',
  Muneshige: 'https://veekun.com/dex/media/warriors/big-icons/muneshige-1.png',
  Gracia: 'https://veekun.com/dex/media/warriors/big-icons/gracia-1.png',
  Hanzō: 'https://veekun.com/dex/media/warriors/big-icons/hanzo-1.png',
  Kunoichi: 'https://veekun.com/dex/media/warriors/big-icons/kunoichi-1.png',
  Yukimura: 'https://veekun.com/dex/media/warriors/big-icons/yukimura-1.png',
  Magoichi: 'https://veekun.com/dex/media/warriors/big-icons/magoichi-1.png',
  Kanetsugu: 'https://veekun.com/dex/media/warriors/big-icons/kanetsugu-1.png',
  Aya: 'https://veekun.com/dex/media/warriors/big-icons/aya-1.png',
  Kai: 'https://veekun.com/dex/media/warriors/big-icons/kai-1.png',
  Okuni: 'https://veekun.com/dex/media/warriors/big-icons/okuni-1.png',
  Ranmaru: 'https://veekun.com/dex/media/warriors/big-icons/ranmaru-1.png',
  Tadakatsu: 'https://veekun.com/dex/media/warriors/big-icons/tadakatsu-1.png',
  Ina: 'https://veekun.com/dex/media/warriors/big-icons/ina-1.png',
  Keiji: 'https://veekun.com/dex/media/warriors/big-icons/keiji-1.png',
  Mitsunari: 'https://veekun.com/dex/media/warriors/big-icons/mitsunari-1.png',
  Kiyomasa: 'https://veekun.com/dex/media/warriors/big-icons/kiyomasa-1.png',
  Masanori: 'https://veekun.com/dex/media/warriors/big-icons/masanori-1.png',
  Tsunehisa: 'https://veekun.com/dex/media/warriors/big-icons/professor.png',
  Naoie: 'https://veekun.com/dex/media/warriors/big-icons/angular.png',
  Harutaka:
    'https://veekun.com/dex/media/warriors/big-icons/armor-headlight.png',
  Takanobu: 'https://veekun.com/dex/media/warriors/big-icons/armor-helmet.png',
  Naoshige: 'https://veekun.com/dex/media/warriors/big-icons/armor-officer.png',
  Ujisato: 'https://veekun.com/dex/media/warriors/big-icons/alchemist.png',
  Chacha: 'https://veekun.com/dex/media/warriors/big-icons/princess.png',
  Gō: 'https://veekun.com/dex/media/warriors/big-icons/woman-warrior.png',
  Hatsu: 'https://veekun.com/dex/media/warriors/big-icons/princess.png',
  Kazumasu: 'https://veekun.com/dex/media/warriors/big-icons/ninja-armor.png',
  Nagahide: 'https://veekun.com/dex/media/warriors/big-icons/armor-officer.png',
  Yoshitaka: 'https://veekun.com/dex/media/warriors/big-icons/sailor.png',
  Urakusai: 'https://veekun.com/dex/media/warriors/big-icons/alchemist.png',
  Narimasa: 'https://veekun.com/dex/media/warriors/big-icons/armor-helmet.png',
  Tomonori: 'https://veekun.com/dex/media/warriors/big-icons/nobleman.png',
  Murashige: 'https://veekun.com/dex/media/warriors/big-icons/alchemist.png',
  Masahide: 'https://veekun.com/dex/media/warriors/big-icons/angular.png',
  Nagayoshi: 'https://veekun.com/dex/media/warriors/big-icons/armor-smarmy.png',
  Kitsuno: 'https://veekun.com/dex/media/warriors/big-icons/woman-warrior.png',
  Gotoku: 'https://veekun.com/dex/media/warriors/big-icons/woman-warrior.png',
  Hidenaga:
    'https://veekun.com/dex/media/warriors/big-icons/armor-sweatband.png',
  Koroku: 'https://veekun.com/dex/media/warriors/big-icons/adventurer.png',
  Takatora: 'https://veekun.com/dex/media/warriors/big-icons/clever.png',
  Yoshitsugu: 'https://veekun.com/dex/media/warriors/big-icons/angular.png',
  Yukinaga: 'https://veekun.com/dex/media/warriors/big-icons/merchant-m.png',
  Rikyū: 'https://veekun.com/dex/media/warriors/big-icons/alchemist.png',
  Hideyori: 'https://veekun.com/dex/media/warriors/big-icons/armor-smarmy.png',
  Asahi: 'https://veekun.com/dex/media/warriors/big-icons/princess.png',
  Kazutoyo: 'https://veekun.com/dex/media/warriors/big-icons/clever.png',
  Nagayasu: 'https://veekun.com/dex/media/warriors/big-icons/armor-buff.png',
  Harunaga: 'https://veekun.com/dex/media/warriors/big-icons/portly.png',
  Hideaki: 'https://veekun.com/dex/media/warriors/big-icons/nervous.png',
  Naka: 'https://veekun.com/dex/media/warriors/big-icons/farmer-f.png',
  Tatsuko: 'https://veekun.com/dex/media/warriors/big-icons/woman-warrior.png',
  Maa: 'https://veekun.com/dex/media/warriors/big-icons/princess.png',
  Chiyo: 'https://veekun.com/dex/media/warriors/big-icons/woman-warrior.png',
  Hatsume: 'https://veekun.com/dex/media/warriors/big-icons/ninja-ceiling.png',
  Nobuchika: 'https://veekun.com/dex/media/warriors/big-icons/clever.png',
  Chikayasu:
    'https://veekun.com/dex/media/warriors/big-icons/armor-headlight.png',
  Morichika: 'https://veekun.com/dex/media/warriors/big-icons/armor-smarmy.png',
  Chikamasa: 'https://veekun.com/dex/media/warriors/big-icons/armor-buff.png',
  Norishige:
    'https://veekun.com/dex/media/warriors/big-icons/armor-headlight.png',
  Takayori: 'https://veekun.com/dex/media/warriors/big-icons/clever.png',
  Tadasumi: 'https://veekun.com/dex/media/warriors/big-icons/nervous.png',
  Dōsetsu: 'https://veekun.com/dex/media/warriors/big-icons/armor-veteran.png',
  Shōun: 'https://veekun.com/dex/media/warriors/big-icons/armor-helmet.png',
  Sōrin: 'https://veekun.com/dex/media/warriors/big-icons/angular.png',
  Sekisō: 'https://veekun.com/dex/media/warriors/big-icons/monk.png',
  Akizane: 'https://veekun.com/dex/media/warriors/big-icons/alchemist.png',
  Takatane: 'https://veekun.com/dex/media/warriors/big-icons/nervous.png',
  Kiyo: 'https://veekun.com/dex/media/warriors/big-icons/princess.png',
  Motoharu:
    'https://veekun.com/dex/media/warriors/big-icons/armor-sweatband.png',
  Takakage: 'https://veekun.com/dex/media/warriors/big-icons/armor-visor.png',
  Terumoto:
    'https://veekun.com/dex/media/warriors/big-icons/armor-sweatband.png',
  Takeyoshi: 'https://veekun.com/dex/media/warriors/big-icons/sailor.png',
  Ekei: 'https://veekun.com/dex/media/warriors/big-icons/monk.png',
  Takamoto: 'https://veekun.com/dex/media/warriors/big-icons/nervous.png',
  Sadatoshi: 'https://veekun.com/dex/media/warriors/big-icons/portly.png',
  Hidemitsu:
    'https://veekun.com/dex/media/warriors/big-icons/armor-sweatband.png',
  Toshimitsu:
    'https://veekun.com/dex/media/warriors/big-icons/armor-officer.png',
  Shigemoto:
    'https://veekun.com/dex/media/warriors/big-icons/armor-headlight.png',
  Mitsutada: 'https://veekun.com/dex/media/warriors/big-icons/armor-buff.png',
  Yukimasa: 'https://veekun.com/dex/media/warriors/big-icons/portly.png',
  Tadaoki: 'https://veekun.com/dex/media/warriors/big-icons/armor-smarmy.png',
  Fujitaka: 'https://veekun.com/dex/media/warriors/big-icons/nobleman.png',
  Hiroko: 'https://veekun.com/dex/media/warriors/big-icons/princess.png',
  Tadamoto: 'https://veekun.com/dex/media/warriors/big-icons/armor-officer.png',
  Tadatsune: 'https://veekun.com/dex/media/warriors/big-icons/armor-buff.png',
  Takahisa: 'https://veekun.com/dex/media/warriors/big-icons/armor-veteran.png',
  Hisaaki: 'https://veekun.com/dex/media/warriors/big-icons/armor-visor.png',
  Masatoshi: 'https://veekun.com/dex/media/warriors/big-icons/armor-buff.png',
  Kanemori: 'https://veekun.com/dex/media/warriors/big-icons/armor-visor.png',
  Tokitaka: 'https://veekun.com/dex/media/warriors/big-icons/professor.png',
  Sandayū: 'https://veekun.com/dex/media/warriors/big-icons/ninja-armor.png',
  Morikiyo: 'https://veekun.com/dex/media/warriors/big-icons/ninja-armor.png',
  Kashinkoji: 'https://veekun.com/dex/media/warriors/big-icons/professor.png',
  Yasunaga: 'https://veekun.com/dex/media/warriors/big-icons/ninja-visor.png',
  Seikurō: 'https://veekun.com/dex/media/warriors/big-icons/ninja-scroll.png',
  Katsuyori:
    'https://veekun.com/dex/media/warriors/big-icons/armor-sweatband.png',
  Haruyuki: 'https://veekun.com/dex/media/warriors/big-icons/angular.png',
  Masakage: 'https://veekun.com/dex/media/warriors/big-icons/armor-helmet.png',
  Masatoyo: 'https://veekun.com/dex/media/warriors/big-icons/armor-veteran.png',
  Nobufusa:
    'https://veekun.com/dex/media/warriors/big-icons/armor-headlight.png',
  Masayuki: 'https://veekun.com/dex/media/warriors/big-icons/armor-officer.png',
  Yukitaka: 'https://veekun.com/dex/media/warriors/big-icons/armor-veteran.png',
  Ume: 'https://veekun.com/dex/media/warriors/big-icons/princess.png',
  Chiyome: 'https://veekun.com/dex/media/warriors/big-icons/ninja-eyeliner.png',
  Kei: 'https://veekun.com/dex/media/warriors/big-icons/woman-warrior.png',
  Kagetsuna: 'https://veekun.com/dex/media/warriors/big-icons/angular.png',
  Shigezane: 'https://veekun.com/dex/media/warriors/big-icons/armor-helmet.png',
  Tsunamoto:
    'https://veekun.com/dex/media/warriors/big-icons/armor-veteran.png',
  Tsunenaga: 'https://veekun.com/dex/media/warriors/big-icons/sailor.png',
  Munetoki: 'https://veekun.com/dex/media/warriors/big-icons/armor-buff.png',
  Munezane: 'https://veekun.com/dex/media/warriors/big-icons/armor-visor.png',
  Yoshi: 'https://veekun.com/dex/media/warriors/big-icons/ninja-eyeliner.png',
  Iroha: 'https://veekun.com/dex/media/warriors/big-icons/woman-warrior.png',
  Kagekatsu: 'https://veekun.com/dex/media/warriors/big-icons/armor-helmet.png',
  Yoshikiyo:
    'https://veekun.com/dex/media/warriors/big-icons/armor-officer.png',
  Tomonobu:
    'https://veekun.com/dex/media/warriors/big-icons/armor-sweatband.png',
  Kageie: 'https://veekun.com/dex/media/warriors/big-icons/armor-helmet.png',
  Takahiro: 'https://veekun.com/dex/media/warriors/big-icons/armor-smarmy.png',
  Sadamitsu: 'https://veekun.com/dex/media/warriors/big-icons/professor.png',
  Yatarō: 'https://veekun.com/dex/media/warriors/big-icons/armor-buff.png',
  Saneyori: 'https://veekun.com/dex/media/warriors/big-icons/professor.png',
  Hana: 'https://veekun.com/dex/media/warriors/big-icons/woman-warrior.png',
  Sen: 'https://veekun.com/dex/media/warriors/big-icons/princess.png',
  Ujichika: 'https://veekun.com/dex/media/warriors/big-icons/nobleman.png',
  Ujizane: 'https://veekun.com/dex/media/warriors/big-icons/nobleman.png',
  Sessai: 'https://veekun.com/dex/media/warriors/big-icons/monk.png',
  Masatsuna:
    'https://veekun.com/dex/media/warriors/big-icons/armor-headlight.png',
  Yasutomo:
    'https://veekun.com/dex/media/warriors/big-icons/armor-sweatband.png',
  Ujihiro: 'https://veekun.com/dex/media/warriors/big-icons/portly.png',
  Motozane: 'https://veekun.com/dex/media/warriors/big-icons/portly.png',
  Sena: 'https://veekun.com/dex/media/warriors/big-icons/ninja-eyeliner.png',
  Sōun: 'https://veekun.com/dex/media/warriors/big-icons/armor-veteran.png',
  Tsunashige:
    'https://veekun.com/dex/media/warriors/big-icons/armor-officer.png',
  "Gen'an": 'https://veekun.com/dex/media/warriors/big-icons/monk.png',
  Ujimasa:
    'https://veekun.com/dex/media/warriors/big-icons/armor-headlight.png',
  Ujiteru: 'https://veekun.com/dex/media/warriors/big-icons/armor-smarmy.png',
  Ujikuni:
    'https://veekun.com/dex/media/warriors/big-icons/armor-sweatband.png',
  Ujinao: 'https://veekun.com/dex/media/warriors/big-icons/armor-visor.png',
  Shizuka: 'https://veekun.com/dex/media/warriors/big-icons/woman-warrior.png',
  Madoka: 'https://veekun.com/dex/media/warriors/big-icons/woman-warrior.png',
  Dōsan: 'https://veekun.com/dex/media/warriors/big-icons/merchant-m.png',
  Yoshitatsu:
    'https://veekun.com/dex/media/warriors/big-icons/armor-helmet.png',
  Ittetsu:
    'https://veekun.com/dex/media/warriors/big-icons/armor-sweatband.png',
  Bokuzen: 'https://veekun.com/dex/media/warriors/big-icons/armor-visor.png',
  Morinari: 'https://veekun.com/dex/media/warriors/big-icons/nervous.png',
  Omi: 'https://veekun.com/dex/media/warriors/big-icons/princess.png',
  Asa: 'https://veekun.com/dex/media/warriors/big-icons/princess.png',
  Shimoyama: 'https://veekun.com/dex/media/warriors/big-icons/ninja-scroll.png',
  Genba: 'https://veekun.com/dex/media/warriors/big-icons/ninja-visor.png',
  Danzō: 'https://veekun.com/dex/media/warriors/big-icons/ninja-scroll.png',
  Yazaemon: 'https://veekun.com/dex/media/warriors/big-icons/ninja-visor.png',
  Isuke: 'https://veekun.com/dex/media/warriors/big-icons/ninja-visor.png',
  Tadatsugu:
    'https://veekun.com/dex/media/warriors/big-icons/armor-veteran.png',
  Naomasa: 'https://veekun.com/dex/media/warriors/big-icons/armor-helmet.png',
  Yasumasa: 'https://veekun.com/dex/media/warriors/big-icons/armor-helmet.png',
  Masanobu: 'https://veekun.com/dex/media/warriors/big-icons/angular.png',
  Hidetada: 'https://veekun.com/dex/media/warriors/big-icons/armor-smarmy.png',
  Kazumasa: 'https://veekun.com/dex/media/warriors/big-icons/angular.png',
  Chōan: 'https://veekun.com/dex/media/warriors/big-icons/merchant-m.png',
  Tenkai: 'https://veekun.com/dex/media/warriors/big-icons/monk.png',
  Munenori:
    'https://veekun.com/dex/media/warriors/big-icons/armor-headlight.png',
  Kame: 'https://veekun.com/dex/media/warriors/big-icons/ninja-ceiling.png',
  Toku: 'https://veekun.com/dex/media/warriors/big-icons/princess.png',
  Saizō: 'https://veekun.com/dex/media/warriors/big-icons/ninja-armor.png',
  Sasuke: 'https://veekun.com/dex/media/warriors/big-icons/ninja-scroll.png',
  Katsu: 'https://veekun.com/dex/media/warriors/big-icons/ninja-ceiling.png',
  Jūzō: 'https://veekun.com/dex/media/warriors/big-icons/ninja-visor.png',
  Tsuru: 'https://veekun.com/dex/media/warriors/big-icons/woman-warrior.png',
  Ise: 'https://veekun.com/dex/media/warriors/big-icons/ninja-ceiling.png',
  Jinpachi: 'https://veekun.com/dex/media/warriors/big-icons/sailor.png',
  Kamanosuke: 'https://veekun.com/dex/media/warriors/big-icons/adventurer.png',
  Seikai: 'https://veekun.com/dex/media/warriors/big-icons/adventurer.png',
  Isa: 'https://veekun.com/dex/media/warriors/big-icons/adventurer.png',
  Yoshiteru: 'https://veekun.com/dex/media/warriors/big-icons/nobleman.png',
  Yoshiaki: 'https://veekun.com/dex/media/warriors/big-icons/nobleman.png',
  Hisahide: 'https://veekun.com/dex/media/warriors/big-icons/armor-officer.png',
  Jūbei: 'https://veekun.com/dex/media/warriors/big-icons/armor-headlight.png',
  Nobutsuna:
    'https://veekun.com/dex/media/warriors/big-icons/armor-officer.png',
  Bokuden: 'https://veekun.com/dex/media/warriors/big-icons/armor-officer.png',
  Otsū: 'https://veekun.com/dex/media/warriors/big-icons/ninja-ceiling.png',
};

/*
a = {};
$('.dex-pokemon-moves tbody tr').each((i, v) => {
  name = $(v).find('td:eq(1)').text().trim();
  a[name] = [+$(v).find('td:eq(13)').text(), +$(v).find('td:eq(14)').text(), +$(v).find('td:eq(15)').text()].filter(v => v > 0)
});
JSON.stringify(a);
*/
const heroCap = {
  'Player ♂': [6, 7, 8],
  'Player ♀': [6, 7, 8],
  Nobunaga: [5, 8],
  Oichi: [6, 8],
  Hideyoshi: [6, 7, 8],
  Motochika: [6, 7],
  Ginchiyo: [5, 6],
  Motonari: [7, 8],
  Mitsuhide: [5, 6],
  Yoshihiro: [6, 7],
  Nene: [5, 6],
  Shingen: [7, 8],
  Masamune: [7, 8],
  Kenshin: [7, 8],
  Yoshimoto: [5, 6],
  Ujiyasu: [7, 8],
  Nō: [5, 6],
  Kotarō: [5, 6],
  Ieyasu: [8, 8],
  Hanbei: [5, 6],
  Kanbei: [5, 6],
  Muneshige: [6, 7],
  Gracia: [5, 5],
  Hanzō: [5, 6],
  Kunoichi: [5, 5],
  Yukimura: [6, 7],
  Magoichi: [6, 7],
  Kanetsugu: [7, 7],
  Aya: [5, 5],
  Kai: [5, 6],
  Okuni: [3, 4],
  Ranmaru: [4, 5],
  Tadakatsu: [6, 6],
  Ina: [5, 6],
  Keiji: [6, 7],
  Mitsunari: [5, 5],
  Kiyomasa: [5, 6],
  Masanori: [5, 6],
  Tsunehisa: [7],
  Naoie: [6],
  Harutaka: [6],
  Takanobu: [7],
  Naoshige: [7],
  Ujisato: [7],
  Chacha: [2],
  Gō: [4],
  Hatsu: [4],
  Kazumasu: [6],
  Nagahide: [5],
  Yoshitaka: [6],
  Urakusai: [2],
  Narimasa: [5],
  Tomonori: [6],
  Murashige: [6],
  Masahide: [5],
  Nagayoshi: [5],
  Kitsuno: [2],
  Gotoku: [2],
  Hidenaga: [5],
  Koroku: [4],
  Takatora: [6],
  Yoshitsugu: [6],
  Yukinaga: [6],
  Rikyū: [5],
  Hideyori: [3],
  Asahi: [3],
  Kazutoyo: [5],
  Nagayasu: [5],
  Harunaga: [2],
  Hideaki: [3],
  Naka: [4],
  Tatsuko: [2],
  Maa: [3],
  Chiyo: [4],
  Hatsume: [3],
  Nobuchika: [5],
  Chikayasu: [6],
  Morichika: [5],
  Chikamasa: [4],
  Norishige: [4],
  Takayori: [5],
  Tadasumi: [3],
  Dōsetsu: [7],
  Shōun: [7],
  Sōrin: [6],
  Sekisō: [6],
  Akizane: [4],
  Takatane: [5],
  Kiyo: [3],
  Motoharu: [7],
  Takakage: [7],
  Terumoto: [5],
  Takeyoshi: [5],
  Ekei: [2],
  Takamoto: [6],
  Sadatoshi: [5],
  Hidemitsu: [5],
  Toshimitsu: [5],
  Shigemoto: [3],
  Mitsutada: [3],
  Yukimasa: [3],
  Tadaoki: [6],
  Fujitaka: [6],
  Hiroko: [5],
  Tadamoto: [5],
  Tadatsune: [5],
  Takahisa: [7],
  Hisaaki: [5],
  Masatoshi: [4],
  Kanemori: [3],
  Tokitaka: [4],
  Sandayū: [3],
  Morikiyo: [3],
  Kashinkoji: [3],
  Yasunaga: [5],
  Seikurō: [3],
  Katsuyori: [6],
  Haruyuki: [5],
  Masakage: [6],
  Masatoyo: [5],
  Nobufusa: [5],
  Masayuki: [7],
  Yukitaka: [6],
  Ume: [3],
  Chiyome: [4],
  Kei: [5],
  Kagetsuna: [6],
  Shigezane: [5],
  Tsunamoto: [4],
  Tsunenaga: [3],
  Munetoki: [5],
  Munezane: [5],
  Yoshi: [4],
  Iroha: [4],
  Kagekatsu: [6],
  Yoshikiyo: [6],
  Tomonobu: [5],
  Kageie: [5],
  Takahiro: [5],
  Sadamitsu: [5],
  Yatarō: [4],
  Saneyori: [4],
  Hana: [5],
  Sen: [4],
  Ujichika: [7],
  Ujizane: [1],
  Sessai: [6],
  Masatsuna: [5],
  Yasutomo: [6],
  Ujihiro: [3],
  Motozane: [4],
  Sena: [2],
  Sōun: [7],
  Tsunashige: [7],
  "Gen'an": [5],
  Ujimasa: [7],
  Ujiteru: [7],
  Ujikuni: [6],
  Ujinao: [4],
  Shizuka: [4],
  Madoka: [3],
  Dōsan: [8],
  Yoshitatsu: [5],
  Ittetsu: [5],
  Bokuzen: [6],
  Morinari: [4],
  Omi: [5],
  Asa: [3],
  Shimoyama: [3],
  Genba: [3],
  Danzō: [3],
  Yazaemon: [3],
  Isuke: [3],
  Tadatsugu: [6],
  Naomasa: [6],
  Yasumasa: [6],
  Masanobu: [3],
  Hidetada: [5],
  Kazumasa: [5],
  Chōan: [2],
  Tenkai: [2],
  Munenori: [3],
  Kame: [4],
  Toku: [4],
  Saizō: [4],
  Sasuke: [4],
  Katsu: [4],
  Jūzō: [4],
  Tsuru: [4],
  Ise: [4],
  Jinpachi: [4],
  Kamanosuke: [4],
  Seikai: [4],
  Isa: [4],
  Yoshiteru: [6],
  Yoshiaki: [3],
  Hisahide: [6],
  Jūbei: [5],
  Nobutsuna: [5],
  Bokuden: [4],
  Otsū: [3],
};

/*
// Pokemons move: https://veekun.com/dex/conquest/pokemon
pks = {};
getskill = (nm) => {
  $.get(`https://veekun.com/dex/conquest/pokemon/${nm}`, function(data) {
    img = $(data).find('dd.dex-cpm-range img').attr('src');
    name = $(data).find('dd.dex-cpm-name').text().trim().toLowerCase();
    pks[nm] = {name, range: 'https://veekun.com' + img};
    console.log('Done ' + nm);
  });
}
$('.dex-pokemon-moves>tbody>tr').each(function () {
  const tds = $(this).children();
  getskill($(tds[1]).text());
});
*/
const pokeMoves = {
  Drilbur: {
    name: 'dig',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  },
  Gallade: {
    name: 'psycho cut',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  },
  Gyarados: {
    name: 'aqua tail',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/row-knockback.png',
  },
  Carnivine: {
    name: 'vine whip',
    range: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/row.png',
  },
  Audino: {
    name: 'pound',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Excadrill: {
    name: 'drill run',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead-advance-1.png',
  },
  Mismagius: {
    name: 'shadow ball',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  },
  Spiritomb: {
    name: 'shadow sneak',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Dusknoir: {
    name: 'shadow ball',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  },
  Dusclops: {
    name: 'shadow sneak',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Duskull: {
    name: 'astonish',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead-knockback.png',
  },
  Zebstrika: {
    name: 'discharge',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/ring-adjacent.png',
  },
  Terrakion: {
    name: 'sacred sword',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Musharna: {
    name: 'dream eater',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Blitzle: {
    name: 'spark',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Munna: {
    name: 'hypnosis',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  },
  Dragonite: {
    name: 'dragon rush',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/diamond-2-ahead-advance-2.png',
  },
  Larvitar: {
    name: 'rock tomb',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  },
  Dragonair: {
    name: 'dragon tail',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/row-knockback-switch.png',
  },
  Krookodile: {
    name: 'crunch',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Leafeon: {
    name: 'leaf blade',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Kirlia: {
    name: 'psyshock',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  },
  Espeon: {
    name: 'psybeam',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  },
  Haxorus: {
    name: 'outrage',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/diamond-adjacent.png',
  },
  Fraxure: {
    name: 'dragon claw',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Axew: {
    name: 'dragon rage',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  },
  Raichu: {
    name: 'volt tackle',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/row-2-ahead-advance-1.png',
  },
  Lairon: {
    name: 'iron head',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead-knockback.png',
  },
  Aron: {
    name: 'metal claw',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Zoroark: {
    name: 'night daze',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/diamond-adjacent.png',
  },
  Galvantula: {
    name: 'discharge',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/ring-adjacent.png',
  },
  Zorua: {
    name: 'foul play',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Mewtwo: {
    name: 'psystrike',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/t-shape.png',
  },
  Golbat: {
    name: 'poison fang',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Aggron: {
    name: 'iron tail',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/row-knockback.png',
  },
  Bibarel: {
    name: 'hyper fang',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Eevee: {
    name: 'quick attack',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Venipede: {
    name: 'poison sting',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  },
  Crobat: {
    name: 'cross poison',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/x-shape.png',
  },
  Staraptor: {
    name: 'brave bird',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/chevron-advance-1.png',
  },
  Shinx: {
    name: 'spark',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Bidoof: {
    name: 'headbutt',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Luxio: {
    name: 'discharge',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/ring-adjacent.png',
  },
  Scolipede: {
    name: 'venoshock',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/row-2-ahead.png',
  },
  Chandelure: {
    name: 'fire spin',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/ring-2-ahead.png',
  },
  Whirlipede: {
    name: 'poison tail',
    range: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/row.png',
  },
  Luxray: {
    name: 'thunder',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-3-ahead.png',
  },
  Petilil: {
    name: 'mega drain',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Lampent: {
    name: 'flame burst',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/x-shape-2-ahead.png',
  },
  Litwick: {
    name: 'ember',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  },
  Boldore: {
    name: 'rock slide',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  },
  Gigalith: {
    name: 'stone edge',
    range: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/plus.png',
  },
  Flaaffy: {
    name: 'discharge',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/ring-adjacent.png',
  },
  Mareep: {
    name: 'thunder shock',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  },
  Ampharos: {
    name: 'thunder',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-3-ahead.png',
  },
  Lilligant: {
    name: 'petal dance',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/diamond-adjacent.png',
  },
  Roggenrola: {
    name: 'rock blast',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  },
  Whimsicott: {
    name: 'razor leaf',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  },
  Cottonee: {
    name: 'absorb',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Arbok: {
    name: 'venoshock',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/row-2-ahead.png',
  },
  Lucario: {
    name: 'aura sphere',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead-knockback.png',
  },
  Riolu: {
    name: 'force palm',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead-knockback.png',
  },
  Chingling: {
    name: 'confusion',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-3-ahead.png',
  },
  Ekans: {
    name: 'poison sting',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  },
  Chimecho: {
    name: 'psyshock',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  },
  Persian: {
    name: 'slash',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Pineco: {
    name: 'bug bite',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Forretress: {
    name: 'gyro ball',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead-advance-1.png',
  },
  Gothita: {
    name: 'confusion',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-3-ahead.png',
  },
  Meowth: {
    name: 'fury swipes',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Sealeo: {
    name: 'ice ball',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead-advance-1.png',
  },
  Walrein: {
    name: 'blizzard',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/2-rows-2-ahead.png',
  },
  Krokorok: {
    name: 'bite',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Spheal: {
    name: 'powder snow',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  },
  Sandile: {
    name: 'mud-slap',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  },
  Jolteon: {
    name: 'thunderbolt',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/row-2-ahead.png',
  },
  Rayquaza: {
    name: 'dragon pulse',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  },
  Gothorita: {
    name: 'psybeam',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  },
  Gothitelle: {
    name: 'future sight',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/2-rows-2-ahead.png',
  },
  Glaceon: {
    name: 'icy wind',
    range: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/row.png',
  },
  Magikarp: {
    name: 'splash',
    range: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/user.png',
  },
  Vaporeon: {
    name: 'hydro pump',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  },
  Lapras: {
    name: 'ice beam',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  },
  Pichu: {
    name: 'thunder shock',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  },
  Scizor: {
    name: 'x-scissor',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/x-shape.png',
  },
  Groudon: {
    name: 'earth power',
    range: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/plus.png',
  },
  Scyther: {
    name: 'fury cutter',
    range: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/row.png',
  },
  Gardevoir: {
    name: 'psychic',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/diamond-2-ahead.png',
  },
  Registeel: {
    name: 'flash cannon',
    range: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/plus.png',
  },
  Articuno: {
    name: 'blizzard',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/2-rows-2-ahead.png',
  },
  Dialga: {
    name: 'roar of time',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/2-rows.png',
  },
  Arceus: {
    name: 'judgment',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/ring-adjacent.png',
  },
  Reshiram: {
    name: 'blue flare',
    range: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/plus.png',
  },
  Zekrom: {
    name: 'bolt strike',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead-knockback.png',
  },
  Tyranitar: {
    name: 'stone edge',
    range: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/plus.png',
  },
  Gabite: {
    name: 'dragon claw',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Garchomp: {
    name: 'dragon rush',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/diamond-2-ahead-advance-2.png',
  },
  Gible: {
    name: 'dragon rage',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  },
  Pupitar: {
    name: 'rock slide',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  },
  Metagross: {
    name: 'meteor mash',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead-knockback.png',
  },
  Zweilous: {
    name: 'crunch',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Croagunk: {
    name: 'poison jab',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Froslass: {
    name: 'icy wind',
    range: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/row.png',
  },
  Toxicroak: {
    name: 'sludge bomb',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/x-shape-2-ahead.png',
  },
  Glalie: {
    name: 'ice beam',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  },
  Snorunt: {
    name: 'powder snow',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  },
  Hydreigon: {
    name: 'dragon pulse',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  },
  Deino: {
    name: 'dragon rage',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  },
  Cinccino: {
    name: 'tail slap',
    range: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/row.png',
  },
  Machoke: {
    name: 'wake-up slap',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Minccino: {
    name: 'double slap',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Machop: {
    name: 'karate chop',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Gurdurr: {
    name: 'wake-up slap',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Timburr: {
    name: 'low kick',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Machamp: {
    name: 'cross chop',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/x-shape.png',
  },
  Conkeldurr: {
    name: 'superpower',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead-knockback.png',
  },
  Charizard: {
    name: 'flamethrower',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  },
  Cubchoo: {
    name: 'powder snow',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  },
  Oshawott: {
    name: 'water gun',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  },
  Dewott: {
    name: 'water pulse',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  },
  Charmander: {
    name: 'ember',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  },
  Charmeleon: {
    name: 'fire fang',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Samurott: {
    name: 'aqua tail',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/row-knockback.png',
  },
  Beartic: {
    name: 'icicle crash',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  },
  Metang: {
    name: 'bullet punch',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Dratini: {
    name: 'dragon rage',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  },
  Chimchar: {
    name: 'ember',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  },
  Gengar: {
    name: 'shadow ball',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  },
  Haunter: {
    name: 'hex',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Gastly: {
    name: 'lick',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Servine: {
    name: 'leaf blade',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Infernape: {
    name: 'fire spin',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/ring-2-ahead.png',
  },
  Monferno: {
    name: 'flame wheel',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead-advance-1.png',
  },
  Beldum: {
    name: 'iron head',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead-knockback.png',
  },
  Emboar: {
    name: 'fire blast',
    range: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/dai.png',
  },
  Abra: {
    name: 'teleport',
    range: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/user.png',
  },
  Sewaddle: {
    name: 'bug bite',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Serperior: {
    name: 'leaf storm',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/ring-adjacent.png',
  },
  Swadloon: {
    name: 'razor leaf',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  },
  Grovyle: {
    name: 'leaf blade',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Alakazam: {
    name: 'psychic',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/diamond-2-ahead.png',
  },
  Kadabra: {
    name: 'psybeam',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  },
  Treecko: {
    name: 'absorb',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Empoleon: {
    name: 'hydro pump',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  },
  Piplup: {
    name: 'bubble',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  },
  Prinplup: {
    name: 'bubble beam',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-ahead.png',
  },
  Simisear: {
    name: 'incinerate',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  },
  Pansear: {
    name: 'flame burst',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/x-shape-2-ahead.png',
  },
  Sceptile: {
    name: 'leaf storm',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/ring-adjacent.png',
  },
  Tepig: {
    name: 'ember',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  },
  Simisage: {
    name: 'leaf storm',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/ring-adjacent.png',
  },
  Pignite: {
    name: 'heat crash',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead-advance-1.png',
  },
  Pansage: {
    name: 'vine whip',
    range: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/row.png',
  },
  Darmanitan: {
    name: 'fire blast',
    range: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/dai.png',
  },
  Darumaka: {
    name: 'flame wheel',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead-advance-1.png',
  },
  Simipour: {
    name: 'brine',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  },
  Panpour: {
    name: 'water gun',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  },
  Joltik: {
    name: 'electro ball',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  },
  Flareon: {
    name: 'fire fang',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Zubat: {
    name: 'wing attack',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Wigglytuff: {
    name: 'hyper voice',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/ring-adjacent.png',
  },
  Umbreon: {
    name: 'assurance',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Jigglypuff: {
    name: 'double slap',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Quagsire: {
    name: 'mud bomb',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  },
  Wooper: {
    name: 'water gun',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  },
  Ralts: {
    name: 'confusion',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-3-ahead.png',
  },
  Pikachu: {
    name: 'thunderbolt',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/row-2-ahead.png',
  },
  Igglybuff: {
    name: 'pound',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Starly: {
    name: 'quick attack',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Pawniard: {
    name: 'assurance',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Drapion: {
    name: 'cross poison',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/x-shape.png',
  },
  Skorupi: {
    name: 'poison jab',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Staravia: {
    name: 'wing attack',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Shieldon: {
    name: 'iron head',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead-knockback.png',
  },
  Rhyperior: {
    name: 'rock wrecker',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-3-ahead.png',
  },
  Rhydon: {
    name: 'drill run',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead-advance-1.png',
  },
  Drifloon: {
    name: 'astonish',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead-knockback.png',
  },
  Rhyhorn: {
    name: 'bulldoze',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/diamond-adjacent.png',
  },
  Scraggy: {
    name: 'faint attack',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Scrafty: {
    name: 'high jump kick',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead-advance-1.png',
  },
  Bastiodon: {
    name: 'rock slide',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  },
  Rufflet: {
    name: 'wing attack',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Anorith: {
    name: 'fury cutter',
    range: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/row.png',
  },
  Braviary: {
    name: 'sky drop',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Drifblim: {
    name: 'shadow ball',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  },
  Larvesta: {
    name: 'flame wheel',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead-advance-1.png',
  },
  Armaldo: {
    name: 'x-scissor',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/x-shape.png',
  },
  Onix: {
    name: 'rock tomb',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  },
  Volcarona: {
    name: 'fiery dance',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/diamond-2-ahead-advance-2.png',
  },
  Snorlax: {
    name: 'body slam',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead-advance-1.png',
  },
  Steelix: {
    name: 'iron tail',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/row-knockback.png',
  },
  Munchlax: {
    name: 'tackle',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Beedrill: {
    name: 'twineedle',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  },
  Weavile: {
    name: 'night slash',
    range: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/row.png',
  },
  Misdreavus: {
    name: 'astonish',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead-knockback.png',
  },
  Sneasel: {
    name: 'faint attack',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  },
  Snivy: {
    name: 'vine whip',
    range: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/row.png',
  },
  Bisharp: {
    name: 'night slash',
    range: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/row.png',
  },
  Emolga: {
    name: 'volt switch',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead-switch-back.png',
  },
  Leavanny: {
    name: 'x-scissor',
    range:
      'https://veekun.com/dex/media/chrome/conquest-move-ranges/x-shape.png',
  },
};

/*
// Get skills
dd = {};
$('.xx tr').each(function () {
  const tds = $(this).children();
  dd[$(tds[0]).text().trim()] = $(tds[2]).text().trim();
});
*/
const skillsList = {
  'Added Bonus':
    'Increases probability of inflicting burn, poison, bad poison, paralysis, or freezing on enemies by 30% for 3 turns.',
  Adrenaline: 'Raises Attack by 1 stage for 3 turns.',
  Brotherhood:
    "Raises Defense of the Warrior's Pokémon and adjacent allies by 1 stage for 3 turns.",
  Bustle:
    "Increases Range of Warrior's Pokémon and adjacent allies by 1 for 1 turn.",
  Convalesce:
    "At the beginning of the next 3 turns, the Warrior's Pokémon and adjacent allies have their HP restored by 1/8 of their maximum HP.",
  'Crack Shot':
    "All the Warrior's Pokémon's moves are guaranteed to hit for 1 turn.",
  'Deep Breath':
    "Fully restores the Warrior's Pokémon's HP, but its Range is set to 0 for 3 turns.",
  Detox: 'Cures any allied Pokémon who are poisoned or paralyzed.',
  'Eagle Eye': 'Boosts accuracy by 3 stages for 3 turns.',
  Empathy: "Restores 100 HP to the Warrior's Pokémon and adjacent allies.",
  Fortify: 'Raises Defense by 1 stage for 3 turns.',
  Greed:
    'For 3 turns, one extra treasure box will appear upon defeating an enemy.',
  'High Jump': "Enables Warrior's Pokémon to climb high ledges for 1 turn.",
  Impact:
    "For 3 turns, the Pokémon's move has a 50% chance to make targets flinch.",
  Marksman:
    'Boosts accuracy by 3 stages and increases chances of critical hits for 3 turns.',
  'Mighty Blow': 'Raises Attack by 2 stages for 1 turn.',
  'Quick Strike':
    "Increases Range by 1, and gives the Pokémon's move a 50% chance to make targets flinch for 1 turn.",
  Rally:
    "Raises Attack of Warrior's Pokémon and adjacent allies by 1 stage for 3 turns.",
  Salve: "Cures status ailments of the Warrior's Pokémon and adjacent allies.",
  Shout: 'Cures any allied Pokémon who are confused or sleeping.',
  'Sweet Song': 'Restores 50 HP to all allied Pokémon.',
  Temperate: 'Cures any allied Pokémon who are burned or frozen.',
  'Top Speed': 'Increases Range by 2 for 1 turn.',
  Ambition:
    "Allows the Warrior's Pokémon to move twice, and its moves have a 50% chance to make targets flinch for the turn.",
  Belief:
    'Raises Defense by 1 stage and blocks status ailments (except flinch) for 3 turns.',
  Bewilder:
    "All allies' moves have an 80% chance to confuse the enemy for 1 turn.",
  Carefree:
    "For 4 turns, raises Attack by 1 stage, and the Pokémon's move has a 50% chance to make targets flinch.",
  'Chesto!':
    "Raises Attack by 3 stages but lowers Defense by 2 stages for the Warrior's Pokémon and adjacent allies for 1 turn.",
  'Cold Eyes':
    'Increases Speed by 1 stage and ensures all moves hit for 3 turns.',
  Compassion:
    "Raises Defense by 2 stages for 1 turn and restores 80 HP of Warrior's Pokémon and adjacent allies.",
  Courage: 'Increases Range by 2 and Attack by 2 stages for 1 turn.',
  Desire: "Allows the Warrior's Pokémon to move twice in one turn.",
  Elegance:
    "For 3 turns, increases Range by 1, and the Pokémon's moves are guaranteed to hit.",
  Cunning:
    "For 3 turns, increases Speed by 2 stages, and the Pokémon's moves are guaranteed to hit.",
  Cupid:
    'Multiples Attack by 1 + 0.3 times the total number of female Warriors with non-fainted Pokémon on the battlefield. On top of this, boosts Attack by 1 stage and moves are guaranteed to hit. Lasts 1 turn.\nNote: The Heroine is not counted for this effect.',
  Extinguish:
    'Terminates the effects of all active Warrior Skills for both foes and allies.',
  Faith: "All allies' moves are guaranteed to hit for 3 turns.",
  'Father Figure':
    'For 3 turns, blocks enemy critical hits and increases Energy for all allied Pokémon.',
  'Fūrin Kazan':
    'Raises Attack and Defense of all allied Pokémon by 1 stage for 3 turns.',
  Grace:
    "Restores HP of Warrior's Pokémon and adjacent allies, but puts affected Pokémon to sleep.",
  'Grand Dream':
    'For 3 turns, increases Energy, and one extra treasure box will appear upon defeating an enemy.',
  'Great Uniter':
    'For 3 turns, increases Energy, raises Attack by 1 stage, and one extra treasure box will appear upon defeating an enemy.',
  Inspiration:
    'For 3 turns, increases Range by 1 and Attack by 1 stage for all allied Pokémon.',
  'Kabuki Dance': 'Raises Energy and Attack of all allied Pokémon for 1 turn.',
  Lazybones:
    'Blocks enemy critical hits and status ailments (except flinch) for all allied Pokémon for 3 turns.',
  'Love and Honor':
    "Restores 80 HP to the Warrior's Pokémon and adjacent allies, and raises their Attack by 2 stages for 1 turn.",
  Mayhem:
    "Allows the Warrior's Pokémon to climb high ledges, gives its move a 40% chance to make targets flinch, and increases Range by 1 for 3 turns.",
  Motivate:
    "Raises Attack by 1 stage and allows Warrior's Pokémon to move twice for 1 turn.",
  'Nene Ninpō':
    "For 1 turn, all moves used against the warrior's Pokémon have an accuracy of 0%. Can be bypassed by Faint Attack, Aura Sphere, or Crack Shot.",
  Ninjutsu:
    'Increases Range by 1, increases chance of critical hits, and allows the Pokémon to climb high ledges for 3 turns.',
  'One-Eyed Dragon':
    "Increases Range of Warrior's Pokémon and adjacent allies by 3 for 3 turns.",
  Rebellion:
    "Increases chance of critical hits for Warrior's Pokémon and adjacent allies for 1 turn.",
  Resolution: 'Raises Defense by 3 stages for 3 turns.',
  Sacrifice:
    'Increases Range by 2 and Attack by 2 stages for 1 turn. Reduces HP to 1.',
  'Soft Light':
    'Cures status ailments and restores 100 HP for all allied Pokémon.',
  Strategist:
    'Blocks enemy critical hits and increases Speed by 1 stage for all allied Pokémon for 3 turns.',
  Thunderclap:
    'Increases Range by 1 and Attack by 1 stage for all allied Pokémon for 1 turn. Increases them by 2 if Typhoon has been used the same turn.',
  Trickster:
    "Improves Speed by 2 stages, allows Warrior's Pokémon to climb high ledges, and increases chance of critical hits for 3 turns.",
  Typhoon:
    'Increases Range by 1 and Attack by 1 stage for all allied Pokémon for 1 turn. Increases them by 2 if Thunderclap has been used the same turn.',
  Unrivaled: 'Raises Attack and Defense by 1 stage for 4 turns.',
  "Viper's Bite":
    'Adds an 80% chance to inflict random status ailments when attacking Pokémon with male Warrior partners for 3 turns. Possible status ailments: burn, poison, bad poison, paralysis, freezing, flinch, confusion, or sleep.',
  'Warrior Woman':
    "Improves Speed by 1 stage and gives the Pokémon's move a 100% chance to make targets flinch for 1 turn.",
  Willpower:
    "Increases chance of critical hits and allows the Warrior's Pokémon to move twice for 1 turn.",
};

/*
// Get hero skills: https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_Conquest_characters
dd = {};
name = '';
$('.xx tr').each(function () {
  tds = $(this).children();
  if (tds.length < 22) {
    skill = $(tds[6]).text().trim();
    dd[name].push(skill);
  } else {
    name = $(tds[1]).find('a').text().trim();
    skill = $(tds[9]).text().trim();
    if (!dd[name]) dd[name] = [skill];
    else dd[name].push(skill);
  }
});
$('.yy tr').each(function () {
  tds = $(this).children();
  name = $(tds[1]).find('a').text().trim();
  skill = $(tds[8]).text().trim();
  if (!dd[name]) dd[name] = [skill];
  else dd[name].push(skill);
});
JSON.stringify(dd);
*/
var heroSkills = {
  'Player ♂': ['Top Speed', 'Courage', 'Motivate'],
  'Player ♀': ['Top Speed', 'Courage', 'Motivate'],
  Aya: ['Sweet Song', 'Compassion'],
  Ginchiyo: ['Bustle', 'Thunderclap'],
  Gracia: ['Added Bonus', 'Bewilder'],
  Hanbei: ['Added Bonus', 'Lazybones'],
  Hanzō: ['Marksman', 'Ninjutsu'],
  Hideyoshi: ['Quick Strike', 'Grand Dream', 'Great Uniter'],
  Ieyasu: ['Brotherhood', 'Resolution'],
  Ina: ['Crack Shot', 'Elegance'],
  Kai: ['Quick Strike', 'Warrior Woman'],
  Kanbei: ['Impact', 'Extinguish'],
  Kanetsugu: ['Rally', 'Love and Honor'],
  Keiji: ['Mighty Blow', 'Carefree'],
  Kenshin: ['Bustle', 'Inspiration'],
  Kiyomasa: ['Empathy', 'Belief'],
  Kotarō: ['Quick Strike', 'Mayhem'],
  Kunoichi: ['Convalesce', 'Trickster'],
  Magoichi: ['Crack Shot', 'Cupid'],
  Masamune: ['Bustle', 'One-Eyed Dragon'],
  Masanori: ['Impact', 'Sacrifice'],
  Mitsuhide: ['Crack Shot', 'Cold Eyes'],
  Mitsunari: ['Marksman', 'Cunning'],
  Motochika: ['Rally', 'Rebellion'],
  Motonari: ['Brotherhood', 'Strategist'],
  Muneshige: ['Marksman', 'Typhoon'],
  Nene: ['Rally', 'Nene Ninpō'],
  Nō: ['Added Bonus', "Viper's Bite"],
  Nobunaga: ['Desire', 'Ambition'],
  Oichi: ['Sweet Song', 'Soft Light'],
  Okuni: ['Convalesce', 'Kabuki Dance'],
  Ranmaru: ['Empathy', 'Faith'],
  Shingen: ['Rally', 'Fūrin Kazan'],
  Tadakatsu: ['Impact', 'Unrivaled'],
  Ujiyasu: ['Brotherhood', 'Father Figure'],
  Yoshihiro: ['Mighty Blow', 'Chesto!'],
  Yoshimoto: ['Deep Breath', 'Grace'],
  Yukimura: ['Mighty Blow', 'Willpower'],
  Akizane: ['Fortify'],
  Asa: ['Sweet Song'],
  Asahi: ['Salve'],
  Bokuden: ['Rally'],
  Bokuzen: ['Added Bonus'],
  Chacha: ['Salve'],
  Chikamasa: ['Shout'],
  Chikayasu: ['Brotherhood'],
  Chiyo: ['Sweet Song'],
  Chiyome: ['Crack Shot'],
  Chōan: ['Added Bonus'],
  Danzō: ['Crack Shot'],
  Dōsan: ['Quick Strike'],
  Dōsetsu: ['Marksman'],
  Ekei: ['Convalesce'],
  Fujitaka: ['Fortify'],
  "Gen'an": ['Temperate'],
  Genba: ['Top Speed'],
  Gō: ['Fortify'],
  Gotoku: ['Crack Shot'],
  Hana: ['Temperate'],
  Harunaga: ['Crack Shot'],
  Harutaka: ['Mighty Blow'],
  Haruyuki: ['Quick Strike'],
  Hatsu: ['Detox'],
  Hatsume: ['Top Speed'],
  Hideaki: ['Fortify'],
  Hidemitsu: ['Shout'],
  Hidenaga: ['Convalesce'],
  Hidetada: ['Salve'],
  Hideyori: ['Salve'],
  Hiroko: ['Detox'],
  Hisaaki: ['High Jump'],
  Hisahide: ['Quick Strike'],
  Iroha: ['Added Bonus'],
  Isa: ['Adrenaline'],
  Ise: ['Eagle Eye'],
  Isuke: ['Top Speed'],
  Ittetsu: ['Rally'],
  Jinpachi: ['Top Speed'],
  Jūbei: ['Impact'],
  Jūzō: ['Empathy'],
  Kageie: ['Mighty Blow'],
  Kagekatsu: ['Marksman'],
  Kagetsuna: ['Fortify'],
  Kamanosuke: ['High Jump'],
  Kame: ['Crack Shot'],
  Kanemori: ['Brotherhood'],
  Kashinkoji: ['Eagle Eye'],
  Katsu: ['Quick Strike'],
  Katsuyori: ['Mighty Blow'],
  Kazumasa: ['Greed'],
  Kazumasu: ['Marksman'],
  Kazutoyo: ['Deep Breath'],
  Kei: ['Adrenaline'],
  Kitsuno: ['Sweet Song'],
  Kiyo: ['Temperate'],
  Koroku: ['Mighty Blow'],
  Maa: ['Added Bonus'],
  Madoka: ['Empathy'],
  Masahide: ['Shout'],
  Masakage: ['Deep Breath'],
  Masanobu: ['Salve'],
  Masatoshi: ['Bustle'],
  Masatoyo: ['Brotherhood'],
  Masatsuna: ['Rally'],
  Masayuki: ['Convalesce'],
  Mitsutada: ['Salve'],
  Morichika: ['Eagle Eye'],
  Morikiyo: ['Bustle'],
  Morinari: ['Bustle'],
  Motoharu: ['Mighty Blow'],
  Motozane: ['Top Speed'],
  Munenori: ['Impact'],
  Munetoki: ['Deep Breath'],
  Munezane: ['Eagle Eye'],
  Murashige: ['Top Speed'],
  Nagahide: ['Empathy'],
  Nagayasu: ['Adrenaline'],
  Nagayoshi: ['Adrenaline'],
  Naka: ['Temperate'],
  Naoie: ['Quick Strike'],
  Naomasa: ['Convalesce'],
  Naoshige: ['Brotherhood'],
  Narimasa: ['Bustle'],
  Nobuchika: ['Crack Shot'],
  Nobufusa: ['Deep Breath'],
  Nobutsuna: ['Mighty Blow'],
  Norishige: ['Bustle'],
  Omi: ['Salve'],
  Otsū: ['Sweet Song'],
  Rikyū: ['Detox'],
  Sadamitsu: ['Salve'],
  Sadatoshi: ['Eagle Eye'],
  Saizō: ['Detox'],
  Sandayū: ['Bustle'],
  Saneyori: ['Detox'],
  Sasuke: ['Bustle'],
  Seikai: ['High Jump'],
  Seikurō: ['High Jump'],
  Sekisō: ['Deep Breath'],
  Sen: ['Brotherhood'],
  Sena: ['Eagle Eye'],
  Sessai: ['Quick Strike'],
  Shigemoto: ['Empathy'],
  Shigezane: ['Bustle'],
  Shimoyama: ['Shout'],
  Shizuka: ['Rally'],
  Shōun: ['Rally'],
  Sōrin: ['Rally'],
  Sōun: ['Quick Strike'],
  Tadamoto: ['Fortify'],
  Tadaoki: ['Mighty Blow'],
  Tadasumi: ['Deep Breath'],
  Tadatsugu: ['Empathy'],
  Tadatsune: ['Top Speed'],
  Takahiro: ['Greed'],
  Takahisa: ['Impact'],
  Takakage: ['Adrenaline'],
  Takamoto: ['Brotherhood'],
  Takanobu: ['Shout'],
  Takatane: ['Top Speed'],
  Takatora: ['Added Bonus'],
  Takayori: ['Fortify'],
  Takeyoshi: ['Eagle Eye'],
  Tatsuko: ['Eagle Eye'],
  Tenkai: ['Detox'],
  Terumoto: ['Fortify'],
  Tokitaka: ['Greed'],
  Toku: ['Added Bonus'],
  Tomonobu: ['Shout'],
  Tomonori: ['Impact'],
  Toshimitsu: ['Impact'],
  Tsunamoto: ['Adrenaline'],
  Tsunashige: ['Marksman'],
  Tsunehisa: ['Salve'],
  Tsunenaga: ['High Jump'],
  Tsuru: ['Detox'],
  Ujichika: ['Temperate'],
  Ujihiro: ['Greed'],
  Ujikuni: ['Brotherhood'],
  Ujimasa: ['Adrenaline'],
  Ujinao: ['Greed'],
  Ujisato: ['Detox'],
  Ujiteru: ['Shout'],
  Ujizane: ['Added Bonus'],
  Ume: ['High Jump'],
  Urakusai: ['Eagle Eye'],
  Yasumasa: ['Marksman'],
  Yasunaga: ['Crack Shot'],
  Yasutomo: ['Mighty Blow'],
  Yatarō: ['Impact'],
  Yazaemon: ['Eagle Eye'],
  Yoshi: ['Detox'],
  Yoshiaki: ['Greed'],
  Yoshikiyo: ['Rally'],
  Yoshitaka: ['Rally'],
  Yoshitatsu: ['Greed'],
  Yoshiteru: ['Convalesce'],
  Yoshitsugu: ['Empathy'],
  Yukimasa: ['Temperate'],
  Yukinaga: ['Deep Breath'],
  Yukitaka: ['Impact'],
};

/*
// Hero rank-up: https://bulbapedia.bulbagarden.net/wiki/Warlord
dd = {};
name = '';
$('.xx tr').each(function () {
  tds = $(this).children();
  if (tds.length < 12) {
    rank = $(tds[7]).text().trim();
    dd[name].push(rank);
  } else {
    name = $(tds[0]).find('a').text().trim();
    rank = $(tds[11]).text().trim();
    if (!dd[name]) dd[name] = [rank];
    else dd[name].push(rank);
  }
});
JSON.stringify(dd);
*/
var heroRankUp = {
  'Player ♂': [
    'Base Rank',
    'Automatic transformation during The Legend of Ransei (Base Rank in all other stories)',
    '80% link with an Eeveelution (not Eevee) in Two Heroes of Ransei.',
  ],
  'Player ♀': [
    'Base Rank',
    'Automatic transformation during The Legend of Ransei (Base Rank in all other stories)',
    '80% link with an Eeveelution (not Eevee) in Two Heroes of Ransei.',
  ],
  Nobunaga: [
    'Base Rank',
    'Base Rank (In The Legend of Ransei and "Defeat Nobunaga" stories), 80% link with Hydreigon in The Road to Conquest.',
  ],
  Oichi: ['Base Rank', '55% link with Jigglypuff or Wigglytuff'],
  Hideyoshi: [
    'Base Rank',
    '60% link with Monferno or Infernape',
    '70% link with Reshiram (hidden Rank)',
  ],
  Motochika: ['Base Rank', '65% link with Dewott or Samurott'],
  Ginchiyo: [
    'Base Rank',
    '60% link with Luxio or Luxray while both Ginchiyo and Muneshige are in the army but deployed in two non-adjacent kingdoms',
  ],
  Motonari: [
    'Base Rank',
    '60% link with Servine or Serperior when at least 100 Pokémon registered in the Gallery.',
  ],
  Mitsuhide: [
    'Base Rank',
    '70% link with Lapras or Articuno after clearing Tragic Determination',
  ],
  Yoshihiro: ['Base Rank', '60% link with Gurdurr or Conkeldurr'],
  Nene: [
    'Base Rank',
    '60% link with Golbat or Crobat when all Poison-type Pokémon are registered in the Gallery.',
  ],
  Shingen: [
    'Base Rank',
    '75% link with Rhyperior after clearing The Joy of Battle',
  ],
  Masamune: [
    'Base Rank',
    "60% link with Rufflet or Braviary in The Dragon's Dream",
  ],
  Kenshin: ['Base Rank', '75% link with Gallade after clearing Archenemies.'],
  Yoshimoto: ['Base Rank', '55% link with Pineco or Forretress'],
  Ujiyasu: ['Base Rank', '60% link with Boldore or Gigalith'],
  Nō: [
    'Base Rank',
    '60% link with Misdreavus or Mismagius when all Ghost-type Pokémon are registered in the Gallery.',
  ],
  Kotarō: ['Base Rank', '60% link with Zorua or Zoroark'],
  Ieyasu: [
    'Base Rank',
    '70% link with Aggron when the army has more than 50 warriors, and more than half of them have their perfect link when the warrior headcount is even; or all warriors have their perfect link when the headcount is odd.',
  ],
  Hanbei: [
    'Base Rank',
    '60% link with Pikachu or Raichu when deployed in the same kingdom as Kanbei.',
  ],
  Kanbei: [
    'Base Rank',
    '60% link with Lampent or Chandelure when deployed in the same kingdom as Hanbei.',
  ],
  Muneshige: [
    'Base Rank',
    '60% link with Staravia or Staraptor while both Ginchiyo and Muneshige are in the army but deployed in two non-adjacent kingdoms.',
  ],
  Gracia: ['Base Rank', '60% link with Gothorita or Gothitelle'],
  Hanzō: ['Base Rank', '60% link with Haunter or Gengar'],
  Kunoichi: ['Base Rank', '60% link with Sneasel or Weavile'],
  Yukimura: [
    'Base Rank',
    '65% link with Charmeleon or Charizard when he is deployed with Shingen in the same kingdom.',
  ],
  Magoichi: [
    'Base Rank',
    '60% link with Grovyle or Sceptile when three or more female Warlords are deployed with Magoichi in the same kingdom, and Masamune is not deployed with him.',
  ],
  Kanetsugu: [
    'Base Rank',
    '60% link with Kadabra or Alakazam when deployed with Kenshin in the same kingdom.',
  ],
  Aya: ['Base Rank', '55% link with Snorunt or Froslass'],
  Kai: ['Base Rank', '55% link with Darumaka or Darmanitan'],
  Okuni: ['Base Rank', '65% link with Larvesta or Volcarona'],
  Ranmaru: [
    'Base Rank',
    '60% link with Riolu or Lucario when deployed with Nobunaga in the same kingdom.',
  ],
  Tadakatsu: [
    'Base Rank',
    '80% link with Metagross when deployed with Ieyasu and Ina in the same kingdom.',
  ],
  Ina: ['Base Rank', '65% link with Prinplup or Empoleon'],
  Keiji: ['Base Rank', '70% link with Bastiodon'],
  Mitsunari: ['Base Rank', '60% link with Pawniard or Bisharp'],
  Kiyomasa: ['Base Rank', '60% link with Fraxure or Haxorus'],
  Masanori: ['Base Rank', '60% link with Krokorok or Krookodile'],
};

/*
// Pokemon Skills/Abilities: https://bulbapedia.bulbagarden.net/wiki/List_of_Abilities_in_Pok%C3%A9mon_Conquest
dd = {};
$('.xx tr').each(function () {
  tds = $(this).children();
  key = $(tds[0]).text().trim();
  val = $(tds[2]).text().trim();
  dd[key] = val;
});
JSON.stringify(dd);
*/
var pokeSkills = {
  'Aqua Boost':
    "Boosts the effectiveness of adjacent allies' Water-type attacks.",
  'Battle Armor': 'The Pokémon is protected against critical hits.',
  'Black Hole':
    'Enemies adjacent to the Pokémon have their Range reduced to 0.',
  Blaze: 'Raises Attack when HP is at or below 1/3 of max HP.',
  Bodyguard:
    'Once per turn, the Pokémon will switch positions with an adjacent ally to take an attack in its place.',
  Bonanza:
    'The Pokémon is able to collect considerably more gold from treasure boxes.',
  Calming: 'The Pokémon can send enemies within a Range of 2 to sleep.',
  Celebrate: 'The Pokémon can move again after defeating an enemy.',
  'Clear Body': "Prevents the Pokémon's stats from being lowered.",
  Climber: 'Raises Attack when the Pokémon is below its target.',
  Compoundeyes: "The Pokémon's accuracy is boosted.",
  Confidence:
    'Increases the Defense of allies within a Range of 2. (Wears off before the start of enemy turn.)',
  Conqueror:
    'Increases Attack, Defense, and Speed by 0.2× whenever the Pokémon defeats at least 1 enemy. The boost is stackable and lasts the entire battle.',
  Daze: 'The Pokémon can send enemies within a Range of 2 to sleep for a long time.',
  Decoy:
    'The Pokémon can act as a decoy, attracting enemy attacks. (Has no effect due to a programming error.)',
  'Deep Sleep': 'Restores HP while sleeping.',
  Disgust: 'Forces hit enemies to switch places with adjacent enemies.',
  Dodge:
    "The Pokémon can evade direct attacks and lower opponents' Defense and Speed by 1 stage (i.e. 0.66× if no prior modifiers).",
  Explode:
    "The Pokémon explodes upon fainting, inflicting damage on those within 8 adjacent tiles, scaling with this Pokémon's Attack stat.",
  'Flame Body': 'Contact with the Pokémon may burn the attacker.',
  'Flame Boost':
    "Boosts the effectiveness of adjacent allies' Fire-type attacks.",
  'Flash Fire': 'Raises Attack if hit by a Fire-type move.',
  Fortune: 'The Pokémon is able to collect more gold from treasure boxes.',
  Frighten:
    'Reduces the Speed and Range of enemies within a Range of 2 by 1 stage. Range can be reduced to a minimum of 1 (before snow penalty).',
  Frostbite: 'Contact with the Pokémon may freeze the attacker.',
  'Grass Cloak': 'Improves Defense on grass.',
  Gulp: 'Restores HP when the Pokémon is standing in water.',
  Guts: 'Raises Attack when suffering from a status ailment.',
  Healer: "The Pokémon may heal an adjacent ally's status ailments.",
  Herbivore: 'Restores HP when the Pokémon is standing on grass.',
  Hero: 'Increases Attack and Defense by 1 stage (i.e. 1.5× if no prior modifiers) when their army is "struggling" (Army\'s total strength below 1/3 of opponent\'s).',
  'High-rise': 'Raises Attack when the Pokémon is above its target.',
  'Hot Blooded':
    'Restores HP when the Pokémon is standing in magma, soil, or sand.',
  Illusion: 'Appears disguised as an allied Pokémon.',
  Immunity: 'Prevents the Pokémon from being poisoned.',
  'Inner Focus': 'The Pokémon is protected from flinching.',
  Instinct: 'The Pokémon uses intuition to swiftly evade enemy moves.',
  Interference: 'Reduces the accuracy of enemies within a Range of 2.',
  Intimidate:
    'Reduces the Attack of enemies within a Range of 2 by 1 stage (i.e. 0.66× if no prior modifiers).',
  'Jagged Edge':
    "Contact with the Pokémon inflicts 1/8 of the attacker's maximum HP. Activates repeatedly for multi-strike moves.",
  Justified: 'Raises Attack if hit by a Dark-type move.',
  'Keen Eye': 'Prevents the Pokémon from losing accuracy.',
  'Last Bastion':
    'Increases Attack and Defense by 2 stages (i.e. 2.0× if no prior modifiers) when all other allies have been defeated.',
  Levitate:
    'Gives full immunity to all Ground-type moves. Also grants unhindered movement across all terrain, similar to Flying-type Pokémon',
  'Life Force': 'Restores 1/8 of maximum HP every turn.',
  Limber: 'The Pokémon is protected from paralysis.',
  Lightningrod:
    'Absorbs all Electric-type moves to raise Attack. Also causes Electric-type moves to miss all other Pokémon targeted by the same move.',
  Lullaby: 'The Pokémon can sing enemies within a Range of 2 to sleep.',
  Lunchbox: 'Restores HP when waiting at the end of a turn.',
  Medic: 'Restores the HP of adjacent allies.',
  Melee:
    'If an adjacent enemy takes damage, the Pokémon deals additional damage to that enemy, equal to 1/16 of its maximum HP.',
  'Mold Breaker':
    'Enemy Abilities that activate before the enemy takes damage will not activate.',
  'Mood Maker':
    'Increases the Energy of allies within a Range of 2 by 1 stage for one turn.',
  'Motor Drive':
    'Raises Speed and nullifies damage if hit by an Electric-type move.',
  Mountaineer: 'The Pokémon can climb to high places.',
  Moxie: 'Raises Attack for 1 turn after defeating an enemy.',
  Nomad: 'Raises Attack in proportion to distance moved.',
  Nurse: "The Pokémon may heal an adjacent ally's status ailments.",
  Omnipotent:
    'The Pokémon has the Abilities Instinct, Mountaineer, and Life Force, and can inflict damage upon Pokémon of all types.',
  Overgrow: 'Raises Attack when HP is at or below 1/3 of max HP.',
  'Own Tempo': 'Prevents the Pokémon from becoming confused.',
  Parry: 'The Pokémon can parry direct enemy attacks with claws or blades.',
  Perception: 'The Pokémon can evade moves from its allies.',
  'Poison Point': 'Contact with the Pokémon may poison the attacker.',
  'Power Nap':
    'The Pokémon falls asleep and recovers HP when HP is at or below 1/3 of max HP.',
  Pride:
    'Raises Attack and Defense by 1 stage (i.e. 1.5× if no prior modifiers) when suffering from a status ailment.',
  'Run Up': 'Raises Attack in proportion to distance moved.',
  Sandpit:
    'Restores 1/8 of maximum HP when the Pokémon is standing on soil or sand.',
  Sequence:
    'Raises Attack in proportion to the number of adjacent Electric-type allies.',
  Shackle:
    'Reduces Range of hit enemies by 1, to a minimum of 1 (before snow penalty).',
  'Shadow Dash':
    'Increases Range by 2 (capping at 6) when there are no other Pokémon within three squares.',
  Share:
    'The Pokémon benefits from allied Warrior Skills, wherever they are (excluding Ambition, Desire, Motivate, and Willpower).',
  'Shed Skin': 'The Pokémon may heal its own status ailments.',
  'Shell Armor': 'The Pokémon is protected against critical hits.',
  Shield:
    "When the Pokémon is attacked by an enemy move that hits a column of tiles, the move will miss the Pokémon's allies that are standing behind it.",
  Simple:
    'After applying stat modifiers, stats are doubled if the stat modifier is positive, and halved if it is negative. Also works for stat-boosting equipment.',
  Skater:
    'Increases Range on ice to include tiles adjacent to any ice tiles within range.',
  Sniper: 'Powers up moves if they become critical hits.',
  'Solid Rock': 'Reduces damage from supereffective attacks.',
  Spirit:
    'Restores HP and raises Attack by 1 stage (i.e. 1.5× if no prior modifiers) when HP is at or below 1/3 of max HP.',
  Sponge:
    "The Pokémon can absorb the HP of adjacent enemies. Damage dealt is equal to 1/16 of the victim's maximum HP, and HP restored is half of the damage dealt.",
  Sprint: 'Increases Range by 1.',
  Static: 'Contact with the Pokémon may cause paralysis.',
  Stealth:
    'The Pokémon may evade enemy moves when standing on terrain that matches one of their types.',
  Sturdy:
    'When at full HP, the Pokémon will survive any attack with at least 1 HP.',
  Swarm: 'Raises Attack when HP is at or below 1/3 of max HP.',
  Tenacity: 'Contact with the Pokémon may cause the attacker to flinch.',
  Teravolt:
    'Enemy Abilities that activate before the enemy takes damage will not activate.',
  'Thick Fat': 'Raises resistance to Fire-type and Ice-type moves.',
  Thrust: 'The Pokémon pushes its target 1 additional tile away.',
  Torrent: 'Raises Attack when HP is at or below 1/3 of max HP.',
  Turboblaze:
    'Enemy Abilities that activate before the enemy takes damage will not activate.',
  Unaware: 'Ignores any stat changes in enemy Pokémon.',
  Vanguard:
    'Applies a 1.5× multiplier to attacks carried out at the start of a turn.',
  'Volt Absorb': 'Restores HP if hit by an Electric-type move.',
  'Warm Blanket': 'Restores HP when the Pokémon is standing in magma.',
  'Water Absorb': 'Restores HP if hit by a Water-type move.',
  'Wave Rider':
    'Increases Range on water to include tiles adjacent to any water tiles within range.',
};

/*
// Pokemon Moves: https://veekun.com/dex/conquest/moves
dd = {};
$('#xx tr').each(function () {
  const tds = $(this).children();
  nm = $(tds[0]).text().trim().toLowerCase();
  dd[nm] = {
    pow: $(tds[3]).text().trim(),
    star: $(tds[4]).text().trim(),
    acc: $(tds[5]).text().trim(),
    eff: $(tds[6]).text().trim(),
  };
});
JSON.stringify(dd);
*/
var allMoves = {
  absorb: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '20',
    star: '★',
    acc: '100%',
    eff: 'Heals the user by half the damage dealt.',
  },
  'aqua tail': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/row-knockback.png',
    pow: '44',
    star: '★★★★',
    acc: '90%',
    eff: 'Inflicts regular damage with no additional effect.',
  },
  assurance: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '31',
    star: '★★★',
    acc: '100%',
    eff: 'Has double power if the target has already taken damage this turn.',
  },
  astonish: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead-knockback.png',
    pow: '20',
    star: '★',
    acc: '100%',
    eff: 'Has a 30% chance to make the target flinch.',
  },
  'aura sphere': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-2-ahead-knockback.png',
    pow: '45',
    star: '★★★★',
    acc: '—',
    eff: 'Never misses.',
  },
  bite: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '36',
    star: '★★★',
    acc: '100%',
    eff: 'Has a 30% chance to make the target flinch.',
  },
  blizzard: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/2-rows-2-ahead.png',
    pow: '51',
    star: '★★★★★',
    acc: '70%',
    eff: 'Has a 10% chance to freeze each target.',
  },
  'blue flare': {
    range: 'https://veekun.com//dex/media/chrome/conquest-move-ranges/plus.png',
    pow: '55',
    star: '★★★★★',
    acc: '85%',
    eff: 'Has a 20% chance to burn each target.',
  },
  'body slam': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-2-ahead-advance-1.png',
    pow: '45',
    star: '★★★★',
    acc: '100%',
    eff: 'Has a 30% chance to paralyze the target.',
  },
  'bolt strike': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead-knockback.png',
    pow: '57',
    star: '★★★★★',
    acc: '85%',
    eff: 'Has a 20% chance to paralyze the target.',
  },
  'brave bird': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/chevron-advance-1.png',
    pow: '58',
    star: '★★★★★',
    acc: '100%',
    eff: "Lowers the user's range and Defense until its next turn.",
  },
  brine: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
    pow: '35',
    star: '★★★',
    acc: '100%',
    eff: 'Has double power against Pokémon with less than half their max HP remaining.',
  },
  bubble: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
    pow: '20',
    star: '★',
    acc: '100%',
    eff: "Has a 10% chance to lower each target's Speed.",
  },
  'bubble beam': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/column-2-ahead.png',
    pow: '38',
    star: '★★★',
    acc: '100%',
    eff: "Has a 10% chance to lower each target's Speed.",
  },
  'bug bite': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '36',
    star: '★★★',
    acc: '100%',
    eff: "Uses the target's item if it is consumable.",
  },
  bulldoze: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/diamond-adjacent.png',
    pow: '33',
    star: '★★★',
    acc: '100%',
    eff: "Has a 100% chance to lower each target's range by one tile.",
  },
  'bullet punch': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '26',
    star: '★★',
    acc: '100%',
    eff: 'Inflicts regular damage with no additional effect.',
  },
  confusion: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-3-ahead.png',
    pow: '29',
    star: '★★',
    acc: '100%',
    eff: 'Has a 10% chance to confuse the target.',
  },
  'cross chop': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/x-shape.png',
    pow: '45',
    star: '★★★★',
    acc: '80%',
    eff: 'Has an increased chance for a critical hit.',
  },
  'cross poison': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/x-shape.png',
    pow: '38',
    star: '★★★',
    acc: '100%',
    eff: 'Has a 10% chance to poison each target and an increased chance for a critical hit.',
  },
  crunch: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '43',
    star: '★★★★',
    acc: '100%',
    eff: "Has a 20% chance to lower the target's Defense.",
  },
  dig: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
    pow: '41',
    star: '★★★★',
    acc: '100%',
    eff: 'Digs underground and hits at the beginning of the next turn.',
  },
  discharge: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/ring-adjacent.png',
    pow: '41',
    star: '★★★★',
    acc: '100%',
    eff: 'Has a 30% chance to paralyze each target.',
  },
  'double slap': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '10',
    star: '★',
    acc: '90%',
    eff: 'Hits 2 to 5 times in one turn.',
  },
  'dragon claw': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '43',
    star: '★★★★',
    acc: '100%',
    eff: 'Inflicts regular damage with no additional effect.',
  },
  'dragon pulse': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
    pow: '44',
    star: '★★★★',
    acc: '100%',
    eff: 'Inflicts regular damage with no additional effect.',
  },
  'dragon rage': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
    pow: '40',
    star: '★★★',
    acc: '75%',
    eff: 'Inflicts exactly 40 HP in damage.',
  },
  'dragon rush': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/diamond-2-ahead-advance-2.png',
    pow: '45',
    star: '★★★★',
    acc: '75%',
    eff: 'Has a 20% chance to make each target flinch.',
  },
  'dragon tail': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/row-knockback-switch.png',
    pow: '33',
    star: '★★★',
    acc: '90%',
    eff: 'Switches each target with the Pokémon behind it.',
  },
  'dream eater': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '48',
    star: '★★★★',
    acc: '100%',
    eff: 'Heals the user by half the damage inflicted.  Only works if the target is asleep.',
  },
  'drill run': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-2-ahead-advance-1.png',
    pow: '41',
    star: '★★★★',
    acc: '95%',
    eff: 'Has an increased chance for a critical hit.',
  },
  'earth power': {
    range: 'https://veekun.com//dex/media/chrome/conquest-move-ranges/plus.png',
    pow: '44',
    star: '★★★★',
    acc: '100%',
    eff: "Has a 10% chance to lower each target's Defense.",
  },
  'electro ball': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
    pow: '26',
    star: '★★',
    acc: '100%',
    eff: 'Power rises the faster the user is compared to the target.',
  },
  ember: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
    pow: '26',
    star: '★★',
    acc: '100%',
    eff: 'Has a 10% chance to burn the target.',
  },
  'faint attack': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '36',
    star: '★★★',
    acc: '—',
    eff: 'Never misses.',
  },
  'fiery dance': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/diamond-2-ahead-advance-2.png',
    pow: '41',
    star: '★★★★',
    acc: '100%',
    eff: "Has a 50% chance to raise the user's Attack.",
  },
  'fire blast': {
    range: 'https://veekun.com//dex/media/chrome/conquest-move-ranges/dai.png',
    pow: '51',
    star: '★★★★★',
    acc: '85%',
    eff: 'Has a 10% chance to burn each target.',
  },
  'fire fang': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '39',
    star: '★★★',
    acc: '95%',
    eff: 'Has a 10% chance each to burn the target or make it flinch.',
  },
  'fire spin': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/ring-2-ahead.png',
    pow: '12',
    star: '★',
    acc: '85%',
    eff: 'Hits 4 to 5 times in one turn.',
  },
  'flame burst': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/x-shape-2-ahead.png',
    pow: '38',
    star: '★★★',
    acc: '100%',
    eff: 'Inflicts regular damage with no additional effect.',
  },
  flamethrower: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
    pow: '45',
    star: '★★★★',
    acc: '100%',
    eff: 'Has a 10% chance to burn each target.',
  },
  'flame wheel': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-2-ahead-advance-1.png',
    pow: '32',
    star: '★★★',
    acc: '100%',
    eff: 'Has a 10% chance to burn the target.  Thaws the user out if frozen.',
  },
  'flash cannon': {
    range: 'https://veekun.com//dex/media/chrome/conquest-move-ranges/plus.png',
    pow: '41',
    star: '★★★★',
    acc: '100%',
    eff: "Has a 10% chance to lower each target's Defense.",
  },
  'force palm': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead-knockback.png',
    pow: '31',
    star: '★★★',
    acc: '100%',
    eff: 'Has a 30% chance to paralyze the target.',
  },
  'foul play': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '47',
    star: '★★★★',
    acc: '100%',
    eff: "Inflicts damage based on the target's Attack stat instead of the user's.",
  },
  'fury cutter': {
    range: 'https://veekun.com//dex/media/chrome/conquest-move-ranges/row.png',
    pow: '12',
    star: '★',
    acc: '95%',
    eff: 'Doubles in power with each consecutive successful use.',
  },
  'fury swipes': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '10',
    star: '★',
    acc: '90%',
    eff: 'Hits 2 to 5 times in one turn.',
  },
  'future sight': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/2-rows-2-ahead.png',
    pow: '45',
    star: '★★★★',
    acc: '100%',
    eff: 'Hits each target at the beginning of the turn after next.',
  },
  'gyro ball': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-2-ahead-advance-1.png',
    pow: '18',
    star: '★',
    acc: '100%',
    eff: 'Power rises the slower the user is compared to the target.',
  },
  headbutt: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '39',
    star: '★★★',
    acc: '100%',
    eff: 'Has a 30% chance to make the target flinch.',
  },
  'heat crash': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-2-ahead-advance-1.png',
    pow: '43',
    star: '★★★★',
    acc: '100%',
    eff: 'Inflicts regular damage with no additional effect.',
  },
  hex: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '31',
    star: '★★★',
    acc: '100%',
    eff: 'Has double power if the target has a major status ailment.',
  },
  'high jump kick': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-2-ahead-advance-1.png',
    pow: '65',
    star: '★★★★★',
    acc: '90%',
    eff: 'Damages the user if it misses.',
  },
  'hydro pump': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
    pow: '51',
    star: '★★★★★',
    acc: '80%',
    eff: 'Inflicts regular damage with no additional effect.',
  },
  'hyper fang': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '43',
    star: '★★★★',
    acc: '90%',
    eff: 'Has a 10% chance to make the target flinch.',
  },
  'hyper voice': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/ring-adjacent.png',
    pow: '44',
    star: '★★★★',
    acc: '100%',
    eff: 'Inflicts regular damage with no additional effect.',
  },
  hypnosis: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
    pow: '—',
    star: '',
    acc: '60%',
    eff: 'Puts each target to sleep.',
  },
  'ice ball': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-2-ahead-advance-1.png',
    pow: '18',
    star: '★',
    acc: '90%',
    eff: 'Doubles in power with each consecutive successful use.',
  },
  'ice beam': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
    pow: '45',
    star: '★★★★',
    acc: '100%',
    eff: 'Has a 10% chance to freeze each target.',
  },
  'icicle crash': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
    pow: '45',
    star: '★★★★',
    acc: '90%',
    eff: 'Has a 30% chance to make the target flinch.',
  },
  'icy wind': {
    range: 'https://veekun.com//dex/media/chrome/conquest-move-ranges/row.png',
    pow: '34',
    star: '★★★',
    acc: '95%',
    eff: "Has a 100% chance to lower each target's range by one tile.",
  },
  incinerate: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
    pow: '28',
    star: '★★',
    acc: '100%',
    eff: "Permanently destroys each target's item if it is consumable.",
  },
  'iron head': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead-knockback.png',
    pow: '43',
    star: '★★★★',
    acc: '100%',
    eff: 'Has a 30% chance to make the target flinch.',
  },
  'iron tail': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/row-knockback.png',
    pow: '45',
    star: '★★★★',
    acc: '75%',
    eff: "Has a 30% chance to lower each target's Defense.",
  },
  judgment: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/ring-adjacent.png',
    pow: '55',
    star: '★★★★★',
    acc: '100%',
    eff: 'Inflicts regular damage with no additional effect.',
  },
  'karate chop': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '31',
    star: '★★★',
    acc: '100%',
    eff: 'Has an increased chance for a critical hit.',
  },
  'leaf blade': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '45',
    star: '★★★★',
    acc: '100%',
    eff: 'Has an increased chance for a critical hit.',
  },
  'leaf storm': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/ring-adjacent.png',
    pow: '52',
    star: '★★★★★',
    acc: '90%',
    eff: "Lowers the user's Attack.",
  },
  lick: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '14',
    star: '★',
    acc: '100%',
    eff: 'Has a 30% chance to paralyze the target.',
  },
  'low kick': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '31',
    star: '★★★',
    acc: '90%',
    eff: 'Inflicts regular damage with no additional effect.',
  },
  'mega drain': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '26',
    star: '★★',
    acc: '100%',
    eff: 'Heals the user by half the damage dealt.',
  },
  'metal claw': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '31',
    star: '★★★',
    acc: '95%',
    eff: "Has a 10% chance to raise the user's Attack.",
  },
  'meteor mash': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead-knockback.png',
    pow: '48',
    star: '★★★★',
    acc: '85%',
    eff: "Has a 20% chance to raise the user's Attack.",
  },
  'mud bomb': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
    pow: '39',
    star: '★★★',
    acc: '85%',
    eff: "Has a 30% chance to lower the target's accuracy.",
  },
  'mud-slap': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
    pow: '17',
    star: '★',
    acc: '100%',
    eff: "Has a 100% chance to lower each target's accuracy.",
  },
  'night daze': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/diamond-adjacent.png',
    pow: '42',
    star: '★★★★',
    acc: '95%',
    eff: "Has a 40% chance to lower each target's accuracy.",
  },
  'night slash': {
    range: 'https://veekun.com//dex/media/chrome/conquest-move-ranges/row.png',
    pow: '38',
    star: '★★★',
    acc: '100%',
    eff: 'Has an increased chance for a critical hit.',
  },
  outrage: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/diamond-adjacent.png',
    pow: '41',
    star: '★★★★',
    acc: '100%',
    eff: 'Hits 2 to 3 times in one turn.  User has 0 range on its next turn.',
  },
  'petal dance': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/diamond-adjacent.png',
    pow: '41',
    star: '★★★★',
    acc: '100%',
    eff: 'Hits 2 to 3 times in one turn.  User has 0 range on its next turn.',
  },
  'poison fang': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '31',
    star: '★★★',
    acc: '100%',
    eff: 'Has a 30% chance to badly poison the target.',
  },
  'poison jab': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '43',
    star: '★★★★',
    acc: '100%',
    eff: 'Has a 30% chance to poison the target.',
  },
  'poison sting': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
    pow: '12',
    star: '★',
    acc: '100%',
    eff: 'Has a 30% chance to poison each target.',
  },
  'poison tail': {
    range: 'https://veekun.com//dex/media/chrome/conquest-move-ranges/row.png',
    pow: '29',
    star: '★★',
    acc: '100%',
    eff: 'Has a 10% chance to poison each target and an increased chance for a critical hit.',
  },
  pound: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '26',
    star: '★★',
    acc: '100%',
    eff: 'Inflicts regular damage with no additional effect.',
  },
  'powder snow': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
    pow: '24',
    star: '★★',
    acc: '100%',
    eff: 'Has a 10% chance to freeze each target.',
  },
  psybeam: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
    pow: '35',
    star: '★★★',
    acc: '100%',
    eff: 'Has a 10% chance to confuse each target.',
  },
  psychic: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/diamond-2-ahead.png',
    pow: '44',
    star: '★★★★',
    acc: '100%',
    eff: "Has a 10% chance to lower each target's Defense.",
  },
  'psycho cut': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
    pow: '38',
    star: '★★★',
    acc: '100%',
    eff: 'Has an increased chance for a critical hit.',
  },
  psyshock: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
    pow: '43',
    star: '★★★★',
    acc: '100%',
    eff: 'Inflicts regular damage with no additional effect.',
  },
  psystrike: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/t-shape.png',
    pow: '45',
    star: '★★★★',
    acc: '100%',
    eff: 'Inflicts regular damage with no additional effect.',
  },
  'quick attack': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '31',
    star: '★★★',
    acc: '100%',
    eff: 'Inflicts regular damage with no additional effect.',
  },
  'razor leaf': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
    pow: '31',
    star: '★★★',
    acc: '95%',
    eff: 'Has an increased chance for a critical hit.',
  },
  'roar of time': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/2-rows.png',
    pow: '58',
    star: '★★★★★',
    acc: '90%',
    eff: 'Cannot be used the turn after hitting.',
  },
  'rock blast': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
    pow: '10',
    star: '★',
    acc: '90%',
    eff: 'Hits 2 to 5 times in one turn.',
  },
  'rock slide': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
    pow: '41',
    star: '★★★★',
    acc: '90%',
    eff: 'Has a 30% chance to make each target flinch.',
  },
  'rock tomb': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
    pow: '31',
    star: '★★★',
    acc: '80%',
    eff: "Has a 100% chance to lower the target's range by one tile.",
  },
  'rock wrecker': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-3-ahead.png',
    pow: '58',
    star: '★★★★★',
    acc: '90%',
    eff: 'Cannot be used the turn after hitting.',
  },
  'sacred sword': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '45',
    star: '★★★★',
    acc: '100%',
    eff: "Ignores the target's stat modifiers.",
  },
  'shadow ball': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
    pow: '43',
    star: '★★★★',
    acc: '100%',
    eff: "Has a 20% chance to lower the target's Defense.",
  },
  'shadow sneak': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '26',
    star: '★★',
    acc: '100%',
    eff: 'Inflicts regular damage with no additional effect.',
  },
  'sky drop': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '36',
    star: '★★★',
    acc: '100%',
    eff: 'Lifts the target into the sky and hits at the beginning of the next turn.',
  },
  slash: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '41',
    star: '★★★★',
    acc: '100%',
    eff: 'Has an increased chance for a critical hit.',
  },
  'sludge bomb': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/x-shape-2-ahead.png',
    pow: '44',
    star: '★★★★',
    acc: '100%',
    eff: 'Has a 30% chance to poison each target.',
  },
  spark: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '39',
    star: '★★★',
    acc: '100%',
    eff: 'Has a 30% chance to paralyze the target.',
  },
  splash: {
    range: 'https://veekun.com//dex/media/chrome/conquest-move-ranges/user.png',
    pow: '—',
    star: '',
    acc: '—',
    eff: 'Does nothing.',
  },
  'stone edge': {
    range: 'https://veekun.com//dex/media/chrome/conquest-move-ranges/plus.png',
    pow: '45',
    star: '★★★★',
    acc: '80%',
    eff: 'Has an increased chance for a critical hit.',
  },
  superpower: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead-knockback.png',
    pow: '55',
    star: '★★★★★',
    acc: '100%',
    eff: "Lowers the user's Attack and Defense.",
  },
  tackle: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '31',
    star: '★★★',
    acc: '100%',
    eff: 'Inflicts regular damage with no additional effect.',
  },
  'tail slap': {
    range: 'https://veekun.com//dex/media/chrome/conquest-move-ranges/row.png',
    pow: '23',
    star: '★★',
    acc: '85%',
    eff: 'Hits 2 to 5 times in one turn.',
  },
  teleport: {
    range: 'https://veekun.com//dex/media/chrome/conquest-move-ranges/user.png',
    pow: '—',
    star: '',
    acc: '—',
    eff: 'Teleports randomly.',
  },
  thunder: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-3-ahead.png',
    pow: '51',
    star: '★★★★★',
    acc: '70%',
    eff: 'Has a 30% chance to paralyze the target.',
  },
  thunderbolt: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/row-2-ahead.png',
    pow: '45',
    star: '★★★★',
    acc: '100%',
    eff: 'Has a 10% chance to paralyze each target.',
  },
  'thunder shock': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
    pow: '24',
    star: '★★',
    acc: '100%',
    eff: 'Has a 10% chance to paralyze each target.',
  },
  twineedle: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
    pow: '26',
    star: '★★',
    acc: '100%',
    eff: 'Hits twice in one turn.  Has a 20% chance to poison each target with each hit.',
  },
  venoshock: {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/row-2-ahead.png',
    pow: '35',
    star: '★★★',
    acc: '100%',
    eff: 'Has double power against poisoned Pokémon.',
  },
  'vine whip': {
    range: 'https://veekun.com//dex/media/chrome/conquest-move-ranges/row.png',
    pow: '24',
    star: '★★',
    acc: '100%',
    eff: 'Inflicts regular damage with no additional effect.',
  },
  'volt switch': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-2-ahead-switch-back.png',
    pow: '41',
    star: '★★★★',
    acc: '100%',
    eff: 'User moves back one tile, switching places with any Pokémon already there.',
  },
  'volt tackle': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/row-2-ahead-advance-1.png',
    pow: '58',
    star: '★★★★★',
    acc: '100%',
    eff: "Lowers the user's range and Defense until its next turn.  Has a 10% chance to paralyze each target.",
  },
  'wake-up slap': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '36',
    star: '★★★',
    acc: '100%',
    eff: 'Has double power and wakes the target up if it is asleep.',
  },
  'water gun': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
    pow: '24',
    star: '★★',
    acc: '100%',
    eff: 'Inflicts regular damage with no additional effect.',
  },
  'water pulse': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
    pow: '36',
    star: '★★★',
    acc: '100%',
    eff: 'Has a 20% chance to confuse each target.',
  },
  'wing attack': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
    pow: '31',
    star: '★★★',
    acc: '100%',
    eff: 'Inflicts regular damage with no additional effect.',
  },
  'x-scissor': {
    range:
      'https://veekun.com//dex/media/chrome/conquest-move-ranges/x-shape.png',
    pow: '41',
    star: '★★★★',
    acc: '100%',
    eff: 'Inflicts regular damage with no additional effect.',
  },
};

/*
pokeImgs = {};
pokeData = {};
$('#myTable>tbody>tr').each(function () {
  const tds = $(this).children();
  const lnk = $(tds[2]).find('a');
  const name = lnk.text().trim();
  const id = String(+$(tds[0]).text()).padStart(3, '0');
  pokeImgs[name] = `https://www.serebii.net/conquest/pokemon/${id}.png`;
  pokeData[name] = {
    id: +$(tds[0]).text(),
    name: name,
    hp: +$(tds[6]).text(),
    atk: +$(tds[7]).text(),
    def: +$(tds[8]).text(),
    spd: +$(tds[9]).text(),
    total: +$(tds[10]).text(),
  };
});
JSON.stringify(pokeData)
*/
var pokeImgs = {
  Eevee: 'https://www.serebii.net/conquest/pokemon/133.png',
  Vaporeon: 'https://www.serebii.net/conquest/pokemon/134.png',
  Jolteon: 'https://www.serebii.net/conquest/pokemon/135.png',
  Flareon: 'https://www.serebii.net/conquest/pokemon/136.png',
  Espeon: 'https://www.serebii.net/conquest/pokemon/196.png',
  Umbreon: 'https://www.serebii.net/conquest/pokemon/197.png',
  Leafeon: 'https://www.serebii.net/conquest/pokemon/470.png',
  Glaceon: 'https://www.serebii.net/conquest/pokemon/471.png',
  Ralts: 'https://www.serebii.net/conquest/pokemon/280.png',
  Kirlia: 'https://www.serebii.net/conquest/pokemon/281.png',
  Gardevoir: 'https://www.serebii.net/conquest/pokemon/282.png',
  Gallade: 'https://www.serebii.net/conquest/pokemon/475.png',
  Magikarp: 'https://www.serebii.net/conquest/pokemon/129.png',
  Gyarados: 'https://www.serebii.net/conquest/pokemon/130.png',
  Pichu: 'https://www.serebii.net/conquest/pokemon/172.png',
  Pikachu: 'https://www.serebii.net/conquest/pokemon/025.png',
  Raichu: 'https://www.serebii.net/conquest/pokemon/026.png',
  Wooper: 'https://www.serebii.net/conquest/pokemon/194.png',
  Quagsire: 'https://www.serebii.net/conquest/pokemon/195.png',
  Igglybuff: 'https://www.serebii.net/conquest/pokemon/174.png',
  Jigglypuff: 'https://www.serebii.net/conquest/pokemon/039.png',
  Wigglytuff: 'https://www.serebii.net/conquest/pokemon/040.png',
  Zubat: 'https://www.serebii.net/conquest/pokemon/041.png',
  Golbat: 'https://www.serebii.net/conquest/pokemon/042.png',
  Crobat: 'https://www.serebii.net/conquest/pokemon/169.png',
  Starly: 'https://www.serebii.net/conquest/pokemon/396.png',
  Staravia: 'https://www.serebii.net/conquest/pokemon/397.png',
  Staraptor: 'https://www.serebii.net/conquest/pokemon/398.png',
  Bidoof: 'https://www.serebii.net/conquest/pokemon/399.png',
  Bibarel: 'https://www.serebii.net/conquest/pokemon/400.png',
  Venipede: 'https://www.serebii.net/conquest/pokemon/543.png',
  Whirlipede: 'https://www.serebii.net/conquest/pokemon/544.png',
  Scolipede: 'https://www.serebii.net/conquest/pokemon/545.png',
  Shinx: 'https://www.serebii.net/conquest/pokemon/403.png',
  Luxio: 'https://www.serebii.net/conquest/pokemon/404.png',
  Luxray: 'https://www.serebii.net/conquest/pokemon/405.png',
  Litwick: 'https://www.serebii.net/conquest/pokemon/607.png',
  Lampent: 'https://www.serebii.net/conquest/pokemon/608.png',
  Chandelure: 'https://www.serebii.net/conquest/pokemon/609.png',
  Roggenrola: 'https://www.serebii.net/conquest/pokemon/524.png',
  Boldore: 'https://www.serebii.net/conquest/pokemon/525.png',
  Gigalith: 'https://www.serebii.net/conquest/pokemon/526.png',
  Petilil: 'https://www.serebii.net/conquest/pokemon/548.png',
  Lilligant: 'https://www.serebii.net/conquest/pokemon/549.png',
  Mareep: 'https://www.serebii.net/conquest/pokemon/179.png',
  Flaaffy: 'https://www.serebii.net/conquest/pokemon/180.png',
  Ampharos: 'https://www.serebii.net/conquest/pokemon/181.png',
  Cottonee: 'https://www.serebii.net/conquest/pokemon/546.png',
  Whimsicott: 'https://www.serebii.net/conquest/pokemon/547.png',
  Riolu: 'https://www.serebii.net/conquest/pokemon/447.png',
  Lucario: 'https://www.serebii.net/conquest/pokemon/448.png',
  Chingling: 'https://www.serebii.net/conquest/pokemon/433.png',
  Chimecho: 'https://www.serebii.net/conquest/pokemon/358.png',
  Ekans: 'https://www.serebii.net/conquest/pokemon/023.png',
  Arbok: 'https://www.serebii.net/conquest/pokemon/024.png',
  Pineco: 'https://www.serebii.net/conquest/pokemon/204.png',
  Forretress: 'https://www.serebii.net/conquest/pokemon/205.png',
  Meowth: 'https://www.serebii.net/conquest/pokemon/052.png',
  Persian: 'https://www.serebii.net/conquest/pokemon/053.png',
  Spheal: 'https://www.serebii.net/conquest/pokemon/363.png',
  Sealeo: 'https://www.serebii.net/conquest/pokemon/364.png',
  Walrein: 'https://www.serebii.net/conquest/pokemon/365.png',
  Gothita: 'https://www.serebii.net/conquest/pokemon/574.png',
  Gothorita: 'https://www.serebii.net/conquest/pokemon/575.png',
  Gothitelle: 'https://www.serebii.net/conquest/pokemon/576.png',
  Sandile: 'https://www.serebii.net/conquest/pokemon/551.png',
  Krokorok: 'https://www.serebii.net/conquest/pokemon/552.png',
  Krookodile: 'https://www.serebii.net/conquest/pokemon/553.png',
  Duskull: 'https://www.serebii.net/conquest/pokemon/355.png',
  Dusclops: 'https://www.serebii.net/conquest/pokemon/356.png',
  Dusknoir: 'https://www.serebii.net/conquest/pokemon/477.png',
  Munna: 'https://www.serebii.net/conquest/pokemon/517.png',
  Musharna: 'https://www.serebii.net/conquest/pokemon/518.png',
  Blitzle: 'https://www.serebii.net/conquest/pokemon/522.png',
  Zebstrika: 'https://www.serebii.net/conquest/pokemon/523.png',
  Dratini: 'https://www.serebii.net/conquest/pokemon/147.png',
  Dragonair: 'https://www.serebii.net/conquest/pokemon/148.png',
  Dragonite: 'https://www.serebii.net/conquest/pokemon/149.png',
  Larvitar: 'https://www.serebii.net/conquest/pokemon/246.png',
  Pupitar: 'https://www.serebii.net/conquest/pokemon/247.png',
  Tyranitar: 'https://www.serebii.net/conquest/pokemon/248.png',
  Beldum: 'https://www.serebii.net/conquest/pokemon/374.png',
  Metang: 'https://www.serebii.net/conquest/pokemon/375.png',
  Metagross: 'https://www.serebii.net/conquest/pokemon/376.png',
  Gible: 'https://www.serebii.net/conquest/pokemon/443.png',
  Gabite: 'https://www.serebii.net/conquest/pokemon/444.png',
  Garchomp: 'https://www.serebii.net/conquest/pokemon/445.png',
  Croagunk: 'https://www.serebii.net/conquest/pokemon/453.png',
  Toxicroak: 'https://www.serebii.net/conquest/pokemon/454.png',
  Deino: 'https://www.serebii.net/conquest/pokemon/633.png',
  Zweilous: 'https://www.serebii.net/conquest/pokemon/634.png',
  Hydreigon: 'https://www.serebii.net/conquest/pokemon/635.png',
  Snorunt: 'https://www.serebii.net/conquest/pokemon/361.png',
  Glalie: 'https://www.serebii.net/conquest/pokemon/362.png',
  Froslass: 'https://www.serebii.net/conquest/pokemon/478.png',
  Minccino: 'https://www.serebii.net/conquest/pokemon/572.png',
  Cinccino: 'https://www.serebii.net/conquest/pokemon/573.png',
  Machop: 'https://www.serebii.net/conquest/pokemon/066.png',
  Machoke: 'https://www.serebii.net/conquest/pokemon/067.png',
  Machamp: 'https://www.serebii.net/conquest/pokemon/068.png',
  Timburr: 'https://www.serebii.net/conquest/pokemon/532.png',
  Gurdurr: 'https://www.serebii.net/conquest/pokemon/533.png',
  Conkeldurr: 'https://www.serebii.net/conquest/pokemon/534.png',
  Cubchoo: 'https://www.serebii.net/conquest/pokemon/613.png',
  Beartic: 'https://www.serebii.net/conquest/pokemon/614.png',
  Oshawott: 'https://www.serebii.net/conquest/pokemon/501.png',
  Dewott: 'https://www.serebii.net/conquest/pokemon/502.png',
  Samurott: 'https://www.serebii.net/conquest/pokemon/503.png',
  Charmander: 'https://www.serebii.net/conquest/pokemon/004.png',
  Charmeleon: 'https://www.serebii.net/conquest/pokemon/005.png',
  Charizard: 'https://www.serebii.net/conquest/pokemon/006.png',
  Gastly: 'https://www.serebii.net/conquest/pokemon/092.png',
  Haunter: 'https://www.serebii.net/conquest/pokemon/093.png',
  Gengar: 'https://www.serebii.net/conquest/pokemon/094.png',
  Chimchar: 'https://www.serebii.net/conquest/pokemon/390.png',
  Monferno: 'https://www.serebii.net/conquest/pokemon/391.png',
  Infernape: 'https://www.serebii.net/conquest/pokemon/392.png',
  Snivy: 'https://www.serebii.net/conquest/pokemon/495.png',
  Servine: 'https://www.serebii.net/conquest/pokemon/496.png',
  Serperior: 'https://www.serebii.net/conquest/pokemon/497.png',
  Tepig: 'https://www.serebii.net/conquest/pokemon/498.png',
  Pignite: 'https://www.serebii.net/conquest/pokemon/499.png',
  Emboar: 'https://www.serebii.net/conquest/pokemon/500.png',
  Sewaddle: 'https://www.serebii.net/conquest/pokemon/540.png',
  Swadloon: 'https://www.serebii.net/conquest/pokemon/541.png',
  Leavanny: 'https://www.serebii.net/conquest/pokemon/542.png',
  Abra: 'https://www.serebii.net/conquest/pokemon/063.png',
  Kadabra: 'https://www.serebii.net/conquest/pokemon/064.png',
  Alakazam: 'https://www.serebii.net/conquest/pokemon/065.png',
  Treecko: 'https://www.serebii.net/conquest/pokemon/252.png',
  Grovyle: 'https://www.serebii.net/conquest/pokemon/253.png',
  Sceptile: 'https://www.serebii.net/conquest/pokemon/254.png',
  Piplup: 'https://www.serebii.net/conquest/pokemon/393.png',
  Prinplup: 'https://www.serebii.net/conquest/pokemon/394.png',
  Empoleon: 'https://www.serebii.net/conquest/pokemon/395.png',
  Pansage: 'https://www.serebii.net/conquest/pokemon/511.png',
  Simisage: 'https://www.serebii.net/conquest/pokemon/512.png',
  Pansear: 'https://www.serebii.net/conquest/pokemon/513.png',
  Simisear: 'https://www.serebii.net/conquest/pokemon/514.png',
  Panpour: 'https://www.serebii.net/conquest/pokemon/515.png',
  Simipour: 'https://www.serebii.net/conquest/pokemon/516.png',
  Darumaka: 'https://www.serebii.net/conquest/pokemon/554.png',
  Darmanitan: 'https://www.serebii.net/conquest/pokemon/555.png',
  Axew: 'https://www.serebii.net/conquest/pokemon/610.png',
  Fraxure: 'https://www.serebii.net/conquest/pokemon/611.png',
  Haxorus: 'https://www.serebii.net/conquest/pokemon/612.png',
  Joltik: 'https://www.serebii.net/conquest/pokemon/595.png',
  Galvantula: 'https://www.serebii.net/conquest/pokemon/596.png',
  Aron: 'https://www.serebii.net/conquest/pokemon/304.png',
  Lairon: 'https://www.serebii.net/conquest/pokemon/305.png',
  Aggron: 'https://www.serebii.net/conquest/pokemon/306.png',
  Drilbur: 'https://www.serebii.net/conquest/pokemon/529.png',
  Excadrill: 'https://www.serebii.net/conquest/pokemon/530.png',
  Zorua: 'https://www.serebii.net/conquest/pokemon/570.png',
  Zoroark: 'https://www.serebii.net/conquest/pokemon/571.png',
  Skorupi: 'https://www.serebii.net/conquest/pokemon/451.png',
  Drapion: 'https://www.serebii.net/conquest/pokemon/452.png',
  Pawniard: 'https://www.serebii.net/conquest/pokemon/624.png',
  Bisharp: 'https://www.serebii.net/conquest/pokemon/625.png',
  Rhyhorn: 'https://www.serebii.net/conquest/pokemon/111.png',
  Rhydon: 'https://www.serebii.net/conquest/pokemon/112.png',
  Rhyperior: 'https://www.serebii.net/conquest/pokemon/464.png',
  Shieldon: 'https://www.serebii.net/conquest/pokemon/410.png',
  Bastiodon: 'https://www.serebii.net/conquest/pokemon/411.png',
  Scraggy: 'https://www.serebii.net/conquest/pokemon/559.png',
  Scrafty: 'https://www.serebii.net/conquest/pokemon/560.png',
  Drifloon: 'https://www.serebii.net/conquest/pokemon/425.png',
  Drifblim: 'https://www.serebii.net/conquest/pokemon/426.png',
  Rufflet: 'https://www.serebii.net/conquest/pokemon/627.png',
  Braviary: 'https://www.serebii.net/conquest/pokemon/628.png',
  Anorith: 'https://www.serebii.net/conquest/pokemon/347.png',
  Armaldo: 'https://www.serebii.net/conquest/pokemon/348.png',
  Larvesta: 'https://www.serebii.net/conquest/pokemon/636.png',
  Volcarona: 'https://www.serebii.net/conquest/pokemon/637.png',
  Onix: 'https://www.serebii.net/conquest/pokemon/095.png',
  Steelix: 'https://www.serebii.net/conquest/pokemon/208.png',
  Beedrill: 'https://www.serebii.net/conquest/pokemon/015.png',
  Munchlax: 'https://www.serebii.net/conquest/pokemon/446.png',
  Snorlax: 'https://www.serebii.net/conquest/pokemon/143.png',
  Emolga: 'https://www.serebii.net/conquest/pokemon/587.png',
  Sneasel: 'https://www.serebii.net/conquest/pokemon/215.png',
  Weavile: 'https://www.serebii.net/conquest/pokemon/461.png',
  Misdreavus: 'https://www.serebii.net/conquest/pokemon/200.png',
  Mismagius: 'https://www.serebii.net/conquest/pokemon/429.png',
  Audino: 'https://www.serebii.net/conquest/pokemon/531.png',
  Carnivine: 'https://www.serebii.net/conquest/pokemon/455.png',
  Spiritomb: 'https://www.serebii.net/conquest/pokemon/442.png',
  Scyther: 'https://www.serebii.net/conquest/pokemon/123.png',
  Scizor: 'https://www.serebii.net/conquest/pokemon/212.png',
  Lapras: 'https://www.serebii.net/conquest/pokemon/131.png',
  Terrakion: 'https://www.serebii.net/conquest/pokemon/639.png',
  Articuno: 'https://www.serebii.net/conquest/pokemon/144.png',
  Registeel: 'https://www.serebii.net/conquest/pokemon/379.png',
  Groudon: 'https://www.serebii.net/conquest/pokemon/383.png',
  Dialga: 'https://www.serebii.net/conquest/pokemon/483.png',
  Mewtwo: 'https://www.serebii.net/conquest/pokemon/150.png',
  Reshiram: 'https://www.serebii.net/conquest/pokemon/643.png',
  Zekrom: 'https://www.serebii.net/conquest/pokemon/644.png',
  Arceus: 'https://www.serebii.net/conquest/pokemon/493.png',
  Rayquaza: 'https://www.serebii.net/conquest/pokemon/384.png',
};
var pokeData = {
  Eevee: {
    id: 133,
    name: 'Eevee',
    hp: 220,
    atk: 115,
    def: 119,
    spd: 115,
    total: 569,
  },
  Vaporeon: {
    id: 134,
    name: 'Vaporeon',
    hp: 370,
    atk: 225,
    def: 159,
    spd: 135,
    total: 889,
  },
  Jolteon: {
    id: 135,
    name: 'Jolteon',
    hp: 240,
    atk: 225,
    def: 159,
    spd: 265,
    total: 889,
  },
  Flareon: {
    id: 136,
    name: 'Flareon',
    hp: 240,
    atk: 265,
    def: 175,
    spd: 135,
    total: 815,
  },
  Espeon: {
    id: 196,
    name: 'Espeon',
    hp: 240,
    atk: 265,
    def: 159,
    spd: 225,
    total: 889,
  },
  Umbreon: {
    id: 197,
    name: 'Umbreon',
    hp: 300,
    atk: 135,
    def: 245,
    spd: 135,
    total: 815,
  },
  Leafeon: {
    id: 470,
    name: 'Leafeon',
    hp: 240,
    atk: 225,
    def: 199,
    spd: 195,
    total: 859,
  },
  Glaceon: {
    id: 471,
    name: 'Glaceon',
    hp: 240,
    atk: 265,
    def: 209,
    spd: 135,
    total: 849,
  },
  Ralts: {
    id: 280,
    name: 'Ralts',
    hp: 166,
    atk: 95,
    def: 65,
    spd: 85,
    total: 411,
  },
  Kirlia: {
    id: 281,
    name: 'Kirlia',
    hp: 186,
    atk: 135,
    def: 95,
    spd: 105,
    total: 521,
  },
  Gardevoir: {
    id: 282,
    name: 'Gardevoir',
    hp: 246,
    atk: 255,
    def: 185,
    spd: 165,
    total: 851,
  },
  Gallade: {
    id: 475,
    name: 'Gallade',
    hp: 246,
    atk: 255,
    def: 185,
    spd: 165,
    total: 851,
  },
  Magikarp: {
    id: 129,
    name: 'Magikarp',
    hp: 150,
    atk: 25,
    def: 79,
    spd: 165,
    total: 419,
  },
  Gyarados: {
    id: 130,
    name: 'Gyarados',
    hp: 300,
    atk: 255,
    def: 183,
    spd: 167,
    total: 905,
  },
  Pichu: {
    id: 172,
    name: 'Pichu',
    hp: 150,
    atk: 75,
    def: 55,
    spd: 125,
    total: 405,
  },
  Pikachu: {
    id: 25,
    name: 'Pikachu',
    hp: 180,
    atk: 105,
    def: 75,
    spd: 185,
    total: 545,
  },
  Raichu: {
    id: 26,
    name: 'Raichu',
    hp: 230,
    atk: 185,
    def: 139,
    spd: 205,
    total: 759,
  },
  Wooper: {
    id: 194,
    name: 'Wooper',
    hp: 220,
    atk: 55,
    def: 75,
    spd: 35,
    total: 385,
  },
  Quagsire: {
    id: 195,
    name: 'Quagsire',
    hp: 300,
    atk: 175,
    def: 155,
    spd: 75,
    total: 705,
  },
  Igglybuff: {
    id: 174,
    name: 'Igglybuff',
    hp: 290,
    atk: 65,
    def: 39,
    spd: 35,
    total: 429,
  },
  Jigglypuff: {
    id: 39,
    name: 'Jigglypuff',
    hp: 340,
    atk: 95,
    def: 49,
    spd: 45,
    total: 529,
  },
  Wigglytuff: {
    id: 40,
    name: 'Wigglytuff',
    hp: 390,
    atk: 145,
    def: 99,
    spd: 95,
    total: 729,
  },
  Zubat: {
    id: 41,
    name: 'Zubat',
    hp: 190,
    atk: 95,
    def: 79,
    spd: 115,
    total: 479,
  },
  Golbat: {
    id: 42,
    name: 'Golbat',
    hp: 260,
    atk: 135,
    def: 149,
    spd: 185,
    total: 729,
  },
  Crobat: {
    id: 169,
    name: 'Crobat',
    hp: 280,
    atk: 185,
    def: 165,
    spd: 265,
    total: 895,
  },
  Starly: {
    id: 396,
    name: 'Starly',
    hp: 190,
    atk: 115,
    def: 65,
    spd: 125,
    total: 495,
  },
  Staravia: {
    id: 397,
    name: 'Staravia',
    hp: 220,
    atk: 155,
    def: 95,
    spd: 165,
    total: 635,
  },
  Staraptor: {
    id: 398,
    name: 'Staraptor',
    hp: 280,
    atk: 245,
    def: 125,
    spd: 205,
    total: 855,
  },
  Bidoof: {
    id: 399,
    name: 'Bidoof',
    hp: 228,
    atk: 95,
    def: 85,
    spd: 67,
    total: 475,
  },
  Bibarel: {
    id: 400,
    name: 'Bibarel',
    hp: 268,
    atk: 175,
    def: 125,
    spd: 147,
    total: 715,
  },
  Venipede: {
    id: 543,
    name: 'Venipede',
    hp: 170,
    atk: 95,
    def: 103,
    spd: 119,
    total: 487,
  },
  Whirlipede: {
    id: 544,
    name: 'Whirlipede',
    hp: 190,
    atk: 115,
    def: 183,
    spd: 99,
    total: 587,
  },
  Scolipede: {
    id: 545,
    name: 'Scolipede',
    hp: 230,
    atk: 185,
    def: 163,
    spd: 229,
    total: 807,
  },
  Shinx: {
    id: 403,
    name: 'Shinx',
    hp: 200,
    atk: 85,
    def: 73,
    spd: 95,
    total: 453,
  },
  Luxio: {
    id: 404,
    name: 'Luxio',
    hp: 230,
    atk: 175,
    def: 103,
    spd: 125,
    total: 633,
  },
  Luxray: {
    id: 405,
    name: 'Luxray',
    hp: 270,
    atk: 195,
    def: 163,
    spd: 145,
    total: 773,
  },
  Litwick: {
    id: 607,
    name: 'Litwick',
    hp: 210,
    atk: 135,
    def: 115,
    spd: 45,
    total: 505,
  },
  Lampent: {
    id: 608,
    name: 'Lampent',
    hp: 230,
    atk: 195,
    def: 125,
    spd: 115,
    total: 665,
  },
  Chandelure: {
    id: 609,
    name: 'Chandelure',
    hp: 230,
    atk: 295,
    def: 185,
    spd: 165,
    total: 875,
  },
  Roggenrola: {
    id: 524,
    name: 'Roggenrola',
    hp: 220,
    atk: 155,
    def: 115,
    spd: 35,
    total: 525,
  },
  Boldore: {
    id: 525,
    name: 'Boldore',
    hp: 250,
    atk: 215,
    def: 149,
    spd: 45,
    total: 659,
  },
  Gigalith: {
    id: 526,
    name: 'Gigalith',
    hp: 280,
    atk: 275,
    def: 205,
    spd: 55,
    total: 815,
  },
  Petilil: {
    id: 548,
    name: 'Petilil',
    hp: 200,
    atk: 145,
    def: 105,
    spd: 65,
    total: 515,
  },
  Lilligant: {
    id: 549,
    name: 'Lilligant',
    hp: 250,
    atk: 225,
    def: 155,
    spd: 185,
    total: 815,
  },
  Mareep: {
    id: 179,
    name: 'Mareep',
    hp: 220,
    atk: 135,
    def: 89,
    spd: 75,
    total: 519,
  },
  Flaaffy: {
    id: 180,
    name: 'Flaaffy',
    hp: 250,
    atk: 165,
    def: 119,
    spd: 95,
    total: 629,
  },
  Ampharos: {
    id: 181,
    name: 'Ampharos',
    hp: 290,
    atk: 235,
    def: 169,
    spd: 115,
    total: 809,
  },
  Cottonee: {
    id: 546,
    name: 'Cottonee',
    hp: 190,
    atk: 79,
    def: 115,
    spd: 137,
    total: 521,
  },
  Whimsicott: {
    id: 547,
    name: 'Whimsicott',
    hp: 230,
    atk: 159,
    def: 165,
    spd: 237,
    total: 791,
  },
  Riolu: {
    id: 447,
    name: 'Riolu',
    hp: 190,
    atk: 145,
    def: 85,
    spd: 125,
    total: 545,
  },
  Lucario: {
    id: 448,
    name: 'Lucario',
    hp: 250,
    atk: 235,
    def: 145,
    spd: 185,
    total: 815,
  },
  Chingling: {
    id: 433,
    name: 'Chingling',
    hp: 200,
    atk: 135,
    def: 105,
    spd: 95,
    total: 535,
  },
  Chimecho: {
    id: 358,
    name: 'Chimecho',
    hp: 240,
    atk: 195,
    def: 155,
    spd: 135,
    total: 725,
  },
  Ekans: {
    id: 23,
    name: 'Ekans',
    hp: 180,
    atk: 125,
    def: 103,
    spd: 115,
    total: 523,
  },
  Arbok: {
    id: 24,
    name: 'Arbok',
    hp: 230,
    atk: 175,
    def: 153,
    spd: 165,
    total: 723,
  },
  Pineco: {
    id: 204,
    name: 'Pineco',
    hp: 210,
    atk: 135,
    def: 129,
    spd: 35,
    total: 509,
  },
  Forretress: {
    id: 205,
    name: 'Forretress',
    hp: 260,
    atk: 185,
    def: 205,
    spd: 85,
    total: 735,
  },
  Meowth: {
    id: 52,
    name: 'Meowth',
    hp: 190,
    atk: 95,
    def: 79,
    spd: 185,
    total: 549,
  },
  Persian: {
    id: 53,
    name: 'Persian',
    hp: 240,
    atk: 145,
    def: 129,
    spd: 235,
    total: 749,
  },
  Spheal: {
    id: 363,
    name: 'Spheal',
    hp: 250,
    atk: 115,
    def: 105,
    spd: 55,
    total: 525,
  },
  Sealeo: {
    id: 364,
    name: 'Sealeo',
    hp: 290,
    atk: 155,
    def: 145,
    spd: 95,
    total: 685,
  },
  Walrein: {
    id: 365,
    name: 'Walrein',
    hp: 330,
    atk: 195,
    def: 185,
    spd: 135,
    total: 845,
  },
  Gothita: {
    id: 574,
    name: 'Gothita',
    hp: 200,
    atk: 115,
    def: 119,
    spd: 95,
    total: 529,
  },
  Gothorita: {
    id: 575,
    name: 'Gothorita',
    hp: 230,
    atk: 155,
    def: 159,
    spd: 115,
    total: 659,
  },
  Gothitelle: {
    id: 576,
    name: 'Gothitelle',
    hp: 250,
    atk: 195,
    def: 209,
    spd: 135,
    total: 789,
  },
  Sandile: {
    id: 551,
    name: 'Sandile',
    hp: 210,
    atk: 149,
    def: 75,
    spd: 135,
    total: 569,
  },
  Krokorok: {
    id: 552,
    name: 'Krokorok',
    hp: 230,
    atk: 169,
    def: 95,
    spd: 153,
    total: 647,
  },
  Krookodile: {
    id: 553,
    name: 'Krookodile',
    hp: 300,
    atk: 239,
    def: 145,
    spd: 189,
    total: 873,
  },
  Duskull: {
    id: 355,
    name: 'Duskull',
    hp: 150,
    atk: 85,
    def: 185,
    spd: 55,
    total: 475,
  },
  Dusclops: {
    id: 356,
    name: 'Dusclops',
    hp: 190,
    atk: 145,
    def: 265,
    spd: 55,
    total: 655,
  },
  Dusknoir: {
    id: 477,
    name: 'Dusknoir',
    hp: 200,
    atk: 205,
    def: 275,
    spd: 95,
    total: 775,
  },
  Munna: {
    id: 517,
    name: 'Munna',
    hp: 262,
    atk: 139,
    def: 105,
    spd: 53,
    total: 559,
  },
  Musharna: {
    id: 518,
    name: 'Musharna',
    hp: 342,
    atk: 219,
    def: 185,
    spd: 63,
    total: 809,
  },
  Blitzle: {
    id: 522,
    name: 'Blitzle',
    hp: 200,
    atk: 125,
    def: 69,
    spd: 157,
    total: 551,
  },
  Zebstrika: {
    id: 523,
    name: 'Zebstrika',
    hp: 260,
    atk: 165,
    def: 131,
    spd: 237,
    total: 793,
  },
  Dratini: {
    id: 147,
    name: 'Dratini',
    hp: 192,
    atk: 105,
    def: 99,
    spd: 105,
    total: 501,
  },
  Dragonair: {
    id: 148,
    name: 'Dragonair',
    hp: 232,
    atk: 173,
    def: 139,
    spd: 145,
    total: 689,
  },
  Dragonite: {
    id: 149,
    name: 'Dragonite',
    hp: 292,
    atk: 273,
    def: 199,
    spd: 165,
    total: 929,
  },
  Larvitar: {
    id: 246,
    name: 'Larvitar',
    hp: 210,
    atk: 133,
    def: 105,
    spd: 87,
    total: 535,
  },
  Pupitar: {
    id: 247,
    name: 'Pupitar',
    hp: 250,
    atk: 173,
    def: 145,
    spd: 107,
    total: 675,
  },
  Tyranitar: {
    id: 248,
    name: 'Tyranitar',
    hp: 310,
    atk: 273,
    def: 215,
    spd: 127,
    total: 925,
  },
  Beldum: {
    id: 374,
    name: 'Beldum',
    hp: 190,
    atk: 115,
    def: 145,
    spd: 65,
    total: 515,
  },
  Metang: {
    id: 375,
    name: 'Metang',
    hp: 230,
    atk: 155,
    def: 185,
    spd: 105,
    total: 675,
  },
  Metagross: {
    id: 376,
    name: 'Metagross',
    hp: 270,
    atk: 275,
    def: 225,
    spd: 145,
    total: 915,
  },
  Gible: {
    id: 443,
    name: 'Gible',
    hp: 226,
    atk: 85,
    def: 95,
    spd: 89,
    total: 495,
  },
  Gabite: {
    id: 444,
    name: 'Gabite',
    hp: 246,
    atk: 185,
    def: 125,
    spd: 169,
    total: 725,
  },
  Garchomp: {
    id: 445,
    name: 'Garchomp',
    hp: 326,
    atk: 265,
    def: 185,
    spd: 209,
    total: 985,
  },
  Croagunk: {
    id: 453,
    name: 'Croagunk',
    hp: 206,
    atk: 127,
    def: 85,
    spd: 105,
    total: 523,
  },
  Toxicroak: {
    id: 454,
    name: 'Toxicroak',
    hp: 276,
    atk: 177,
    def: 135,
    spd: 175,
    total: 763,
  },
  Deino: {
    id: 633,
    name: 'Deino',
    hp: 214,
    atk: 95,
    def: 105,
    spd: 81,
    total: 495,
  },
  Zweilous: {
    id: 634,
    name: 'Zweilous',
    hp: 254,
    atk: 175,
    def: 145,
    spd: 121,
    total: 695,
  },
  Hydreigon: {
    id: 635,
    name: 'Hydreigon',
    hp: 294,
    atk: 255,
    def: 185,
    spd: 201,
    total: 935,
  },
  Snorunt: {
    id: 361,
    name: 'Snorunt',
    hp: 210,
    atk: 105,
    def: 105,
    spd: 105,
    total: 525,
  },
  Glalie: {
    id: 362,
    name: 'Glalie',
    hp: 270,
    atk: 165,
    def: 165,
    spd: 165,
    total: 765,
  },
  Froslass: {
    id: 478,
    name: 'Froslass',
    hp: 250,
    atk: 165,
    def: 145,
    spd: 225,
    total: 785,
  },
  Minccino: {
    id: 572,
    name: 'Minccino',
    hp: 220,
    atk: 105,
    def: 85,
    spd: 155,
    total: 565,
  },
  Cinccino: {
    id: 573,
    name: 'Cinccino',
    hp: 260,
    atk: 195,
    def: 125,
    spd: 235,
    total: 815,
  },
  Machop: {
    id: 66,
    name: 'Machop',
    hp: 250,
    atk: 165,
    def: 89,
    spd: 75,
    total: 579,
  },
  Machoke: {
    id: 67,
    name: 'Machoke',
    hp: 270,
    atk: 205,
    def: 135,
    spd: 95,
    total: 705,
  },
  Machamp: {
    id: 68,
    name: 'Machamp',
    hp: 290,
    atk: 265,
    def: 169,
    spd: 115,
    total: 839,
  },
  Timburr: {
    id: 532,
    name: 'Timburr',
    hp: 260,
    atk: 165,
    def: 95,
    spd: 75,
    total: 595,
  },
  Gurdurr: {
    id: 533,
    name: 'Gurdurr',
    hp: 280,
    atk: 215,
    def: 139,
    spd: 85,
    total: 719,
  },
  Conkeldurr: {
    id: 534,
    name: 'Conkeldurr',
    hp: 320,
    atk: 285,
    def: 165,
    spd: 95,
    total: 865,
  },
  Cubchoo: {
    id: 613,
    name: 'Cubchoo',
    hp: 220,
    atk: 125,
    def: 85,
    spd: 85,
    total: 515,
  },
  Beartic: {
    id: 614,
    name: 'Beartic',
    hp: 300,
    atk: 225,
    def: 165,
    spd: 105,
    total: 795,
  },
  Oshawott: {
    id: 501,
    name: 'Oshawott',
    hp: 220,
    atk: 131,
    def: 95,
    spd: 95,
    total: 541,
  },
  Dewott: {
    id: 502,
    name: 'Dewott',
    hp: 260,
    atk: 171,
    def: 125,
    spd: 125,
    total: 681,
  },
  Samurott: {
    id: 503,
    name: 'Samurott',
    hp: 300,
    atk: 205,
    def: 159,
    spd: 145,
    total: 809,
  },
  Charmander: {
    id: 4,
    name: 'Charmander',
    hp: 188,
    atk: 125,
    def: 97,
    spd: 135,
    total: 545,
  },
  Charmeleon: {
    id: 5,
    name: 'Charmeleon',
    hp: 226,
    atk: 133,
    def: 127,
    spd: 165,
    total: 651,
  },
  Charizard: {
    id: 6,
    name: 'Charizard',
    hp: 266,
    atk: 223,
    def: 167,
    spd: 205,
    total: 861,
  },
  Gastly: {
    id: 92,
    name: 'Gastly',
    hp: 170,
    atk: 205,
    def: 69,
    spd: 165,
    total: 609,
  },
  Haunter: {
    id: 93,
    name: 'Haunter',
    hp: 200,
    atk: 235,
    def: 105,
    spd: 195,
    total: 735,
  },
  Gengar: {
    id: 94,
    name: 'Gengar',
    hp: 230,
    atk: 265,
    def: 139,
    spd: 225,
    total: 859,
  },
  Chimchar: {
    id: 390,
    name: 'Chimchar',
    hp: 198,
    atk: 121,
    def: 93,
    spd: 127,
    total: 539,
  },
  Monferno: {
    id: 391,
    name: 'Monferno',
    hp: 238,
    atk: 161,
    def: 109,
    spd: 167,
    total: 675,
  },
  Infernape: {
    id: 392,
    name: 'Infernape',
    hp: 262,
    atk: 213,
    def: 147,
    spd: 221,
    total: 843,
  },
  Snivy: {
    id: 495,
    name: 'Snivy',
    hp: 200,
    atk: 95,
    def: 115,
    spd: 131,
    total: 541,
  },
  Servine: {
    id: 496,
    name: 'Servine',
    hp: 230,
    atk: 125,
    def: 155,
    spd: 171,
    total: 681,
  },
  Serperior: {
    id: 497,
    name: 'Serperior',
    hp: 260,
    atk: 155,
    def: 195,
    spd: 231,
    total: 841,
  },
  Tepig: {
    id: 498,
    name: 'Tepig',
    hp: 240,
    atk: 95,
    def: 95,
    spd: 95,
    total: 525,
  },
  Pignite: {
    id: 499,
    name: 'Pignite',
    hp: 290,
    atk: 191,
    def: 115,
    spd: 115,
    total: 711,
  },
  Emboar: {
    id: 500,
    name: 'Emboar',
    hp: 330,
    atk: 205,
    def: 135,
    spd: 135,
    total: 805,
  },
  Sewaddle: {
    id: 540,
    name: 'Sewaddle',
    hp: 200,
    atk: 85,
    def: 135,
    spd: 89,
    total: 509,
  },
  Swadloon: {
    id: 541,
    name: 'Swadloon',
    hp: 220,
    atk: 105,
    def: 175,
    spd: 89,
    total: 589,
  },
  Leavanny: {
    id: 542,
    name: 'Leavanny',
    hp: 260,
    atk: 145,
    def: 155,
    spd: 189,
    total: 749,
  },
  Abra: {
    id: 63,
    name: 'Abra',
    hp: 160,
    atk: 215,
    def: 75,
    spd: 185,
    total: 635,
  },
  Kadabra: {
    id: 64,
    name: 'Kadabra',
    hp: 190,
    atk: 245,
    def: 105,
    spd: 215,
    total: 755,
  },
  Alakazam: {
    id: 65,
    name: 'Alakazam',
    hp: 220,
    atk: 275,
    def: 135,
    spd: 245,
    total: 875,
  },
  Treecko: {
    id: 252,
    name: 'Treecko',
    hp: 190,
    atk: 135,
    def: 95,
    spd: 145,
    total: 565,
  },
  Grovyle: {
    id: 253,
    name: 'Grovyle',
    hp: 210,
    atk: 175,
    def: 115,
    spd: 195,
    total: 695,
  },
  Sceptile: {
    id: 254,
    name: 'Sceptile',
    hp: 250,
    atk: 215,
    def: 155,
    spd: 245,
    total: 865,
  },
  Piplup: {
    id: 393,
    name: 'Piplup',
    hp: 216,
    atk: 127,
    def: 113,
    spd: 85,
    total: 541,
  },
  Prinplup: {
    id: 394,
    name: 'Prinplup',
    hp: 238,
    atk: 167,
    def: 149,
    spd: 105,
    total: 659,
  },
  Empoleon: {
    id: 395,
    name: 'Empoleon',
    hp: 278,
    atk: 227,
    def: 193,
    spd: 125,
    total: 823,
  },
  Pansage: {
    id: 511,
    name: 'Pansage',
    hp: 210,
    atk: 111,
    def: 101,
    spd: 133,
    total: 555,
  },
  Simisage: {
    id: 512,
    name: 'Simisage',
    hp: 260,
    atk: 201,
    def: 131,
    spd: 207,
    total: 799,
  },
  Pansear: {
    id: 513,
    name: 'Pansear',
    hp: 210,
    atk: 111,
    def: 101,
    spd: 133,
    total: 555,
  },
  Simisear: {
    id: 514,
    name: 'Simisear',
    hp: 260,
    atk: 201,
    def: 131,
    spd: 207,
    total: 799,
  },
  Panpour: {
    id: 515,
    name: 'Panpour',
    hp: 210,
    atk: 111,
    def: 101,
    spd: 133,
    total: 555,
  },
  Simipour: {
    id: 516,
    name: 'Simipour',
    hp: 260,
    atk: 201,
    def: 131,
    spd: 207,
    total: 799,
  },
  Darumaka: {
    id: 554,
    name: 'Darumaka',
    hp: 250,
    atk: 185,
    def: 95,
    spd: 105,
    total: 635,
  },
  Darmanitan: {
    id: 555,
    name: 'Darmanitan',
    hp: 320,
    atk: 285,
    def: 115,
    spd: 195,
    total: 915,
  },
  Axew: {
    id: 610,
    name: 'Axew',
    hp: 202,
    atk: 179,
    def: 105,
    spd: 119,
    total: 605,
  },
  Fraxure: {
    id: 611,
    name: 'Fraxure',
    hp: 242,
    atk: 239,
    def: 125,
    spd: 139,
    total: 745,
  },
  Haxorus: {
    id: 612,
    name: 'Haxorus',
    hp: 262,
    atk: 299,
    def: 165,
    spd: 199,
    total: 925,
  },
  Joltik: {
    id: 595,
    name: 'Joltik',
    hp: 210,
    atk: 119,
    def: 105,
    spd: 135,
    total: 569,
  },
  Galvantula: {
    id: 596,
    name: 'Galvantula',
    hp: 250,
    atk: 199,
    def: 125,
    spd: 221,
    total: 795,
  },
  Aron: {
    id: 304,
    name: 'Aron',
    hp: 210,
    atk: 145,
    def: 145,
    spd: 65,
    total: 565,
  },
  Lairon: {
    id: 305,
    name: 'Lairon',
    hp: 230,
    atk: 185,
    def: 195,
    spd: 85,
    total: 695,
  },
  Aggron: {
    id: 306,
    name: 'Aggron',
    hp: 250,
    atk: 225,
    def: 245,
    spd: 105,
    total: 825,
  },
  Drilbur: {
    id: 529,
    name: 'Drilbur',
    hp: 230,
    atk: 175,
    def: 89,
    spd: 141,
    total: 635,
  },
  Excadrill: {
    id: 530,
    name: 'Excadrill',
    hp: 330,
    atk: 275,
    def: 129,
    spd: 181,
    total: 915,
  },
  Zorua: {
    id: 570,
    name: 'Zorua',
    hp: 190,
    atk: 165,
    def: 85,
    spd: 135,
    total: 575,
  },
  Zoroark: {
    id: 571,
    name: 'Zoroark',
    hp: 230,
    atk: 245,
    def: 125,
    spd: 215,
    total: 815,
  },
  Skorupi: {
    id: 451,
    name: 'Skorupi',
    hp: 190,
    atk: 105,
    def: 149,
    spd: 135,
    total: 579,
  },
  Drapion: {
    id: 452,
    name: 'Drapion',
    hp: 250,
    atk: 185,
    def: 189,
    spd: 195,
    total: 819,
  },
  Pawniard: {
    id: 624,
    name: 'Pawniard',
    hp: 200,
    atk: 175,
    def: 115,
    spd: 125,
    total: 615,
  },
  Bisharp: {
    id: 625,
    name: 'Bisharp',
    hp: 240,
    atk: 255,
    def: 175,
    spd: 145,
    total: 815,
  },
  Rhyhorn: {
    id: 111,
    name: 'Rhyhorn',
    hp: 270,
    atk: 175,
    def: 129,
    spd: 55,
    total: 629,
  },
  Rhydon: {
    id: 112,
    name: 'Rhydon',
    hp: 320,
    atk: 265,
    def: 169,
    spd: 85,
    total: 839,
  },
  Rhyperior: {
    id: 464,
    name: 'Rhyperior',
    hp: 340,
    atk: 285,
    def: 189,
    spd: 85,
    total: 899,
  },
  Shieldon: {
    id: 410,
    name: 'Shieldon',
    hp: 170,
    atk: 89,
    def: 211,
    spd: 65,
    total: 535,
  },
  Bastiodon: {
    id: 411,
    name: 'Bastiodon',
    hp: 230,
    atk: 109,
    def: 311,
    spd: 65,
    total: 715,
  },
  Scraggy: {
    id: 559,
    name: 'Scraggy',
    hp: 210,
    atk: 155,
    def: 145,
    spd: 101,
    total: 611,
  },
  Scrafty: {
    id: 560,
    name: 'Scrafty',
    hp: 240,
    atk: 185,
    def: 235,
    spd: 121,
    total: 781,
  },
  Drifloon: {
    id: 425,
    name: 'Drifloon',
    hp: 290,
    atk: 125,
    def: 83,
    spd: 145,
    total: 643,
  },
  Drifblim: {
    id: 426,
    name: 'Drifblim',
    hp: 410,
    atk: 165,
    def: 103,
    spd: 165,
    total: 843,
  },
  Rufflet: {
    id: 627,
    name: 'Rufflet',
    hp: 250,
    atk: 171,
    def: 105,
    spd: 125,
    total: 651,
  },
  Braviary: {
    id: 628,
    name: 'Braviary',
    hp: 310,
    atk: 251,
    def: 155,
    spd: 165,
    total: 881,
  },
  Anorith: {
    id: 347,
    name: 'Anorith',
    hp: 200,
    atk: 195,
    def: 105,
    spd: 155,
    total: 655,
  },
  Armaldo: {
    id: 348,
    name: 'Armaldo',
    hp: 260,
    atk: 255,
    def: 185,
    spd: 95,
    total: 795,
  },
  Larvesta: {
    id: 636,
    name: 'Larvesta',
    hp: 220,
    atk: 175,
    def: 115,
    spd: 125,
    total: 635,
  },
  Volcarona: {
    id: 637,
    name: 'Volcarona',
    hp: 280,
    atk: 275,
    def: 175,
    spd: 205,
    total: 935,
  },
  Onix: {
    id: 95,
    name: 'Onix',
    hp: 180,
    atk: 95,
    def: 209,
    spd: 145,
    total: 629,
  },
  Steelix: {
    id: 208,
    name: 'Steelix',
    hp: 260,
    atk: 175,
    def: 269,
    spd: 65,
    total: 769,
  },
  Beedrill: {
    id: 15,
    name: 'Beedrill',
    hp: 240,
    atk: 165,
    def: 125,
    spd: 155,
    total: 685,
  },
  Munchlax: {
    id: 446,
    name: 'Munchlax',
    hp: 380,
    atk: 175,
    def: 129,
    spd: 15,
    total: 699,
  },
  Snorlax: {
    id: 143,
    name: 'Snorlax',
    hp: 430,
    atk: 225,
    def: 179,
    spd: 65,
    total: 899,
  },
  Emolga: {
    id: 587,
    name: 'Emolga',
    hp: 220,
    atk: 155,
    def: 125,
    spd: 211,
    total: 711,
  },
  Sneasel: {
    id: 215,
    name: 'Sneasel',
    hp: 220,
    atk: 195,
    def: 135,
    spd: 235,
    total: 785,
  },
  Weavile: {
    id: 461,
    name: 'Weavile',
    hp: 250,
    atk: 245,
    def: 155,
    spd: 255,
    total: 905,
  },
  Misdreavus: {
    id: 200,
    name: 'Misdreavus',
    hp: 230,
    atk: 175,
    def: 149,
    spd: 175,
    total: 729,
  },
  Mismagius: {
    id: 429,
    name: 'Mismagius',
    hp: 230,
    atk: 215,
    def: 169,
    spd: 215,
    total: 829,
  },
  Audino: {
    id: 531,
    name: 'Audino',
    hp: 316,
    atk: 125,
    def: 177,
    spd: 105,
    total: 723,
  },
  Carnivine: {
    id: 455,
    name: 'Carnivine',
    hp: 258,
    atk: 205,
    def: 149,
    spd: 97,
    total: 709,
  },
  Spiritomb: {
    id: 442,
    name: 'Spiritomb',
    hp: 210,
    atk: 189,
    def: 221,
    spd: 75,
    total: 695,
  },
  Scyther: {
    id: 123,
    name: 'Scyther',
    hp: 250,
    atk: 225,
    def: 165,
    spd: 215,
    total: 855,
  },
  Scizor: {
    id: 212,
    name: 'Scizor',
    hp: 250,
    atk: 265,
    def: 185,
    spd: 135,
    total: 835,
  },
  Lapras: {
    id: 131,
    name: 'Lapras',
    hp: 370,
    atk: 175,
    def: 179,
    spd: 125,
    total: 849,
  },
  Terrakion: {
    id: 639,
    name: 'Terrakion',
    hp: 292,
    atk: 263,
    def: 185,
    spd: 221,
    total: 961,
  },
  Articuno: {
    id: 144,
    name: 'Articuno',
    hp: 290,
    atk: 195,
    def: 229,
    spd: 175,
    total: 889,
  },
  Registeel: {
    id: 379,
    name: 'Registeel',
    hp: 270,
    atk: 155,
    def: 305,
    spd: 105,
    total: 835,
  },
  Groudon: {
    id: 383,
    name: 'Groudon',
    hp: 310,
    atk: 305,
    def: 235,
    spd: 185,
    total: 1035,
  },
  Dialga: {
    id: 483,
    name: 'Dialga',
    hp: 310,
    atk: 305,
    def: 225,
    spd: 185,
    total: 1025,
  },
  Mewtwo: {
    id: 150,
    name: 'Mewtwo',
    hp: 322,
    atk: 313,
    def: 185,
    spd: 265,
    total: 1085,
  },
  Reshiram: {
    id: 643,
    name: 'Reshiram',
    hp: 310,
    atk: 305,
    def: 225,
    spd: 185,
    total: 1025,
  },
  Zekrom: {
    id: 644,
    name: 'Zekrom',
    hp: 310,
    atk: 305,
    def: 225,
    spd: 185,
    total: 1025,
  },
  Arceus: {
    id: 493,
    name: 'Arceus',
    hp: 350,
    atk: 245,
    def: 245,
    spd: 245,
    total: 1085,
  },
  Rayquaza: {
    id: 384,
    name: 'Rayquaza',
    hp: 325,
    atk: 310,
    def: 190,
    spd: 200,
    total: 1025,
  },
};
