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

// створення ФК для героїв
function Hero(name, heroClass){
  if (Object.keys(heroClasses).indexOf(heroClass) !== -1) {
		this.name = name;
    this.heroClass = heroClasses[heroClass]['charClass'];
		this.life = heroClasses[heroClass]['life'];
		this.damage = heroClasses[heroClass]['damage'];
  } else {
		return new String("Incorrect character class provided");
    };
};
// створення загальних методів в прототипі
Hero.prototype.getCharClass = function(){
	return this.heroClass;
};
Hero.prototype.getName = function (){
	return this.name;
};
Hero.prototype.attack = function(target){
	if (target.getCharClass() === ('warrior' && 'rogue' && 'sorcerer')) {
		return "I will attack only monsters"
	} else {
		target.life = target.life - this.damage;
		if (target.life>0) {
			var generalAttackMessage = 'done ' + this.damage + ' damage to ' + target.getCharClass();
		} else {
			target.life = 0;
			var generalAttackMessage = target.getCharClass() +' killed';
		};
		return "Hero attacked, " + generalAttackMessage;
	};
};
// створення ФК для монстрів
function Monster(monsterClass) {
  if (Object.keys(monsterClasses).indexOf(monsterClass) !== -1) {
		this.monsterClass = monsterClasses[monsterClass]['charClass'];
		this.life = monsterClasses[monsterClass]['life'];
		this.damage = monsterClasses[monsterClass]['damage'];
	} else {
		this.valueOf = function(){return "Incorrect character class provided"};
	};
};
// створення загальних методів в прототипі
Monster.prototype.getCharClass = function(){
	return this.monsterClass;
};
Monster.prototype.getName = function (){
	return 'I am ' + this.monsterClass + ' I don\`t have name';
};
Monster.prototype.attack = function(target){
	if (target.getCharClass() === 'warrior') {
		return "I will attack only monsters"
	} else {
		target.life = target.life - this.damage;
		if (target.life>0) {
			var generalAttackMessage = 'done ' + this.damage + ' damage to ' + target.getCharClass();
		} else {
			target.life = 0;
			var generalAttackMessage = target.getCharClass() +' killed';
		};
		return "Hero attacked, " + generalAttackMessage;
	};
};
