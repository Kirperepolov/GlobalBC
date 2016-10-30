function extractCharacters(str){
    str = str.toLowerCase();
    var a = [];
    for (var i=0;i<str.length;i++) {
      if (a.indexOf(str[i])===-1){
        a.push(str[i]);
      };
    };
    return a;
};


function createLogger(prefix){
  return function(postfix){
    var d = new Date();
    return d.toISOString() + ' ' + prefix + ' '+ postfix;
  }
}

var myLogger = createLogger('My Logger:');
