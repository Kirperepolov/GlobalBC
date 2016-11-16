var field = document.getElementById('game');
function createBlocks(){
  for (var i=1;i<=15;i++){
    var block = document.createElement('div');
    block.className = 'block';
    block.innerText = i;
    block.setAttribute('id', 'id'+i);
    field.appendChild(block);
  };
  var block = document.createElement('div');
  block.className = 'block';
  block.setAttribute('id', 'emptyBlock');
  field.appendChild(block);
  document.getElementById('steps').innerHTML = '0';
}
createBlocks();

// document.getElementById('actionStart').addEventListener('click', createBlocks());
