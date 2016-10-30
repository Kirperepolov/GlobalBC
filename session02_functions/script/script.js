document.getElementById('actionStart').addEventListener('click',function(){
  var input = document.getElementById('value1').value;
  document.getElementById('output').innerHTML = extractCharacters(input) +'<br>'+ myLogger(input);
});
