/**
** ПОРІВНЯННЯ ОБ'ЄКТІВ ЗА ВЛАСТИВІСТЮ
**/

function compareObjects (obj1, obj2, keyNum) {
  return obj1[keyNum]>obj2[keyNum]? obj1['name']: obj2['name'];
};

// конструктор об'єкту
function ObjectCreator(name) {
  this.name = name;
  var prop;
  var value;
  for (var i=1;i<5;i++) {
    prop = 'num'+i;
    value = Math.round(Math.random()*1000);
    this[prop] = value;
  }
};

// створення першого об'єкту за допомогою конструктору
var object01 = new ObjectCreator('object01');

// створення другого об'єкту за допомогою літерального опису
var object02 = {
  name:'object02',
  num1:435,
  num2:22,
  num3:868,
  num4:486
};
// порівняння об'єктів
console.log(compareObjects(object01,object02,'num1'));


/**                                                           **
**                      ПОШУК УЛЮБЛЕНОЇ ПІСНІ                 **
**                                                            **/
//для отримання випадкового числа
function randomizer(rank){
  return Math.round(Math.random()*rank);
};

// для зручності опису пісень
function Songs(artist,name) {
  this['artist'] = artist;
  this['name'] = name;
  this['played'] = randomizer(30);
  this['refIndex'] = randomizer(100000);
};

//опис колекції пісень в одному об'єкті
var songCollection = {};
songCollection['song1'] = new Songs('Metallica','Fuel');
songCollection['song2'] = new Songs('Gogol Bordello','Alcohol');
songCollection['song3'] = new Songs('Limp Bizkit','Faith');
songCollection['song4'] = new Songs('Nirvana','Son Of A Gun');
songCollection['song5'] = new Songs('Vася Club','Авдєй');


function favoriteSong(obj){
  var result = 0;
  var name, played, index;
  for (var song in obj) {
    if (obj[song].played>=result) {
      result = obj[song]['played'];
      name = obj[song]['artist'] +' - '+ obj[song]['name'];
      played = obj[song]['played'];
      index = obj[song]['refIndex'];
    };
  };
  //the string is too long to be placed in a single line
  return ('The song \"' + name + '\" was played '+ played +
  ' times and is supposed to be the favorite one. It\'s index is:' + index);
};
console.log(favoriteSong(songCollection));


/**                                                           **
**                      КЛАС КАЛЬКУЛЯТОР                      **
**                                                            **/
function Calculator(arr,index){
  this.array = arr;
  this.add = function(arr){
    var sum = 0;
    for (var i=0;i<arr.length;i++) {
      if (typeof arr[i] === 'number'&& !isNaN(arr[i]) && isFinite(arr[i])) {
        sum += arr[i];
      };
    };
    return sum;
  };
  this.getCurrentSum = function(arr,index){
    var sumIndex = 0;
    for (var i=0;i<arr.length;i++) {
      if (typeof arr[i] === 'number'&& !isNaN(arr[i]) && isFinite(arr[i]) && (i<index||index === undefined)) {
        sumIndex += arr[i];
      };
    };
    return sumIndex;
  };
};

var array1 = [3,8,11];
var array2 = [5,12,17];

var objCalc1 = new Calculator(array1);
var objCalc2 = new Calculator(array2);


console.log(
  'Сумма всех чисел всех объектов: ' + (+objCalc1['add'](objCalc1.array) + +objCalc2['add'](objCalc2.array))
);
console.log(
  'Сумма всех чисел всех объектов на втором шаге: ' + (+objCalc1['getCurrentSum'](objCalc1.array,2) + +objCalc2['getCurrentSum'](objCalc2.array,2))
);
console.log(
  'Сумма для одного объекта после третьего шага: ' + (+objCalc1['getCurrentSum'](objCalc1.array,3) + ' и общая результирующая сумма: ' + objCalc1['add'](objCalc1.array))
);












//END
