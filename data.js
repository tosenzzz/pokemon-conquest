var pwd_data = `Eevee	2rz3XFCKmR
Dratini	Sr5Z5GqAgR
Gyarados	mq2xRVNgRL
Cinccino	vVALFrGTXX
Oshawott	frCLRpXG88
Gible	LTb3n3RYJ8 J3mmJr9rX8
Pansear	niE33w9rwM
Panpour	CNZF3wpq3x
Axew	BqWxXEK3xg
Darmanitan	pK5RgzqLG8
Sneasel	Rc338MpqLx
Beldum	CMqkZRRSRX
Larvitar	Lpu3ggCYk8
Emolga	Jnm3kqgN8X
Pikachu	FZP8GqRZRR urALRZwvRg
Riolu	Shw8mxRAJR
Scyther	8GV3LMGrnM
Lapras	GfV33RVN3F
Croagunk	LKpk8FRQR8
Pansage	6xSG8UCAZR q5wwwxHD8n
Musharna	iMYXwqtHgL
Larvesta	yQAw81qxGR
Chimchar	DNB3x2gCgk RKGBxzC2n8
Deino	8rf3XPwvJw PKSRGpCPZJ
Lilligant	RwGxLbHRRk
Misdreavus	mnKX3qwrZR
Snivy	XyADXkr138
Zoroark	6iYmwq1Y8w`;

// Perfect Link Data
const plink1 = `
DDD - Eevee//Vaporeon//Jolteon//Flareon//Espeon//Umbreon//Leafeon//Glaceon///Arceus
Oichi - Jigglypuff//Wigglytuff (not Igglybuff)
Aya - Snorunt//Froslass(not Glalie)
Ginchiyo - Luxio//Luxray (not Shinx)
Gracia - Gothorita//Gothitelle (not Gothita)
Hanbei - Pikachu//Raichu (not Pichu)
Hanzo - Haunter//Gengar (not Gastly)
Hideyoshi - Monferno//Infernape///Reshiram (not Chimchar)
Ieyasu - Aggron//Registeel (not Aron/Lairon)
Ina - Prinplup//Empoleon (not Piplup)
Kai - Darumaka//Darmanitan
Kanbei - Lampent//Chandelure (not Litwick)
Kanetsugu - Kadabra//Alakazam (not Abra)
Keiji - Bastiodon//Terrakion (not Shieldon)
Kenshin - Gallade//Mewtwo (not Ralts/Kirlia/Gardevoir)
Kotaro - Zorua//Zoroark
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
Yoshimoto - Pineco//Foretress
Yukimura - Charmeleon//Charizard (not Charmander)`
  .trim()
  .split('\n')
  .map((v) => v.trim());

const plink2 = `
Akizane - Pichu/Pikachu/Raichu
Asahi - Drilbur/Excadrill
Bokuden - Shieldon/Bastiodon
Bokuzen - Gastly/Haunter/Gengar
Chacha - Minccino/Cincinno
Chikamasa - Wooper/Quagsire
Chikayasu - Oshawott/Dewott/Samurott
Choun - Bidoof/Bibarel
Dosan - Ekans/Arbok
Dosetsu - Shinx/Luxio
Ekei - Carnivine
Fujitaka - Lapras
Gen'an - Onix/Steelix
Genba - Scraggy/Scrafty
Go - Piplup/Prinplup/Empoleon
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
Jinpachi - Misdreavius/Mismagius
Jouun - Mareep/Flaaffy/Ampharos
Juzo - Pansear/Simisear
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
Koroku - Timburr/Gurrdurr
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
Naomasa - Tepig/Pignite/Emboar
Nobuchika - Magikarp/Gyarados
Norishige - Mareep/Flaaffy/Ampharos
Omi - Beedrill
Rikyu - Pansage/Simisage
Sadamitsu - Munna/Musharna
Sadatoshi - Cottonee/Whimsicott
Saizo - Gastly/Haunter/Gengar
Sandayu - Zubat/Golbat
Saneyori - Chingling/Chimecho
Seikuro - Skorupi/Drapion
Sekiso - Joltik/Galvantula
Sessai - Larvesta/Volcarona
Sen - Chingling/Chimecho
Sena - Beedrill
Shigemoto - Cubchoo/Beartic
Shigezane - Scyther/Scizor
Shimoyama - Scraggy/Scrafty
Shizuka - Rhyhorn/Rhydon
Shoun - Mareep/Flaaffy/Ampharos
Sorin - Pichu/Pikachu/Raichu
Soun - Larvitar/Pupitar/Tyranitar
Tadamoto - Croagunk/Toxicroak
Tadaoki - Gothita/Gothorita/Gothitelle
Tadatsune - Machop/Machoke/Machamp
Tadatsugu - Aron/Lairon/Aggron
Tadasumi - Blitzle/Zebstrika
Takahisa - Timburr/Gurrdurr
Takahiro - Abra/Kadabra/Alakazam
Takakage - Treecko/Grovyle/Sceptile
Takamoto - Snivy/Servine/Serperior
Takanobu - Munchlax/Snorlax
Takatane - Shinx/Luxio
Takatora - Litwick/Lampent/Chandelure
Takayori - Panpour/Simipour
Takeyoshi - Magikarp/Gyarados
Tatsukio - Tepig/Pignite/Emboar
Terumoto - Petilil/Lilligant
Tokitaka - Timburr/Gurdurr
Toku - Aron/Lairon/Aggron
Tomonobu - Ralts/Kirlia/Gardevoir
Tsunamoto - Snorunt/Gliale
Tsunehisa - Meowth/Persian
Ujichika - Sewaddle/Swadloon
Ujihiro - Sewaddle/Swadloon
Ujikini - Anorith/Armaldo
Ujinao - Anorith/Armaldo
Ujisato - Snivy/Servine/Serperior
Ujitera - Shieldon/Bastiodon
Ujizane - Pineco/Forretress
Ume - Drilbur/Excadrill
Yasumasa - Dratini/Dragonair/Dragonite
Yasunaga - Venipede/WhirlipedeScolipede
Yasutomo - Joltik/Galvantula
Yataro - Treecko/Grovyle/Sceptile
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
