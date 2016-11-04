// session 02, task 1: extractCharacters
function extractCharacters(str){
    str = str.toLowerCase();
    var a = [];
    for (var i=0;i<str.length;i++) {
      if (a.indexOf(str[i])===-1){
        a.push(str[i]);
      };
    };
    console.log(a);
    return a;
};


//session 02, task 2: a Logger function
function createLogger(prefix){
  return function(){
    var d = new Date();
    var result = d.toISOString() + ' ' + prefix + ' ' + arguments;
    // for (var i in arguments) /**{
    //   if (typeof arguments[i] === 'object') {
    //     result += ' Object ' + JSON.stringify(arguments[i]);
    //   } else**/ {
    //    result += ' ' + arguments[i];
    //   };
    // //};
    function logContext(){
      console.log(arguments);
    }
    logContext.call(arguments, result);
    return result
  }
}

var myLogger = createLogger('My Logger:');


/**
 *
 */

 function createLogger2(prefix){
   return function(){
    var d = new Date();
    // var argsArray = [];
    // for (var i = 0; i < arguments.length; i++) {
    //   argsArray[i] = arguments[i];
    // };
    function logToConsole(array) {
      for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
      };
    }
    console.log(d.toISOString() + ' ' + prefix + ' ') + logToConsole(arguments);
      ;

   };
 }

 var myLogger2 = createLogger2('My Logger:');




// session 02, task 3:
// a function that will take any number of arguments and return their sum.
function summarize() {
  var result = 0;
  for (var i=0;i<arguments.length;i++) {
    if (typeof arguments[i] === 'number') {
      result += arguments[i];
    } else if (Array.isArray(arguments[i])) {
      result += arguments[i].reduce(function(sum, current) {
        return sum + current;
      },0);
    };
  };
  console.log(result);
  return result;
}

// session 02, task 5:
// a function celsiusToFahrenheit
function celsiusToFahrenheit(degree) {
  var convertionResult = degree*1.8+32;
  var result = degree + String.fromCharCode(8451) + " is " + convertionResult + String.fromCharCode(8457);
  console.log(result);
  return result;
};
// a function celsiusToFahrenheit
function fahrenheitToCelsius(degree) {
  var convertionResult = (degree-32)/1.8;
  var result = degree + String.fromCharCode(8457) + " is " + convertionResult + String.fromCharCode(8451);
  console.log(result);
  return result;
};

// session 02, task 6:
// the longest word is not completed yet
