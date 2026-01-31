/*

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

// Get pokemons data
pks = {};
$('.dex-pokemon-moves>tbody>tr').each(function () {
  const tds = $(this).children();
  pks[$(tds[1]).text()] = [$(tds[5]).text(), $(tds[6]).text(), $(tds[7]).text(), $(tds[8]).text(), $(tds[9]).text()]
});
// Set pokemon data
$('#myTable>tbody>tr').each(function () {
  const tds = $(this).children();
  nm = $(tds[2]).text().trim();
  pk = pks[nm] || ['0x', '0', '0', '0', '0'];
  
  $(tds[9]).text(pk[0]);
  $(tds[10]).text(pk[1]);
  $(tds[11]).text(pk[2]);
  $(tds[12]).text(pk[3]);
  $(tds[13]).text(pk[4]);
});

// Get Hero list 1
a = [];
$('#xx tbody tr').find('td:eq(1)').each((i, v) => {
  a.push($(v).text());
})
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
console.log(b.filter(v => !a.includes(v)).sort().join(", "))
console.log(a.filter(v => !b.includes(v)).sort().join(", "))

// Hero images
a = {};
$('#xx tbody tr').each((i, v) => {
  a[v.find('td:eq(1)').text()] = 'https://veekun.com' + v.find('img').attr('src')
})

// Pokemons skills
pks = {};
getskill = (nm) => {
  $.get(`https://veekun.com/dex/conquest/pokemon/${nm}`, function(data) {
    img = $(data).find('dd.dex-cpm-range img').attr('src');
    pks[nm] = 'https://veekun.com' + img;
  });
}
$('.dex-pokemon-moves>tbody>tr').each(function () {
  const tds = $(this).children();
  getskill($(tds[1]).text());
});

*/

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
Zweilous		JzqmWNCZZR`;

// Perfect Link Data
const plink1 = `
Player ♂ - Eevee//Vaporeon//Jolteon//Flareon//Espeon
Player ♂ - //Umbreon//Leafeon//Glaceon///Arceus
Oichi - Jigglypuff//Wigglytuff (not Igglybuff)
Aya - Snorunt//Froslass(not Glalie)
Ginchiyo - Luxio//Luxray (not Shinx)
Gracia - Gothorita//Gothitelle (not Gothita)
Hanbei - Pikachu//Raichu (not Pichu)
Hanzō - Haunter//Gengar (not Gastly)
Hideyoshi - Monferno//Infernape///Reshiram (not Chimchar)
Ieyasu - Aggron//Registeel (not Aron/Lairon)
Ina - Prinplup//Empoleon (not Piplup)
Kai - Darumaka//Darmanitan
Kanbei - Lampent//Chandelure (not Litwick)
Kanetsugu - Kadabra//Alakazam (not Abra)
Keiji - Bastiodon//Terrakion (not Shieldon)
Kenshin - Gallade//Mewtwo (not Ralts/Kirlia/Gardevoir)
Kotarō - Zorua//Zoroark
Kunoichi - Sneasel//Weavile
Magoichi - Grovyle//Sceptile (not Treecko)
Masamune - Rufflet//Braviary
Masanori - Krokorok//Krookodile (not Sandile)
Mitsuhide - Lapras//Articuno
Mitsunari - Pawniard//Bisharp
Motochika - Dewott//Samurott (not Oshawott)
Motonari - Servine//Serperior (not Snivy)
Muneshige - Staravia//Staraptor (not Starly)
Nene - Golbat//Crobat (not Zubat)
Nō - Misdreavus//Mismagius
Nobunaga - Hydreigon//Zekrom//Rayquaza (not Deino/Zwielous)
Okuni - Larvesta//Volcarona
Shingen - Rhyperior//Groudon (not Rhyhorn/Rhydon)
Ranmaru - Riolu//Lucario
Tadakatsu - Metagross//Dialga (not Beldum/Metang)
Ujiyasu - Boldore//Gigalith (not Roggenrola)
Yoshihiro - Gurdurr//Conkeldurr (not Timburr)
Yoshimoto - Pineco//Forretress
Yukimura - Charmeleon//Charizard (not Charmander)`
  .trim()
  .split('\n')
  .map((v) => v.trim());

const plink2 = `
Akizane - Pichu/Pikachu/Raichu
Asahi - Drilbur/Excadrill
Bokuden - Shieldon/Bastiodon
Bokuzen - Gastly/Haunter/Gengar
Chacha - Minccino/Cinccino
Chikamasa - Wooper/Quagsire
Chikayasu - Oshawott/Dewott/Samurott
Chōan - Bidoof/Bibarel
Dōsan - Ekans/Arbok
Dōsetsu - Shinx/Luxio
Ekei - Carnivine
Fujitaka - Lapras
Gen'an - Onix/Steelix
Genba - Scraggy/Scrafty
Gō - Piplup/Prinplup/Empoleon
Gotoku - Deino/Zweilous/Hydreigon
Hana - Munna/Musharna
Haruyuki - Rufflet/Braviary
Hatsu - Igglybuff/Jigglypuff/Wigglytuff
Hideaki - Venipede/Whirlipede/Scolipede
Hidetada - Pawniard/Bisharp
Hideyori - Chimchar/Monferno/Infernape
Hisahide - Deino/Zweilous/Hydreigon
Hiroko - Snorunt/Glalie
Hisaaki - Scraggy/Scrafty
Ise - Gothita/Gothorita/Gothitelle
Jinpachi - Misdreavus/Mismagius
Jūbei - Ralts/Kirlia/Gallade
Jūzō - Pansear/Simisear
Kagekatsu - Ralts/Kirlia/Gardevoir
Kagetsuna - Dratini/Dragonair/Dragonite
Kame - Pineco/Forretress
Kanemori - Croagunk/Toxicroak
Kashinkoji - Skorupi/Drapion
Katsuyori - Larvitar/Pupitar/Tyranitar
Kazumasu - Axew/Fraxure/Haxorus
Kei - Drilbur/Excadrill
Kitsuno - Dratini/Dragonair/Dragonite
Kiyo - Blitzle/Zebstrika
Koroku - Timburr/Gurdurr
Maa - Litwick/Lampent/Chandelure
Madoka - Roggenrola/Boldore/Gigalith
Masakage - Charmander/Charmeleon/Charizard
Masanobu - Litwick
Masatsuna - Beedrill
Masatoshi - Machop/Machoke/Machamp
Masatoyo - Rhyhorn/Rhydon
Masayuki - Larvesta/Volcarona
Morichika - Oshawott/Dewott/Samurott
Morikiyo - Croagunk/Toxicroak
Morinari - Duskull/Dusclops/Dusknoir
Motoharu - Axew/Fraxure/Haxorus
Motozane - Joltik/Galvantula
Munenori - Scyther/Scizor
Munetoki - Rufflet/Braviary
Munezane - Starly/Staravia/Staraptor
Murashige - Treecko/Grovyle/Sceptile
Nagahide - Dratini/Dragonair/Dragonite
Nagayasu - Darumaka/Darmanitan
Nagayoshi - Riolu/Lucario
Naka - Drilbur/Excadrill
Naoie - Deino/Zweilous/Hydreigon
Naomasa - Tepig/Pignite/Emboar
Nobuchika - Magikarp/Gyarados
Norishige - Mareep/Flaaffy/Ampharos
Omi - Beedrill
Rikyū - Pansage/Simisage
Sadamitsu - Munna/Musharna
Sadatoshi - Cottonee/Whimsicott
Saizō - Gastly/Haunter/Gengar
Sandayū - Zubat/Golbat
Saneyori - Chingling/Chimecho
Seikurō - Skorupi/Drapion
Sekisō - Joltik/Galvantula
Sessai - Larvesta/Volcarona
Sen - Chingling/Chimecho
Sena - Beedrill
Shigemoto - Cubchoo/Beartic
Shigezane - Scyther/Scizor
Shimoyama - Scraggy/Scrafty
Shizuka - Rhyhorn/Rhydon
Shōun - Mareep/Flaaffy/Ampharos
Sōrin - Pichu/Pikachu/Raichu
Sōun - Larvitar/Pupitar/Tyranitar
Tadamoto - Croagunk/Toxicroak
Tadaoki - Gothita/Gothorita/Gothitelle
Tadatsune - Machop/Machoke/Machamp
Tadatsugu - Aron/Lairon/Aggron
Tadasumi - Blitzle/Zebstrika
Takahisa - Timburr/Gurdurr
Takahiro - Abra/Kadabra/Alakazam
Takakage - Treecko/Grovyle/Sceptile
Takamoto - Snivy/Servine/Serperior
Takanobu - Munchlax/Snorlax
Takatane - Shinx/Luxio
Takatora - Litwick/Lampent/Chandelure
Takayori - Panpour/Simipour
Takeyoshi - Magikarp/Gyarados
Tatsuko - Tepig/Pignite/Emboar
Terumoto - Petilil/Lilligant
Tokitaka - Timburr/Gurdurr
Toku - Aron/Lairon/Aggron
Tomonobu - Ralts/Kirlia/Gardevoir
Tsunamoto - Snorunt/Glalie
Tsunehisa - Meowth/Persian
Ujichika - Sewaddle/Swadloon
Ujihiro - Sewaddle/Swadloon
Ujikuni - Anorith/Armaldo
Ujinao - Anorith/Armaldo
Ujisato - Snivy/Servine/Serperior
Ujiteru - Shieldon/Bastiodon
Ujizane - Pineco/Forretress
Ume - Drilbur/Excadrill
Yasumasa - Dratini/Dragonair/Dragonite
Yasunaga - Venipede/Whirlipede/Scolipede
Yasutomo - Joltik/Galvantula
Yatarō - Treecko/Grovyle/Sceptile
Yazaemon - Ekans/Arbok
Yoshi - Zubat/Golbat
Yoshiaki - Carnivine
Yoshitatsu - Gastly/Haunter/Gengar
Yoshikiyo - Cubchoo/Beartic
Yukimasa - Spheal/Sealeo/Walrein
Yukitaka - Sandile/Krokorok/Krookodile`
  .trim()
  .split('\n')
  .map((v) => v.trim());

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

const SkillImgs = {
  Kadabra:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  Luxray:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-3-ahead.png',
  Emolga:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead-switch-back.png',
  Snorlax:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead-advance-1.png',
  Munchlax:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Misdreavus:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead-knockback.png',
  Audino:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Mismagius:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  Pikachu:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/row-2-ahead.png',
  Scizor:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/x-shape.png',
  Bidoof:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Bibarel:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Weavile: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/row.png',
  Venipede:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  Luxio:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/ring-adjacent.png',
  Shinx:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Staraptor:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/chevron-advance-1.png',
  Chandelure:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/ring-2-ahead.png',
  Whirlipede:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/row.png',
  Lampent:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/x-shape-2-ahead.png',
  Litwick:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  Scolipede:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/row-2-ahead.png',
  Pichu:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  Mareep:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  Gyarados:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/row-knockback.png',
  Flaaffy:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/ring-adjacent.png',
  Scyther: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/row.png',
  Spiritomb:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Registeel:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/plus.png',
  Riolu:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead-knockback.png',
  Carnivine: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/row.png',
  Petilil:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Flareon:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Whimsicott:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  Lilligant:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/diamond-adjacent.png',
  Cottonee:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Ampharos:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-3-ahead.png',
  Lucario:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead-knockback.png',
  Ekans:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  Chimecho:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  Chingling:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-3-ahead.png',
  Meowth:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Arbok:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/row-2-ahead.png',
  Forretress:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead-advance-1.png',
  Pineco:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Sealeo:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead-advance-1.png',
  Walrein:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/2-rows-2-ahead.png',
  Persian:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Spheal:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  Sandile:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  Gothita:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-3-ahead.png',
  Gothorita:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  Gothitelle:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/2-rows-2-ahead.png',
  Duskull:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead-knockback.png',
  Krookodile:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Dusclops:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Krokorok:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Blitzle:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Dragonite:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/diamond-2-ahead-advance-2.png',
  Dragonair:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/row-knockback-switch.png',
  Musharna:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Dusknoir:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  Zebstrika:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/ring-adjacent.png',
  Dratini:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  Beldum:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead-knockback.png',
  Munna:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  Tyranitar:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/plus.png',
  Larvitar:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  Gabite:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Pupitar:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  Metang:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Gible:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  Toxicroak:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/x-shape-2-ahead.png',
  Metagross:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead-knockback.png',
  Deino:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  Croagunk:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Garchomp:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/diamond-2-ahead-advance-2.png',
  Snorunt:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  Glalie:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  Machop:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Hydreigon:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  Zweilous:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Gurdurr:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Minccino:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Froslass: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/row.png',
  Cinccino: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/row.png',
  Machamp:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/x-shape.png',
  Timburr:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Oshawott:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  Beartic:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  Machoke:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Conkeldurr:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead-knockback.png',
  Cubchoo:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  Charmander:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  Charmeleon:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Dewott:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  Samurott:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/row-knockback.png',
  Haunter:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Gastly:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Snivy: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/row.png',
  Gengar:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  Charizard:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  Infernape:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/ring-2-ahead.png',
  Chimchar:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  Tepig:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  Pignite:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead-advance-1.png',
  Zekrom:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead-knockback.png',
  Serperior:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/ring-adjacent.png',
  Arceus:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/ring-adjacent.png',
  Servine:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Swadloon:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  Monferno:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead-advance-1.png',
  Sewaddle:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Alakazam:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/diamond-2-ahead.png',
  Piplup:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  Grovyle:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Sceptile:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/ring-adjacent.png',
  Emboar: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/dai.png',
  Magikarp: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/user.png',
  Treecko:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Raichu:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/row-2-ahead-advance-1.png',
  Quagsire:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  Wooper:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  Articuno:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/2-rows-2-ahead.png',
  Ralts:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-3-ahead.png',
  Terrakion:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Gallade:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  Reshiram: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/plus.png',
  Lapras:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  Mewtwo:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/t-shape.png',
  Groudon: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/plus.png',
  Dialga: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/2-rows.png',
  Leafeon:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Rayquaza:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  Golbat:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Umbreon:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Vaporeon:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  Simisage:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/ring-adjacent.png',
  Gardevoir:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/diamond-2-ahead.png',
  Kirlia:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  Glaceon: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/row.png',
  Empoleon:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  Pansage: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/row.png',
  Simipour:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  Prinplup:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-ahead.png',
  Panpour:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  Simisear:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  Pansear:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/x-shape-2-ahead.png',
  Fraxure:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Axew: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  Darmanitan:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/dai.png',
  Darumaka:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead-advance-1.png',
  Aron: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Galvantula:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/ring-adjacent.png',
  Joltik:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  Excadrill:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead-advance-1.png',
  Haxorus:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/diamond-adjacent.png',
  Drilbur:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  Aggron:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/row-knockback.png',
  Lairon:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead-knockback.png',
  Drapion:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/x-shape.png',
  Skorupi:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Zorua:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Rhyhorn:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/diamond-adjacent.png',
  Rhydon:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead-advance-1.png',
  Zoroark:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/diamond-adjacent.png',
  Bisharp: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/row.png',
  Pawniard:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Rhyperior:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-3-ahead.png',
  Scraggy:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Shieldon:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead-knockback.png',
  Rufflet:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Scrafty:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead-advance-1.png',
  Drifblim:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  Drifloon:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead-knockback.png',
  Bastiodon:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  Larvesta:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead-advance-1.png',
  Armaldo:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/x-shape.png',
  Braviary:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Steelix:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/row-knockback.png',
  Anorith: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/row.png',
  Onix: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  Beedrill:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-2-tiles.png',
  Sneasel:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Volcarona:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/diamond-2-ahead-advance-2.png',
  Boldore:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  Gigalith: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/plus.png',
  Zubat:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Igglybuff:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Wigglytuff:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/ring-adjacent.png',
  Roggenrola:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-2-ahead.png',
  Staravia:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Crobat:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/x-shape.png',
  Starly:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Jigglypuff:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Jolteon:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/row-2-ahead.png',
  Eevee:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/tile-1-ahead.png',
  Espeon:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/column-3-tiles.png',
  Abra: 'https://veekun.com/dex/media/chrome/conquest-move-ranges/user.png',
  Leavanny:
    'https://veekun.com/dex/media/chrome/conquest-move-ranges/x-shape.png',
};
