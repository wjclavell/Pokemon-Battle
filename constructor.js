//*Pokemon Constructor
class Pokemon {
  constructor(name, image = {}, type, attacks = [], health, damage) {
    this.name = name;
    this.image = image;
    this.type = type;
    this.attacks = attacks;
    this.health = health;
    this.damage = damage;
  }
  //test to see that information is being stored correctly and object is being created with set parameters
  displayStats() {
    console.table(this);
  }
}
//testing creating a new pokemon
const ash = new Pokemon(
  "Ash",
  {
    main:
      "https://www.nicepng.com/png/detail/139-1394970_ash-ketchum-png-photo-original-ash-ketchum.png",
    front:
      "https://cdn.bulbagarden.net/upload/thumb/3/3a/Ash_OS_2.png/160px-Ash_OS_2.png",
    back: "",
  },
  "normal",
  ["punch", "kick", "headbutt", "sleep"],
  10,
  2
);

//array of objects for each pokemon with their stats and descriptions
let pokemonList = [
  {
    name: "Pikachu",
    image: {
      main:
        "https://res.cloudinary.com/wjclavell/image/upload/v1594657519/pokemon-images/pikachu_main_vfn75n.png",
      front:
        "https://res.cloudinary.com/wjclavell/image/upload/v1594657446/pokemon-images/pikachu_front_jwxzal.gif",
      back:
        "https://res.cloudinary.com/wjclavell/image/upload/v1594657446/pokemon-images/pikachu_back_qnmbpq.gif",
    },
    type: "Electric",
    attacks: ["Quick Attack", "Thunderbolt", "Thunder", "Shock Wave"],
    health: {
      currentHP: 8,
      totalHP: 8,
    },
    damage: 2,
  },
  {
    name: "Charmander",
    image: {
      main:
        "https://res.cloudinary.com/wjclavell/image/upload/v1594657530/pokemon-images/charmander_main_worsmx.png",
      front:
        "https://res.cloudinary.com/wjclavell/image/upload/v1594657447/pokemon-images/charmander_front_ltgyaz.gif",
      back:
        "https://res.cloudinary.com/wjclavell/image/upload/v1594657448/pokemon-images/charmander_back_kjocpk.gif",
    },
    type: "Fire",
    attacks: ["Ember", "Flamethrower", "Fire Spin", "Fire Blast"],
    health: {
      currentHP: 6,
      totalHP: 6,
    },
    damage: 3,
  },
  {
    name: "Bulbasaur",
    image: {
      main:
        "https://res.cloudinary.com/wjclavell/image/upload/v1594657446/pokemon-images/bulbasaur_main_oso4q4.png",
      front:
        "https://res.cloudinary.com/wjclavell/image/upload/v1594657446/pokemon-images/bulbasaur_front_wgblls.gif",
      back:
        "https://res.cloudinary.com/wjclavell/image/upload/v1594657446/pokemon-images/bulbasaur_back_udz4dv.gif",
    },
    type: "Grass/Poison",
    attacks: ["Vine Whip", "Razor Leaf", "Solar Beam", "Leaf Blade"],
    health: {
      currentHP: 14,
      totalHP: 14,
    },
    damage: 1,
  },
  {
    name: "Squirtle",
    image: {
      main:
        "https://res.cloudinary.com/wjclavell/image/upload/v1594657445/pokemon-images/squirtle_main_okx3at.png",
      front:
        "https://res.cloudinary.com/wjclavell/image/upload/v1594657447/pokemon-images/squirtle_front_thmsjd.gif",
      back:
        "https://res.cloudinary.com/wjclavell/image/upload/v1594657446/pokemon-images/squirtle_back_evrmdo.gif",
    },
    type: "Water",
    attacks: ["Water Gun", "Aqua Tail", "Hydro Pump", "Bubble Beam"],
    health: {
      currentHP: 10,
      totalHP: 10,
    },
    damage: 1.5,
  },
];
