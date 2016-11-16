Hero.prototype.attack = function(target){
  var generalAttackMessage;
  this.superclass(target);
	if (target instanceof Hero) {
		generalAttackMessage = "I will attack only monsters"
	} else {
		generalAttackMessage = "Hero attacked, " + this.superclass.prototype.generalAttack.apply(this,target);
	return  generalAttackMessage;
};
};


GameChar.prototype.generalAttack = function (target){
  if (target.life>this.damage) {
    target.life=target.life-this.damage;
    return "done "this.damage" damage to " + targer.getCharClass();
  } else {
    target.life=0;
    return targer.getCharClass() + ' killed';
  };
};
