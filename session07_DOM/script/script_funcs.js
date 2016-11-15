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



function queryNode(string){
  if (string.nodetype) {
    return nodeTypes[string.nodetype];
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
