function compareObjects (obj1, obj2, keyNum) {
  return obj1[keyNum]>obj2[keyNum]? obj1['name']: obj2['name'];
};


var object01 = {
  name:'object01',
  num1:324,
  num2:345,
  num3:89,
  num4:69877,
  toString: function() {
    var result = [];
    for (var param in object01) {
      result.push(object01[param]);
    };
    return result;
  }
};

var object02 = {
  name:'object02',
  num1:435,
  num2:22,
  num3:8678,
  num4:46986,
  toString: function() {
    var result = [];
    for (var param in object02) {
      result.push(object02[param]);
    };
    return result;
  }
};
console.log(compareObjects(object01,object02,'num1'));
