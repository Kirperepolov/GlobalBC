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
var gameSpec = {
    status: ['Idle','In progress','Finished'], // string, current game status, "Idle" is the initial one
    hero: heroClasses, // object - hero object that is in game
    monsters: monsterClasses// array of monsters in game, max = maxMonsters
}
//Common attack function
function attackCommon (target) {
	target.life = target.life - this.damage;
	if (target.life>0) {
		return 'done ' + this.damage + ' damage to ' + target.getCharClass();
	} else {
		target.life = 0;
		return target.getCharClass() +' killed';
	};
};
// створення суперклас
function GameChar(charClassVar,name) {
	if (~Object.keys(heroClasses).indexOf(charClassVar)){
		this.name = name;
		this.charClass = heroClasses[charClassVar]['charClass'];
		this.life = heroClasses[charClassVar]['life'];
		this.damage = heroClasses[charClassVar]['damage'];
	} else {
		this.charClass = monsterClasses[charClassVar]['charClass'];
		this.life = monsterClasses[charClassVar]['life'];
		this.damage = monsterClasses[charClassVar]['damage'];
	};
}
// створення загальних методів в прототипі суперкласу
GameChar.prototype.getCharClass = function(){return this.charClass;};
GameChar.prototype.getName = function (){
	return this.name;
};
//Common attack function
// GameChar.prototype.attackCommon = function(target) {
// 	target.life = target.life - this.damage;
// 	if (target.life>0) {
// 		return 'done ' + this.damage + ' damage to ' + target.getCharClass();
// 	} else {
// 		target.life = 0;
// 		return target.getCharClass() +' killed';
// 	};
// };
//
// GameChar.prototype.attack = function(target){
// 	var generalAttackMessage;
// 	if ((this instanceof Hero) && (target instanceof Hero)) {
// 		generalAttackMessage = "I will attack only monsters"
// 	} else if ((this instanceof Monster) && (target instanceof Monster)) {
// 		generalAttackMessage = "I will not attack monsters"
// 	} else {
// 		generalAttackMessage = "Hero attacked, " + this.attackCommon(target);
// 	};
// 	return  generalAttackMessage;
// };
GameChar.prototype.generalAttack = function(target){
  if (target.life>this.damage) {
    target.life=target.life-this.damage;
    return "done "+this.damage+" damage to " + target.getCharClass();
  } else {
    target.life=0;
    return target.getCharClass() + ' killed';
  };
};

// створення ФК для героїв
function Hero(name, heroClass){
  if (~Object.keys(heroClasses).indexOf(heroClass)) {
		this.superclass(heroClass,name);
  } else {
		throw new Error("Incorrect character class provided");
    };
};
Hero.prototype = Object.create(GameChar.prototype);
Hero.prototype.superclass = GameChar;
Hero.prototype.attack = function(target){
  var generalAttackMessage;
  if (target instanceof Hero) {
    generalAttackMessage = "I will attack only monsters"
  } else {
    generalAttackMessage = "Hero attacked, " + this.superclass.prototype.generalAttack.apply(this,[target]);
    return  generalAttackMessage;
  };
};
// створення ФК для монстрів
function Monster(monsterClass) {
  if (~Object.keys(monsterClasses).indexOf(monsterClass)) {
		this.superclass(monsterClass);
	} else {
		throw new Error("Incorrect character class provided");
	};
};
// створення загальних методів в прототипі
Monster.prototype = Object.create(GameChar.prototype);
Monster.prototype.superclass = GameChar;
Monster.prototype.getName = function (){
	return 'I am ' + this.charClass + ' I don\`t have name';
};
Monster.prototype.attack = function(target){
  var generalAttackMessage;
  if (target instanceof Monster) {
    generalAttackMessage = "I will attack only hero"
  } else {
    generalAttackMessage = "Monster attacked, " + this.superclass.prototype.generalAttack.apply(this,[target]);
    return  generalAttackMessage;
  };
};
// GAME Creation
function Game(){
	this.status = gameSpec.status[0];
	this.hero;
	this.monsters = [];
};

// GAme's prototype definition

/**
 * Change game status from "Idle" to "In progress", should be possible only if hero and monsters are defined
 * returns:
 *     "Your journey has started, fight monsters" - if ok
 * throw new Error(
 *     "Cannot start journey, populate the world with hero and monsters first") - if smth went wrong
 */
Game.prototype.beginJourney = function () {
	if (this.status === 'Idle' &&
			this.hero !== undefined &&
			this.monsters.length===maxMonsters) {
		this.status = 'In progress';
		return 'Your journey has started, fight monsters';
	} else {
		throw new Error('Cannot start journey, populate the world with hero and monsters first');
	}
};
// Change game status from "In progress" to "Finished", possible only if hero or both monsters are dead(their life equals 0)
// returns:
//        "The Game is finished. Monsters are dead. Congratulations" - if both monsters are dead
//        "The Game is finished. Hero is dead :(" - if hero is dead
//        "Don`t stop. Some monsters are still alive. Kill`em all" - if its not time yet
Game.prototype.finishJourney = function () {
	if (this.status === 'In progress' &&
			this.monsters.every(elem=>(elem.life===0))) {			//every monster is dead
				this.status = 'Finished';
				return "The Game is finished. Monsters are dead. Congratulations";
			} else if (this.status === 'In progress' && this.hero.life === 0) {
				this.status = 'Finished';
				return "The Game is finished. Hero is dead :(";
			} else {
				return 'Don`t stop. Some monsters are still alive. Kill\`em all';
			};
};
// set game.hero to hero instance
// accepts: instance of Hero class
// throw:
//        "Only one hero can exist" - if hero is already defined
//        "Only hero instance can be hero" - if not hero was passed to function
// returns:
//        "Hero created, welcome HERO_NAME" - if ok
Game.prototype.addHero = function (heroClass) {
	// this complex constructions is supposed to help if new hero classes appear
	if (this.hero !== undefined){
		throw new Error('Only one hero can exist');
	} else if (heroClass instanceof Hero){
		this.hero = heroClass;
		return 'Hero created, welcome ' + this.hero.getName();
	} else {
		throw new Error('Only hero instance can be hero');
	}
};
// adds monster to game.monsters array
// accepts: instance of Monster class
// throw:
//        "Only 2 monsters can exist" - if there are already 2 monsters defined
//        "Only monster Instances can become monsters" - if not monster was passed to function
// returns:
//        "Monster Created, MONSTER_CHARACTER_CLASS appeared in the world" - if ok
Game.prototype.addMonster = function (monsterClass) {
	// this complex constructions is supposed to help if new moster classes appear
	if (this.monsters.length === maxMonsters) {
		throw new Error('Only 2 monsters can exist');
	} else if (monsterClass instanceof Monster) {
		this.monsters.push(monsterClass);
		return "Monster Created, "+ monsterClass.getCharClass() +" appeared in the world";
	} else {
		throw new Error('Only monster Instances can become monsters');
	};
};
// Initiate a battle between hero and monster, one after another, they should attack each other, starting from hero,
// and until someone's life is not 0
// returns string 'Hero win' or 'Monster win', depending on who has life points left


Game.prototype.fight = function () {
	var result;
	if (this.status !== 'In progress') {
		throw new Error('Begin your journey to start fighting monsters');
	} else if (this.hero.life !== 0 &&
		this.monsters[0].life!==0) {
			this.hero.attack(this.monsters[0]);
			this.monsters[0].attack(this.hero);
			result = (this.monsters[0].life===0)? 'Hero win':this.fight();
	} else if (this.hero.life !== 0 &&
		this.monsters[1].life!==0) {
			this.hero.attack(this.monsters[1]);
			this.monsters[1].attack(this.hero);
			result = (this.monsters[1].life===0)? 'Hero win':this.fight();
	} else if (this.hero.life === 0) {
		result = 'Monster win';
	} else {
		result = 'Hero win';
	};
	return result;
};
