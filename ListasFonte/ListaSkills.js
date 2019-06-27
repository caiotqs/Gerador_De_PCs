var ListaTalentosRapidos = [
{  Codigo: "00", title: "Ambush", dsc: "If you successfully attack a surprised, unprepared, or unaware target,  you do Critical Damage + your level."},
{  Codigo: "01", title: "Armaments", dsc: "You are proficient with HeavyArmors&HeavyWeapons."},
{  Codigo: "02", title: "Burglar", dsc: "You have Advantage on tests related to delicate tasks like climbing, picking locks, hearing sounds, & disarming traps when not wearing Heavy Armor."},
{  Codigo: "03", title: "Brawler X", dsc: "Each time you take this Edge, increase your Unarmed & Improvised Damage die one step to 1d12 maximum."},
{  Codigo: "04", title: "Brute X", dsc: "Each time you take this Edge, increasing your Hit Die one step for your current and subsequent levels and increase your Hit Points +1 for each previous Level."},
{  Codigo: "05", title: "Diplomat", dsc: "With a successful CHA test you improve the attitude of NPCs or the GM rolls a second time on the NPC/Creature Reactions Table taking the more favorable result."},
{  Codigo: "06", title: "Filcher", dsc: "You have Advantage on DEX tests to pick pockets, cut purses, conceal and other acts of legerdemain when not wearing Heavy Armor."},
{  Codigo: "07", title: "Holy Aura", dsc: "Calling on Divine power, you can attempt to banish each Nearby undead by testing WIS (add target’s HD to the roll). You cannot attempt to banish an individual creature more than once per day."},
{  Codigo: "08", title: "Multiattack X", dsc: "Each time you select this Edge, you can make an additional melee attack as part of your action."},
{  Codigo: "09", title: "Quickshot X", dsc: "Each time you select this Edge, you can make an additional ranged attack as part of your action."},
{  Codigo: "10", title: "Scout", dsc: "You have Advantage on Attribute tests to track & forage."},
{  Codigo: "11", title: "Sneaky", dsc: "You have Advantage on DEX tests to hide & move stealthily when not wearing Heavy Armor."},
{  Codigo: "12", title: "Sorcery X", dsc: "You can cast Arcane spells and your Spell Casting Die starts at d4 increasing one step each subsequent time you select this Edge. See Spell CastingEdges."},
{  Codigo: "13", title: "Theurgy X", dsc: "You can cast Divine spells and your Spell Casting Die starts at d4 increasing one step each subsequent time you select this Edge. See Spell CastingEdges."}
]

var ListaTiposTalento = [
 { Codigo: "00", lista: [] },
 { Codigo: "01", lista: [] },
 { Codigo: "02", lista: [] },
 { Codigo: "03", lista: [] }
]

var ListaTalentosGerais = [
{  Codigo: "00", title: "Burglar", dsc: "You have Advantage on tests related to delicate tasks like climbing, picking locks, hearing sounds, disarming traps when not wearing Heavy Armor."},
{  Codigo: "01", title: "Catnap", dsc: "Once per 24", dsc: "hour period you can take a 30 minute rest to achieve the results of a full 8 hour rest."},
{  Codigo: "02", title: "Diplomat", dsc: "With a successful CHA test you improve the attitude of NPCs or the GM rolls a second time on the NPC/Creature Reactions Table taking the more favorable result."},
{  Codigo: "03", title: "Engineer", dsc: "You have Advantage on identifying, operating, and repairing non magical mechanisms, vehicles, and structures."},
{  Codigo: "04", title: "Evasion", dsc: "You roll with Advantage on DEX tests to avoid damage or effects from traps, magical devices and cone or area effects."},
{  Codigo: "05", title: "Fearless", dsc: "You receive Advantage on tests to resist fear and similar effects, even if magical or supernatural."},
{  Codigo: "06", title: "Fence", dsc: "You have Advantage on appraising & selling equipment."},
{  Codigo: "07", title: "Filcher", dsc: "You have Advantage on DEX tests to pick pockets, cut purses, conceal and other acts of legerdemain when not wearing Heavy Armor."},
{  Codigo: "08", title: "Healer", dsc: "Once per day you can heal yourself or another 1d4 HP or you can aid them to roll with Advantage on the Out of Action Table."},
{  Codigo: "09", title: "Lucky", dsc: "Once per day, you can reroll any one dice result."},
{  Codigo: "10", title: "Observant", dsc: "You have Advantage INT and WIS tests for searching, guarding, noticing something out of the ordinary, or recalling a detail that everyone else missed."},
{  Codigo: "11", title: "Scholar X", dsc: "You learn a language or specialized lore each time you select this Edge.Lore gives you Advantage on discovering information."},
{  Codigo: "12", title: "Scout", dsc: "You have Advantage on Attribute tests to track & forage."},
{  Codigo: "13", title: "Scribe", dsc: "You can write, translate, and forge documents in languages you know and have Advantage on related tests. With time and resources, you are also able to decipher documents coded or in languages in which you are not fluent."},
{  Codigo: "14", title: "Sentinel", dsc: "Youare always alert and may make your Move or Attack before others on the first turn even if you did not win Initiative. Resolve your remaining Action in proper sequence."},
{  Codigo: "15", title: "Sneaky", dsc: "You have Advantage on DEX tests to hide & move stealthilywhen not wearing Heavy Armor."}]


var ListaTalentosCombate = [
{  Codigo: "00", title: "Advance", dsc: "If your melee attack drops an opponent, you gain a freeMove to a Nearby opponent and can make another melee attackAction."},
{  Codigo: "01", title: "Ambush", dsc: "If you successfully attack a surprised, unprepared, or unaware target,  you do Critical Damage + your level."},
{  Codigo: "02", title: "Armaments", dsc: "You are proficient with Heavy Armors & Heavy Weapons."},
{  Codigo: "03", title: "Bellator", dsc: "Damage from your Unarmed & Improvised melee attacks ignore Armor Points (such as armor, hide, and shield spells)."},
{  Codigo: "04", title: "Berserk", dsc: "Forgo your Move and make 1 melee attack on all opponents who are Close;  up to 8 smaller, 6 similar, or 4 larger sized foes."},
{  Codigo: "05", title: "Brawler X", dsc: "Each time you take this Edge, increase your Unarmed & Improvised Damage die one step to 1d12 maximum."},
{  Codigo: "06", title: "Brute X", dsc: "Each time you take this Edge, increasing your Hit Die one step for your current and subsequent levels and increase your Hit Points +1 for each previous Level."},
{  Codigo: "07", title: "Charge", dsc: "If you Move in a straight line to a Nearby foe and make a successful melee attack you will do Critical Damage + your level."},
{  Codigo: "08", title: "Commander", dsc: "With a successful CHA test, once per day you can enable an ally who is Nearby to take a free Move or attackAction."},
{  Codigo: "09", title: "Disarm", dsc: "If youhave a minimum STR 12 and roll a 4 or below on a melee attack, you can choose to disarm the opponent rather than inflict damage."},
{  Codigo: "10", title: "Feint", dsc: "If you have a minimum STR of 12 and roll 1-4 on a melee attack, that enemy loses its next turn (Move and Action)."},
{  Codigo: "11", title: "Flanker", dsc: "When an ally is Close to an opponent, you receive Advantage on melee attacks against that opponent."},
{  Codigo: "12", title: "Martial Artist", dsc: "If you have the Bellator Edge, you will can add your level to damage caused by Unarmed & Improvised melee attacks."},
{  Codigo: "13", title: "Multiattack X", dsc: "Each time you select this Edge, you can make an additional melee attack as part of your action."},
{  Codigo: "14", title: "Quickshot X", dsc: "Each time you select this Edge, you can make an additional ranged attack as part of your action."},
{  Codigo: "15", title: "Second Wind", dsc: "Once per hour, whilst in combat, you can regain 1 HD of hit points."},
{  Codigo: "16", title: "Sniper", dsc: "Your ranged attacks cause Critical Damage on a 1-2."},
{  Codigo: "17", title: "Sunder", dsc: "If you fail a STR or DEX test and would be dealt damage from an attack, you can opt to sunder (destroy) your shield (if you have one equipped) and ignore the damage."},
{  Codigo: "18", title: "Vindictive", dsc: "When reduced to 0 Hit Points, you gain one immediate attack before becoming unconscious."},
{  Codigo: "19", title: "Weapon Mastery X", dsc: "If you are already proficient, the range to cause Critical Damage with a specific weapon type (swords, bows, axes, etc.) increases by 1 each time you select this Edge."}
]

var ListaTalentosRaciais = [
{  Codigo: "00", title: "Animal Kinship", dsc: "As a special Gnome ability, you receive Advantage on CHA tests when dealing with animals and can communicate with them regarding simple concepts and questions that can be answered with a “yes” or “no”."},
{  Codigo: "01", title: "Cave Fighting", dsc: "As a special Dwarf ability, you receive Advantage on all DEX and STR test to attack and avoid damage while in crowded dark conditions."},
{  Codigo: "02", title: "Dark Vision", dsc: "Some Dwarves and Orcs can see in complete, utter darkness with no hindrance but have Disadvantage on tests and attacks involving sight, done in daylight (or similar lighting levels), that are further away than Close (over 5’)."},
{  Codigo: "03", title: "Durable", dsc: "As a special Halfling ability, when reduced to 0 Hit Points, roll twice on the Out of Action Table and take the more favorable result."},
{  Codigo: "04", title: "Elven Accuracy", dsc: "As a special Elf ability, you can add you level to the damage of a single, ranged attack, once per turn."},
{  Codigo: "05", title: "Fey Blood", dsc: "     As a special ability, Gnomes and some Elves may substitute CHA for spell casting and receive Advantage on all tests against Charm, Sleep and mind affecting magic."},
{  Codigo: "06", title: "Glamer", dsc: "As a special ability, Gnomes and some Halflings can make themselves invisible once per day though the invisibility ends if they move or attack."},
{  Codigo: "07", title: "Iron Gut", dsc: "Some Orcs can survive eating carrion and typically inedible items, receiving Advantage on any tests against ingested poisons or diseases and can reroll their Ration Usage Die with Advantage."},
{  Codigo: "08", title: "Orc Savagery", dsc: "As a special Orc ability, you may add your level to damage from a single, melee attack, once per turn."},
{  Codigo: "09", title: "Pack Mule", dsc: "As a special Dwarf ability, you are not encumbered unless carrying more than 1.5 times your STR."},
{  Codigo: "10", title: "Second Breakfast", dsc: "As a special Halfling ability, you can gain Advantage on one dice roll per day after you have had an extra meal. Roll Ration Usage Die with Disadvantage on the day this ability is used."},
{  Codigo: "11", title: "Stone Sense", dsc: "As a special, once per day, some Dwarves can empathetically sense emotions from unworked stone and ask a single simple question that will be answered with a one", dsc: "word response on a successful CHA test."},
{  Codigo: "12", title: "Sylvan Step", dsc: "As a special ability Elves have Advantage on tests to track, hide and move stealthily in sylvan environments."},
{  Codigo: "13", title: "Tinker", dsc: "As a special Gnome ability, you receive Advantage to detect, operate and disarm mundane mechanisms like locks and traps as well as those that also employ magic such as automata and clockwork devices."},
{  Codigo: "14", title: "Under Sense", dsc: "Dwarves receive Advantage on INT and WIS tests to determine direction and depth underground as well as to identify natural or dangerous subterranean structures."},
{  Codigo: "15", title: "Whisper Wood", dsc: "As a special ability, some Elves and Gnomes can empathetically sense emotions from nature once a day and ask a single simple question that will be answered with a one", dsc: "word response on a successful CHA test."},
{  Codigo: "16", title: "Low Light Vision", dsc: "You can see in normal daylight and in dim lit conditions like starlight with no hindrance. In darkness, however, you suffer Disadvantage for any test involving sight that is further way than Nearby (over 60’)."},
{  Codigo: "17", title: "Day Vision", dsc: "Races like humans that are diurnal see in daylight but suffer Disadvantage in darkness for any test involving sight that is further away than Close (over 5’)."}
]

var ListaTalentosMagicos = [
{  Codigo: "00", title: "Abjuration", dsc: "When casting protection, barrier, and binding spells, once per day, you can reroll a failed Spell Casting Die test."},
{  Codigo: "01", title: "Arcana", dsc: " You receive Advantage on INT and CHA tests to understand, identify, operate, and deal with arcane devices, accoutrements, activities, and beings (like golems, homunculi, and other magically created creatures)."},
{  Codigo: "02", title: "Bind Familiar", dsc: "If you have attracted a Familiar (see Followers) you may perform a ritual and lose 2HD permanently to bind that creature to you. You have telepathy with and can share the familiar’s senses up to Far Away. The familiar allows you to memorize two additional spells and cast spells through the familiar up to Far Away. Additionally, you can divert the effects of Depletion and Corruption to your familiar."},
{  Codigo: "03", title: "Conjuration", dsc: "When casting conjuration, summoning, teleportation and creation spells, once per day, you can reroll a failed Spell Casting Die test."},
{  Codigo: "04", title: "Divination", dsc: "When casting prediction, informational, scrying, detection, and truth finding spells, once per day, you can reroll a failed Spell Casting Die test."},
{  Codigo: "05", title: "Divine Smite", dsc: "If you have Holy Aura, you can call upon Divine power and attempt to cause 1d8 + your level damage to all Nearby undead and demonic creatures by testing WIS (add target’s HD to the roll)."},
{  Codigo: "06", title: "Enchantment", dsc: "When casting charms, compulsion, & other mind", dsc: "affecting spells, once per day, you can reroll a failed Spell Casting Die test."},
{  Codigo: "07", title: "Evocation", dsc: "When casting spells that control energy, forces, once per day, you can reroll a failed Spell Casting Die test."},
{  Codigo: "08", title: "Grace X", dsc: "Divine power defends you and each time you take this Edge you have 1 AP per day (maximum 5 AP per day)."},
{  Codigo: "09", title: "Holy Aura", dsc: "Calling on Divine power, you can attempt to banish each Nearby undead by testing WIS (add target’s HD to the roll).You cannot attempt to banish an individual creature more than once per day."},
{  Codigo: "10", title: "Illusion", dsc: "When casting spells that deceive the minds or senses of others, once per day, you can reroll a failed Spell Casting Die test."},
{  Codigo: "11", title: "Necromancy", dsc: "When casting spells that manipulate the forces of life, unlife, death and compulsion of undead creatures, once per day, you can reroll a failed Spell Casting Die test."},
{  Codigo: "12", title: "Sorcery X", dsc: "You recognize and can shape magical forces of the world.You can cast Arcane spells and your Spell Casting Die starts at d4 increasing one step each subsequent time you select this Edge.See Spell Casting.You start out knowing a total of 1d4+2 total spells from the Level 1 and 2 Arcane Spell lists that are inscribed in your arcane tomes and codices. Your arcane power increase when you take this Edge again as shown on the Spellcaster Advancement Table."},
{  Codigo: "13", title: "Theology", dsc: " You receive Advantage on INT, WIS, and CHA tests to understand, identify, and deal with supernatural objects, activities, and beings (like demons, angels, and spirits)."},
{  Codigo: "14", title: "Theurgy X", dsc: " You have embraced a spiritual tradition of worship, prayer, and meditation and can access that supernatural power. You can cast Divine spells and your Spell Casting Die starts at d4 increasing one step each subsequent time you select this Edge. You start out knowing a total of 1d4 total spells from the Level 1 and 2 Divine Spell lists that you have recorded in your holy manuscripts. Your divine power increase when you take this Edge again as shown on the Spellcaster Advancement Table."},
{  Codigo: "15", title: "Transmutation", dsc: "When casting spells that change the properties of a creature, objects, and materials, once per day, you can reroll a failed Spell Casting Die test."}
]

var ListaDesvantagens = [
{  Codigo: "00", title: "Addiction", dsc: "You have a dependency on: 1-Alcohol, 2-Tobacco, 3-Mind altering substances, 4-Gambling, 5-Lighting fires, 6-Overeating. If not addressed once per day, you receive Disadvantage on INT and WIS tests until sated."},
{  Codigo: "01", title: "Allergy", dsc: "You are allergic to: 1-Pollen, 2-Animal dander, 3-Mold, 4-shellfish, 5-nuts, 6-insect bite.  If you fail a CON test when exposed, you experience the following for 1d6 hours: 1-Uncontrolled sneezing, 2-Body rash, 3-Severe headache, 4-Dizziness, 5-Nausea, 6-Coma.  Effects determined by your GM."},
{  Codigo: "02", title: "Anxiety", dsc: "If you fail a WIS test at the beginning of an encounter you will have Disadvantage on all tests until you rest."},
{  Codigo: "03", title: "Corruption", dsc: "Drop 1d6 on the Corruption Table and repeat if it bounces off."},
{  Codigo: "04", title: "Cursed", dsc: "When the GM rolls to see who is attacked or hit by that arrow, your chances are doubled."},
{  Codigo: "05", title: "Insomnia", dsc: "With a failed CON test, you do not receive any benefit from a rest (healing, AP, etc.)."},
{  Codigo: "06", title: "Kleptomania", dsc: "You must steal one object a day or be unable to concentrate receiving Disadvantage on INT and WIS tests."},
{  Codigo: "07", title: "Moon Fever", dsc: "You have a mild form of lycanthropy and on a full moon your nails and incisors lengthen slightly, your eyes yellow, you sprout hair, and Nearby animals are skittish."},
{  Codigo: "08", title: "Paranoia", dsc: "At least once every session the GM will ask you to roll Initiative for no reason.  The GM may also provide you with misleading insights into the behavior of others even if your attribute test was successful."},
{  Codigo: "09", title: "Scars", dsc: "Marks on your hands and face from an illness or injury gives you a disturbing appearance and you have Disadvantage on CHA tests with those who do not know you personally."},
{  Codigo: "10", title: "Sleepwalker", dsc: "Every time you sleep there is a 1 in 6 chance you will sleepwalk and wake up in a strange location. You will make 1 unarmed attack on anyone who wakes you while sleepwalking"},
{  Codigo: "11", title: "Small Stature", dsc: "Your frame is either too short or too slight for you to employ Heavy Weapons."},
{  Codigo: "12", title: "Spendthrift", dsc: "You are loose with your money and when you sell items you get no more than 25% of the list value and items you purchase cost you 200% of their list value."},
{  Codigo: "13", title: "Strong Odor", dsc: "Your body exudes an offensive odor that is hard to mask.  You have Disadvantage on CHA tests.  Any roll on the NPC Reactions Table is also made with Disadvantage. You have Disadvantage when attempting to avoid being tracked by creatures that use scent to track."},
{  Codigo: "14", title: "Superstitious", dsc: "There is a 1 in 6 chance each day that you experience abad omen and receive Disadvantage on all tests for the next 24 hours on the following attribute: 1-STR, 2-DEX, 3-CON, 4-WIS, 5-INT, 6-CHA."},
{  Codigo: "15", title: "Vocal Tic", dsc: "You make noises, mumble, and talk incessantly.  A successful WIS test is required to remain silent for up to 5 minutes at critical times."},
{  Codigo: "16", title: "Wanted", dsc: "You, or someone who looks just like you, has committed a serious crime and eluded punishment or owes someone important a substantial sum of money. Debt collectors or bounty hunters seem to always show up at inopportune moments."},


{  Codigo: "17", title: "Feeble", dsc: "When the character’s life points fall below a third of this total, he suffers disadvantage to all actions until he is able to recover"},
{  Codigo: "18", title: "Cowardice", dsc: "Each time the character finds himself in true danger, he will submit to the state of fear."},
{  Codigo: "19", title: "Insufferable", dsc: "he always causes a negative reaction in others that he is unfamiliar with."},
{  Codigo: "20", title: "Slow Healing", dsc: "The Character only recovers half the normal hit points he would gain either by normal regeneration or though mystical means."},
{  Codigo: "21", title: "Nearsighted", dsc: "The character suffers disadvantage to his search, notice and aiming targets beyond far distance."},
{  Codigo: "22", title: "Pariah", dsc: "The character is automatically considered a pariah in all social circles."},
{  Codigo: "23", title: "Powerful Enemy", dsc: "You, or someone who looks just like you, has committed a serious crime and eluded punishment or owes someone important a substantial sum of money. Debt collectors or bounty hunters seem to always show up at inopportune moments."},
{  Codigo: "24", title: "Code of Conduct", dsc: "The character must follow a strict code of conduct, in someway related to his country of origin."},
]


var ListaComplicacoes = [
{  Codigo: "01", title:"Absent-minded", dsc: "Preoccupied to the extent of being unaware of one’s immediate surroundings. Abstracted, daydreaming, inattentive, oblivious, forgetful."},
{  Codigo: "02", title:"Abusive", dsc: "Characterised by improper infliction of physical or psychological maltreatment towards another."},
{  Codigo: "03", title:"Addict", dsc: "One who is addicted to a compulsive activity. Examples: gambling, drugs, sex."},
{  Codigo: "04", title:"Aimless", dsc: "Devoid of direction or purpose."},
{  Codigo: "05", title:"Alcoholic", dsc: "A person who drinks alcoholic substances habitually and to excess."},
{  Codigo: "06", title:"Anxious", dsc: "Full of mental distress or uneasiness because of fear of danger or misfortune; greatly worried; solicitous."},
{  Codigo: "07", title:"Arrogant", dsc: "Having or displaying a sense of overbearing self-worth or self-importance. Inclined to social exclusiveness and who rebuff the advances of people considered inferior. Snobbish."},
{  Codigo: "08", title:"Audacious", dsc: "Recklessly bold in defiance of convention, propriety, law, or the like; insolent; braze, disobedient."},
{  Codigo: "09", title:"Bad Habit", dsc: "A revolting personal habit. Examples: picks nose, spits tobacco, drools."},
{  Codigo: "10", title:"Bigmouth", dsc: "A loud-mouthed or gossipy person."},
{  Codigo: "11", title:"Bigot", dsc: "One who is strongly partial to one’s own group, religion, race, or politics and is intolerant of those who differ."},
{  Codigo: "12", title:"Blunt", dsc: "Characterised by directness in manner or speech; without subtlety or evasion. Frank, callous, insensitive, brusque."},
{  Codigo: "13", title:"Bold", dsc: "In a bad sense, too forward; taking undue liberties; over assuming or confident; lacking proper modesty or restraint; rude; impudent. Abrupt, brazen, cheeky, brassy, audacious."},
{  Codigo: "14", title:"Callous", dsc: "They are hardened to emotions, rarely showing any form of it in expression. Unfeeling. Cold."},
{  Codigo: "15", title:"Childish", dsc: "Marked by or indicating a lack of maturity; puerile."},
{  Codigo: "16", title:"Complex", dsc: "An exaggerated or obsessive concern or fear. (List specific complex.)"},
{  Codigo: "17", title:"Cruel", dsc: "Mean to anyone or anything, without care or regard to consequences and feelings."},
{  Codigo: "18", title:"Cursed", dsc: "A person who has befallen a prayer for evil or misfortune, placed under a spell, or borne into an evil circumstance, and suffers for it. Damned."},
{  Codigo: "19", title:"Dependent", dsc: "Unable to exist, sustain oneself, or act appropriately or normally without the assistance or direction of another."},
{  Codigo: "20", title:"Deranged", dsc: "Mentally decayed. Insane. Crazy. Mad. Psychotic."},
{  Codigo: "21", title:"Dishonest", dsc: "Given to or using fraud, cheating; deceitful, deceptive, crooked, underhanded."},
{  Codigo: "22", title:"Disloyal", dsc: "Lacking loyalty. Unfaithful, perfidious, traitorous, treasonable"},
{  Codigo: "23", title:"Disorder", dsc: "An ailment that affects the function of mind or body. (List the disorders name if they have one.) See the Mental Disorder List."},
{  Codigo: "24", title:"Disturbed", dsc: "Showing some or a few signs or symptoms of mental or emotional illness. Confused, disordered, neurotic, troubled."},
{  Codigo: "25", title:"Dubious", dsc: "Fraught with uncertainty or doubt. Undecided, doubtful, unsure."},
{  Codigo: "26", title:"Dyslexic", dsc: "Affected by dyslexia, a learning disorder marked by impairment of the ability to recognise and comprehend written words."},
{  Codigo: "27", title:"Egotistical", dsc: "Characteristic of those having an inflated idea of their own importance. Boastful, pompous."},
{  Codigo: "28", title:"Envious", dsc: "Showing extreme cupidity; painfully desirous of another’s advantages; covetous, jealous."},
{  Codigo: "29", title:"Erratic", dsc: "Deviating from the customary course in conduct or opinion; eccentric: erratic behaviour. Eccentric, bizarre, outlandish, strange."},
{  Codigo: "30", title:"Fanatical", dsc: "Fanatic outlook or behaviour especially as exhibited by excessive enthusiasm, unreasoning zeal, or wild and extravagant notions on some subject."},
{  Codigo: "31", title:"Fickle", dsc: "Erratic, changeable, unstable, especially with regard to affections or attachments; capricious."},
{  Codigo: "32", title:"Fierce", dsc: "Marked by extreme intensity of emotions or convictions; inclined to react violently; fervid."},
{  Codigo: "33", title:"Finicky", dsc: "Excessively particular or fastidious; difficult to please; fussy. Too much concerned with detail. Meticulous, fastidious, choosy, critical, picky, prissy, pernickety."},
{  Codigo: "34", title:"Fixated", dsc: "In psychoanalytic theory, a strong attachment to a person or thing, especially such an attachment formed in childhood or infancy and manifested in immature or neurotic behaviour that persists throughout life. Fetish, quirk, obsession, infatuation."},
{  Codigo: "35", title:"Flirt", dsc: "To make playfully romantic overtures; behaviour intended to arouse romantic interest. Minx. Tease."},
{  Codigo: "36", title:"Gluttonous", dsc: "Given to excess in consumption of especially food or drink. Voracious, ravenous, wolfish, piggish, insatiable."},
{  Codigo: "37", title:"Gruff", dsc: "Brusque or stern in manner or appearance. Crusty, rough, surly."},
{  Codigo: "38", title:"Gullible", dsc: "Will believe any information given, regardless of how valid or truthful it is, easily deceived or duped."},
{  Codigo: "39", title:"Hard", dsc: "A person who is difficult to deal with, manage, control, overcome, or understand. Hard emotions, hard-hearted."},
{  Codigo: "40", title:"Hedonistic", dsc: "Pursuit of or devotion to pleasure, especially to the pleasures of the senses."},
{  Codigo: "41", title:"Hoity-toity", dsc: "Given to flights of fancy; capricious; frivolous. Prone to giddy behaviour, flighty."},
{  Codigo: "42", title:"Humourless", dsc: "The inability to find humour in things, and most certainly in themselves."},
{  Codigo: "43", title:"Hypocritical", dsc: "One who is always contradicting their own beliefs, actions or sayings. A person who professes beliefs and opinions for others that he does not hold. Being a hypocrite."},
{  Codigo: "44", title:"Idealist", dsc: "One whose conduct is influenced by ideals that often conflict with practical considerations. One who is unrealistic and impractical, guided more by ideals than by practical considerations."},
{  Codigo: "45", title:"Idiotic", dsc: "Marked by a lack of intelligence or care; foolish or careless."},
{  Codigo: "46", title:"Ignorant", dsc: "Lacking knowledge or information as to a particular subject or fact. Showing or arising from a lack of education or knowledge."},
{  Codigo: "47", title:"Illiterate", dsc: "Unable to read and write."},
{  Codigo: "48", title:"Immature", dsc: "Emotionally undeveloped; juvenile; childish."},
{  Codigo: "49", title:"Impatient", dsc: "Unable to wait patiently or tolerate delay; restless. Unable to endure irritation or opposition; intolerant."},
{  Codigo: "50", title:"Impious", dsc: "Lacking piety and reverence for a god/gods and their followers."},
{  Codigo: "51", title:"Impish", dsc: "Naughtily or annoyingly playful."},
{  Codigo: "52", title:"Incompetent", dsc: "Unable to execute tasks, no matter how the size or difficulty."},
{  Codigo: "53", title:"Indecisive", dsc: "Characterized by lack of decision and firmness, especially under pressure."},
{  Codigo: "54", title:"Indifferent", dsc: "The trait of lacking enthusiasm for or interest in things generally, remaining calm and seeming not to care; a casual lack of concern. Having or showing little or no interest in anything; languid; spiritless."},
{  Codigo: "55", title:"Infamy", dsc: "Having an extremely bad reputation, public reproach, or strong condemnation as the result of a shameful, criminal, or outrageous act that affects how others view them."},
{  Codigo: "56", title:"Intolerant", dsc: "Unwilling to tolerate difference of opinion and narrow-minded about cherished opinions."},
{  Codigo: "57", title:"Judgemental", dsc: "Inclined to make and form judgements, especially moral or personal ones, based on one’s own opinions or impressions towards others/practices/groups/religions based on appearance, reputation, occupation, etc."},
{  Codigo: "58", title:"Klutz", dsc: "Clumsy. Blunderer."},
{  Codigo: "59", title:"Lazy", dsc: "Resistant to work or exertion; disposed to idleness."},
{  Codigo: "60", title:"Lewd", dsc: "Inclined to, characterized by, or inciting to lust or lechery; lascivious. Obscene or indecent, as language or songs; salacious."},
{  Codigo: "61", title:"Liar", dsc: "Compulsively and purposefully tells false truths more often than not. A person who has lied or who lies repeatedly."},
{  Codigo: "62", title:"Lustful", dsc: "Driven by lust; preoccupied with or exhibiting lustful desires."},
{  Codigo: "63", title:"Masochist", dsc: "The deriving gratification, or the tendency to derive gratification, from being physically or emotionally abused. A willingness or tendency to subject oneself to unpleasant or trying experiences."},
{  Codigo: "64", title:"Meddlesome", dsc: "Intrusive in a meddling or offensive manner, given to meddling; interfering."},
{  Codigo: "65", title:"Meek", dsc: "Evidencing little spirit or courage; overly submissive or compliant; humble in spirit or manner; suggesting retiring mildness or even cowed submissiveness."},
{  Codigo: "66", title:"Megalomaniac", dsc: "A psycho pathological condition characterized by delusional fantasies of wealth, power, or omnipotence."},
{  Codigo: "67", title:"Naïve", dsc: "Lacking worldly experience and understanding, simple and guileless; showing or characterized by a lack of sophistication and critical judgement."},
{  Codigo: "68", title:"Nervous", dsc: "Easily agitated or distressed; high-strung or jumpy."},
{  Codigo: "69", title:"Non-violent ", dsc: "Abstaining from the use of violence."},
{  Codigo: "70", title:"Nosey", dsc: "Given to prying into the affairs of others; snoopy. Offensively curious or inquisitive."},
{  Codigo: "71", title:"Obsessive", dsc: "An unhealthy and compulsive preoccupation with something or someone."},
{  Codigo: "72", title:"Oppressor", dsc: "A person of authority who subjects others to undue pressures, to keep down by severe and unjust use of force or authority."},
{  Codigo: "73", title:"Overambitious", dsc: "Having a strong excessive desire for success or achievement."},
{  Codigo: "74", title:"Overconfident", dsc: "Excessively confident; presumptuous."},
{  Codigo: "75", title:"Overemotional", dsc: "Excessively or abnormally emotional. Sensitive about themselves and others, more so than the average person."},
{  Codigo: "76", title:"Overprotective", dsc: "To protect too much; coddle."},
{  Codigo: "77", title:"Overzealous", dsc: "Marked by excessive enthusiasm for and intense devotion to a cause or idea."},
{  Codigo: "78", title:"Pacifist", dsc: "Opposition to war or violence as a means of resolving disputes. (Can double as a merit in certain cases)"},
{  Codigo: "79", title:"Paranoid", dsc: "Exhibiting or characterized by extreme and irrational fear or distrust of others."},
{  Codigo: "80", title:"Peevish", dsc: "Expressing fretfulness and discontent, or unjustifiable dissatisfaction. Cantankerous, cross, ill-tempered, testy, captious, discontented, crotchety, cranky, ornery."},
{  Codigo: "81", title:"Perfectionist", dsc: "A propensity for being displeased with anything that is not perfect or does not meet extremely high standards."},
{  Codigo: "82", title:"Pessimist", dsc: "A tendency to stress the negative or unfavourable or to take the gloomiest possible view."},
{  Codigo: "83", title:"Pest", dsc: "One that pesters or annoys, with or without realizing it. Nuisance. Annoying. Nag."},
{  Codigo: "84", title:"Phobic", dsc: "They have a severe form of fear when it comes to this one thing. Examples: Dark, Spiders, Cats"},
{  Codigo: "85", title:"Practical", dsc: "Level-headed, efficient, and unspeculative. No-nonsense."},
{  Codigo: "86", title:"Predictable", dsc: "Easily seen through and assessable, where almost anyone can predict reactions and actions of said person by having met or known them even for a short time."},
{  Codigo: "87", title:"Proud", dsc: "Filled with or showing excessive self-esteem and will often shirk help from others for the sake of pride."},
{  Codigo: "88", title:"Rebellious", dsc: "Defying or resisting some established authority, government, or tradition; insubordinate; inclined to rebel."},
{  Codigo: "89", title:"Reckless", dsc: "Heedless. Headstrong. Foolhardy. Unthinking boldness, wild carelessness and disregard for consequences."},
{  Codigo: "90", title:"Remorseless", dsc: "Without remorse; merciless; pitiless; relentless."},
{  Codigo: "91", title:"Rigorous", dsc: "Rigidly accurate; allowing no deviation from a standard; demanding strict attention to rules and procedures."},
{  Codigo: "92", title:"Sadist", dsc: "The deriving gratification or the tendency to derive gratification from inflicting pain or emotional abuse on others. Deriving of pleasure, or the tendency to derive pleasure, from cruelty."},
{  Codigo: "93", title:"Sadomasochist", dsc: "Both sadist and masochist combined."},
{  Codigo: "94", title:"Sarcastic", dsc: "A subtle form of mockery in which an intended meaning is conveyed obliquely."},
{  Codigo: "95", title:"Sceptic", dsc: "One who instinctively or habitually doubts, questions, or disagrees with assertions or generally accepted conclusions."},
{  Codigo: "96", title:"Seducer", dsc: "To lead others astray, as from duty, rectitude, or the like; corrupt. To attempt to lead or draw someone away, as from principles, faith, or allegiance."},
{  Codigo: "97", title:"Selfish", dsc: "Concerned chiefly or only with oneself."},
{  Codigo: "98", title:"Self-Martyr", dsc: " One who purposely makes a great show of suffering in order to arouse sympathy from others, as a form of manipulation, and always for a selfish cause or reason."},
{  Codigo: "99", title:"Self-righteous", dsc: "Piously sure of one’s own righteousness; moralistic. Exhibiting pious self-assurance. Holier-than-thou, sanctimonious."},
{  Codigo: "100", title:"Senile", dsc: "Showing a decline or deterioration of physical strength or mental functioning, esp. short-term memory and alertness, as a result of old age or disease."},
{  Codigo: "101", title:"Shallow", dsc: "Lacking depth of intellect or knowledge; concerned only with what is obvious."},
{  Codigo: "102", title:"Smart Ass", dsc: "Thinks they know it all, and in some ways they may, but they can be greatly annoying and difficult to deal with at times, especially in arguments."},
{  Codigo: "103", title:"Soft-hearted", dsc: "Having softness or tenderness of heart that can lead them into trouble; susceptible of pity or other kindly affection. They cannot resist helping someone they see in trouble, suffering or in need, and often don’t think of the repercussions or situation before doing so."},
{  Codigo: "104", title:"Solemn", dsc: "Deeply earnest, serious, and sober."},
{  Codigo: "105", title:"Spineless", dsc: "Lacking courage. Cowardly, wimp, lily-livered, gutless."},
{  Codigo: "106", title:"Spiteful", dsc: "Showing malicious ill will and a desire to hurt; motivated by spite; vindictive person who will look for occasions for resentment. Vengeful."},
{  Codigo: "107", title:"Spoiled", dsc: "Treated with excessive indulgence and pampering from earliest childhood, and has no notion of hard work, self-care or money management; coddled, pampered. Having the character or disposition harmed by pampering or over solicitous attention."},
{  Codigo: "108", title:"Squeamish", dsc: "Excessively fastidious and easily disgusted."},
{  Codigo: "109", title:"Stubborn", dsc: "Unreasonably, often perversely unyielding; bull-headed. Firmly resolved or determined; resolute."},
{  Codigo: "110", title:"Superstitious", dsc: "An irrational belief arising from ignorance or fear from an irrational belief that an object, action, or circumstance not logically related to a course of events influences its outcome."},
{  Codigo: "111", title:"Tactless", dsc: "Lacking or showing a lack of what is fitting and considerate in dealing with others."},
{  Codigo: "112", title:"Temperamental ", dsc: "Moody, irritable, or sensitive. Excitable, volatile, emotional."},
{  Codigo: "113", title:"Theatrical ", dsc: "Having a flair for over dramatizing situations, doing things in a ‘big way’ and love to be ‘centre stage’."},
{  Codigo: "114", title:"Timid ", dsc: "Tends to be shy and/or quiet, shrinking away from offering opinions or from strangers and newcomers, fearing confrontations and violence."},
{  Codigo: "115", title:"Tongue-tied", dsc: "Speechless or confused in expression, as from shyness, embarrassment, or astonishment."},
{  Codigo: "116", title:"Troublemaker ", dsc: " Someone who deliberately stirs up trouble, intentionally or unintentionally."},
{  Codigo: "117", title:"Unlucky", dsc: "Marked by or causing misfortune; ill-fated. Destined for misfortune; doomed."},
{  Codigo: "118", title:"Unpredictable", dsc: "Difficult to foretell or foresee, their actions are so chaotic it’s impossible to know what they are going to do next."},
{  Codigo: "119", title:"Untrustworthy", dsc: "Not worthy of trust or belief. Backstabber."},
{  Codigo: "120", title:"Vain", dsc: "Holding or characterized by an unduly high opinion of their physical appearance. Lovers of themselves. Conceited, egotistic, narcissistic."},
{  Codigo: "121", title:"Weak-willed", dsc: "Lacking willpower, strength of will to carry out one’s decisions, wishes, or plans. Easily swayed."},
{  Codigo: "122", title:"Withdrawn", dsc: "Not friendly or Sociable. Aloof."},
{  Codigo: "123", title:"Zealous", dsc: "A fanatic."}
]