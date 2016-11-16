/**
0. Создать функицю, которая принимает строку селектор и возвращает:
- undefined - если ничего не найдено
- найденную ноду - если она одна
- массив нод - если их несколько
- если в функцию передать ноду, функция возвращает ее тип (Node, Text, Comment etc)
*/
var nodeTypes = {
  1:	'ELEMENT_NODE',
  2:	'ATTRIBUTE_NODE',
  3:	'TEXT_NODE',
  4:	'CDATA_SECTION_NODE',
  5:	'ENTITY_REFERENCE_NODE',
  6:	'ENTITY_NODE',
  7:	'PROCESSING_INSTRUCTION_NODE',
  8:	'COMMENT_NODE',
  9:	'DOCUMENT_NODE',
  10: 'DOCUMENT_TYPE_NODE',
  11: 'DOCUMENT_FRAGMENT_NODE',
  12: 'NOTATION_NODE',
};



function queryNodes(string){
  if (string.nodeType) {
    return nodeTypes[string.nodeType];
  }
  else {
    var result = document.querySelectorAll(string);
    if (result.length===0) {
      return undefined
    } else if (result.length===1) {
      return result[0];
    } else {
      return result;
    };
  };
};
/**
1. Создать функцию, которая принимает строку селектор и возвращает:
- undefined - если ничего не найдено
- найденную ноду - если она одна
- первую найденную ноду - если их несколько
*/
function querySingleNode(string){
  if (string.nodeType) {
    throw new Error('Your input is already a ' +nodeTypes[string.nodeType]);
  }
  else {
    var result = document.querySelector(string);
    return result ? result : undefined;
  };
};

/*
2. Создать функцию аналог функции DOM insertBefore, но вставляет не до, а после указанного элемента.
*/
function inserAfter(newElement, referenceElement){
  referenceElement.parentNode.insertBefore(newElement,referenceElement.nextSibling);
};
// div.parentNode.insertBefore(div2, div.nextSibling);
/*
3. Создать функцию, которая выдает значение атрибута или ставит его значение.

Чтение.
Что имеется в виду - Допустим есть элемент:

<titanic style="float:none"></titanic>

Если передать в функцию 'style' - она должна выдать "float:none"

<ninja color="black" visibility="hidden"></ninja>

Если передать в функцию 'color' - она должна выдать "black"

Установка.
Что имеется в виду - Допустим есть элемент:

<lego></lego>

Если передать в функцию два параметра - атрибут и значение, то нода должна выглядеть

<lego style="display:block"></lego>


Если значение этого атрибута уже задано, устанавливается новое значение.

Было:
<chucknorris speed="5"></chucknorris>

После вызова функции с передачей атрибута и значения (speed Infinity):
<chucknorris speed="Infinity"></chucknorris>
*/
function attributeFunc(elem,attrName,attrVal){
  if (attrVal) {
    elem.setAttribute(attrName,attrVal);
  } else {
    return elem.getAttribute(attrName);
  };
}
/*
4. С помощью JS создайте шахматное поле:
- контейнер поля
- 64 ребёнка (ячейки) элементы (проще позиционировать с помощью float)
- ячейки раскрашены белым и черным
- нужные атрибуты и стили задавайте с помощью JS
*/
function createChess(){
  var fieldStyle = 'border:1px solid #000;box-sizing:content-box;width: 400px;height:400px;margin:170px auto;padding:0;display:block';
  var blackBlock = 'width:50px;height:50px;background-color:#000;margin:0;float:left;';
  var whiteBlock = 'width:50px;height:50px;background-color:#fff;margin:0;float:left;';
  var field = document.createElement('div');
  field.setAttribute('style', fieldStyle);
  field.className = 'container';
  for (var raw=0;raw<8;raw++){
    for (var col=0;col<8;col++){
      var block = document.createElement('div');
      if ((col+raw)%2) {
        block.setAttribute('style', blackBlock);
      } else {
        block.setAttribute('style', whiteBlock);
      };
      field.appendChild(block);
    };
  }
  var container = document.querySelector('.container')
  container.parentNode.replaceChild(field,container);
};

/**
5. Реализовать игру Пятнашки. (Пример - http://scanvord.net/pyatnashki/)
    - контейнер поля <div class=“battle-field”></div>
- c помощью JS создать ячейки 1..15
    - назначить необходимые обработчики событий
*/
function create15(){
  var field = document.createElement('div');
  field.className = 'container';

  var startButton = document.createElement('input');
  startButton.setAttribute("type", "button");
  startButton.id = 'actionStart';
  startButton.setAttribute("value", "Start!");

  var gameField = document.createElement('div');
  gameField.className = 'battle-field';
  gameField.id= 'game';

  var statistics = document.createElement('div');
  statistics.className = 'statistics';

  var scoreBlock = document.createElement('div');
  scoreBlock.id = 'max-score';

  var stepsBlock = document.createElement('div');
  stepsBlock.id = 'steps';
  statistics.appendChild(scoreBlock);
  statistics.appendChild(stepsBlock);
  field.appendChild(startButton);
  field.appendChild(gameField);
  field.appendChild(statistics);
  function createBlocks(){
    for (var i=1;i<=15;i++){
      var block = document.createElement('div');
      block.className = 'block';
      block.innerText = i;
      block.id = 'id'+i;
      gameField.appendChild(block);
    };
    var block = document.createElement('div');
    block.className = 'block';
    block.id= 'emptyBlock';
    gameField.appendChild(block);
    stepsBlock.textContent = '0';
  }
  createBlocks();
  var container = document.querySelector('.container')
  container.parentNode.replaceChild(field,container);
};
document.addEventListener("DOMContentLoaded", create15());

// document.getElementById('actionStart').addEventListener('click', createBlocks());

// CHESSGAME
// to set EventListeners on all the game blocks
for (var i=1;i<=15;i++) {
  var gameBlock = document.getElementById('id'+i);
  gameBlock.onclick = blockGame;
};

function blockGame(){
  // console.log(this);
  var emptyBlock = document.getElementById("emptyBlock");
  var steps = +document.getElementById('steps').textContent;
  if (this.nextElementSibling === emptyBlock) {
    this.parentNode.insertBefore(emptyBlock,this);
    steps++;
  } else if (this.previousElementSibling === emptyBlock) {
    this.parentNode.insertBefore(this,emptyBlock);
    steps++;
  };  
  document.getElementById('steps').textContent = steps;
};
