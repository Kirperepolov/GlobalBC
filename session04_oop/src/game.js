// gamedata
var heroClasses = {
	warrior: {
		charClass: "Warrior",
		life: 30,
		damage: 4
	},
	rogue: {
		charClass: "Rogue",
		life: 25,
		damage: 3
	},
	sorcerer: {
		charClass: "Sorcerer",
		life: 20,
		damage: 5
	}
};
var monsterClasses = {
	zombie: {
		charClass: "Zombie",
		life: 8,
		damage: 4
	},
	skeleton: {
		charClass: "Skeleton",
		life: 10,
		damage: 6
	},
	holem: {
		charClass: "Holem",
		life: 15,
		damage: 6
	}
};

var statuses = {
	idle      : "Idle",
	progress  : "In progress",
	finished  : "Finished"
};
var maxMonsters = 2;
// var game = {
//     status // string, current game status, "Idle" is the initial one
//     hero // object - hero object that is in game
//     monsters // array of monsters in game, max = maxMonsters
// }


function Hero(name, heroClass){
  if (heroClass !== 'warrior' &&
      heroClass !== 'rogue' &&
      heroClass !== 'sorcerer') {
        return "Incorrect character class provided"
      } else {
        this.name = name;
        this.heroClass = heroClasses[heroClass];
        this.getCharClass = function(){
          return this.heroClass.charClass;
        };
        this.getName = function (){
          return this.name;
        };
        this.attack = function(target){
          if (target[getCharClass()] === 'warrior') {
            return "I will attack only monsters"
          } else {
            return "Hero attacked, " ;
          };
        };
    };
};
function Monster(monsterClass) {
  if (monsterClass !== 'zombie' &&
      monsterClass !== 'skeleton' &&
      monsterClass !== 'holem') {
        return "Incorrect character class provided"
      } else {this.monsterClass = monsterClasses[monsterClass]};
};
