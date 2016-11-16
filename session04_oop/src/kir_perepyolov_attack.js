
GameChar.prototype.generalAttack = function(target){
  if (target.life>this.damage) {
    target.life=target.life-this.damage;
    return "done "+this.damage+" damage to " + target.getCharClass();
  } else {
    target.life=0;
    return target.getCharClass() + ' killed';
  };
};

Hero.prototype.attack = function(target){
  var generalAttackMessage;
  if (target instanceof Hero) {
    generalAttackMessage = "I will attack only monsters"
  } else {
    generalAttackMessage = "Hero attacked, " + this.superclass.prototype.generalAttack.apply(this,[target]);
    return  generalAttackMessage;
  };
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
