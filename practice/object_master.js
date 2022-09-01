const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
{ "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// const one_type = pokémon.filter(p => p.types.length<2);
const poison_only = pokémon.filter(p => p.types == "poison" && p.types.length<2).map(p => p.name);
console.log(poison_only);
const pkmn_divisible_by_three = pokémon.filter(pmon => pmon.id%3===0);
console.log(pkmn_divisible_by_three);
// //---------------works-------------

const pmkn_fire_types = pokémon.filter(p => p.types == "fire");
console.log(pmkn_fire_types);
// //---------------works-------------

const pmkn_more_than_one_type = pokémon.filter(p => p.types.length>1);
console.log(pmkn_more_than_one_type);
// //-----------------works-----------------

const names = pokémon.map(p => p.name);
console.log(names);
// //---------------------works-------------------


const names_and_id = pokémon.filter(poke => poke.id>99);
console.log(names_and_id);

const names_and_id_just_names = names_and_id.map(poke => poke.name);
console.log(names_and_id_just_names);
// //----------------works-----------------

// console.log(poison_only.map(p => p.name));

// //----------------works-----probably has a much better solution------------------

const dual_flying_types = pokémon.filter( p => p.types[1] == "flying");
console.log(dual_flying_types);
console.log(dual_flying_types.map(p => p.types[0]));
// //---------------works-----------probably has better solution but it works!-------------

const num_normal_types = pokémon.filter(p => p.types.includes("normal")).length;
console.log(num_normal_types);
//-----------------works-----------pretty efficient solution!--------
