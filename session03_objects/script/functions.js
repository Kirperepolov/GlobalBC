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
var songCollection = [];
songCollection[0] = new Songs('Vася Club','Авдєй');
songCollection[1] = new Songs('Metallica','Fuel');
songCollection[2] = new Songs('Gogol Bordello','Alcohol');
songCollection[3] = new Songs('Limp Bizkit','Faith');
songCollection[4] = new Songs('Nirvana','Son Of A Gun');


function favoriteSong(arr){
  var result = arr[0]['played'];
  var name = arr[0]['artist'] +' - '+ arr[0]['name'];
  var played = arr[0]['played'];
  var index = arr[0]['refIndex'];
  for (var i=1;i<arr.length;i++) {
    if (arr[i].played>=result) {
      result = arr[i]['played'];
      name = arr[i]['artist'] +' - '+ arr[i]['name'];
      played = arr[i]['played'];
      index = arr[i]['refIndex'];
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
function Calculator(arr){
  var numbersArray = arr;
  this.add = function(){
    var sum = 0;
    for (var i=0;i<numbersArray.length;i++) {
      /**
       *  this "if" can be missed, however it was stated to avoid possible
       *  mistakes in inputs
       */
      if (typeof numbersArray[i] === 'number'&& !isNaN(numbersArray[i]) && isFinite(numbersArray[i])) {
        sum += numbersArray[i];
      };
    };
    return sum;
  };

  this.getCurrentSum = function(index){
    var sumIndex = 0;
    for (var i=0;i<numbersArray.length;i++) {
      if (typeof numbersArray[i] === 'number'&& !isNaN(numbersArray[i]) && isFinite(numbersArray[i]) && (i<index||index === undefined)) {
        sumIndex += numbersArray[i];
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
  'Сумма всех чисел всех объектов: ' + (+objCalc1['add']() + +objCalc2['add']())
);
console.log(
  'Сумма всех чисел всех объектов на втором шаге: ' + (+objCalc1['getCurrentSum'](2) + +objCalc2['getCurrentSum'](2))
);
console.log(
  'Сумма для одного объекта после третьего шага: ' + (+objCalc1['getCurrentSum'](3) + ' и общая результирующая сумма: ' + objCalc1['add']())
);

/**                                                           **
**                             DEEP COPY                      **
**                                                            **/

function naiveDeepCopy( original )
{
    // First create an empty object with
    // same prototype of our original source
    var clone = Object.create(Object.getPrototypeOf(original));

    var i;
    var keys = Object.getOwnPropertyNames(original);

    for (i = 0; i<keys.length; i++){

        // copy each property into the clone
        Object.defineProperty(clone, keys[i],
            Object.getOwnPropertyDescriptor(original, keys[i])
        );
    }

    return clone ;
}


function blabla( original )
{

    for (i = 0; i<keys.length; i++){
                  console.log(Object.getOwnPropertyNames(original, keys[i]));
    }

}





//END
