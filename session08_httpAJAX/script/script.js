// var charHeader = document.createElement('h2');
// var charPic = document.createElement('div');
// var charSuplData = document.createElement('div');
// var charFilms = document.createElement('div');
// var charInfo = document.createElement('div');
// var lineBrake = document.createElement('br');
// charHeader.id='charHeader';
// charPic.id='charPic';
// charSuplData.id='charSuplData';
// charFilms.id='charFilms';
// charInfo.id='charInfo';


var API = 'http://swapi.co/api/';
var planet = 'planets/1/';
var person = 'people/1/';
// var movie;
var path = API+planet;

// Запрос на начальную информацию
loadData(path);

/**
 * definition for the most separate functions;
 */
function loadData(path){
  fetch(path)
  .then(function(response) {return response.json()})
  .then(function(json){
    createMainContainer(json,path);
    getCharInfo(json);
    getFilms(json);
    getSuplData(json);
  });
}


function createMainContainer(obj,path){
  var container = document.getElementsByClassName('container')[0];
  container.innerHTML = null;
  var charHeader = document.createElement('h2');
  charHeader.id='charHeader';
  var title;
  if (~path.indexOf('planet')) {
    title = 'Planet ';
  } else if (~path.indexOf('starships')){
    title = 'Starship ';
  } else {
    title = null;
  };
  charHeader.textContent = title ? title + obj['name'] : obj['name'];

  var infoBlock = document.createElement('div');
  infoBlock.className='infoBlock';
  var charPic = document.createElement('div');
  charPic.id='charPic';
  var charInfo = document.createElement('div');
  charInfo.id='charInfo';
  // var lineBrake = document.createElement('br');
  var charFilms = document.createElement('div');
  charFilms.id='charFilms';
  var charSuplData = document.createElement('div');
  charSuplData.id='charSuplData';
  infoBlock.appendChild(charPic);
  infoBlock.appendChild(charInfo);
  infoBlock.appendChild(charFilms);
  infoBlock.appendChild(charSuplData);
  container.appendChild(charHeader);
  // container.appendChild(lineBrake);
  container.appendChild(infoBlock);
};

function getCharInfo(obj){
  var charInfo = document.getElementById('charInfo');
  for (key in obj) {
    if (typeof obj[key] !== 'object' &&
    key !== 'created' &&
    key !== 'edited' &&
    key !== 'url' &&
    key !== 'homeworld') {
      var infoLine = document.createElement('p');
      infoLine.textContent = key.replace("_", " ") +'\: '+ obj[key];
      charInfo.appendChild(infoLine);
    };
  };
};

function getCharPhoto(obj) {
  var charPic = document.getElementById('charPic');
  // var infoLine = document.createElement('p');
  // infoLine.textContent = key.replace("_", " ") +'\: '+ obj[key];
  // charInfo.appendChild(infoLine);
};

function getSuplData(obj){
  var charSuplData = document.getElementById('charSuplData');
  var infoTitle = document.createElement('h3');
  var linksArray=[];
  if (obj.residents) {
    infoTitle.textContent = 'Residents';
    charSuplData.appendChild(infoTitle);
    linksArray = obj.residents;
  } else if (obj.homeworld){
    infoTitle.textContent = 'Homeworld';
    charSuplData.appendChild(infoTitle);
    linksArray.push(obj.homeworld);
  } else if (obj.pilots) {
    infoTitle.textContent = 'Pilots';
    charSuplData.appendChild(infoTitle);
    linksArray = obj.pilots;
  } else if (obj.planets){
    infoTitle.textContent = 'Planets';
    charSuplData.appendChild(infoTitle);
    linksArray = obj.planets;
  };
  loadSupplementaryData(linksArray,charSuplData);
};

function getFilms(obj){
  var charFilms = document.getElementById('charFilms');
  var filmTitle = document.createElement('h3');
  var linksArray=[];
  if (obj.films) {
    filmTitle.textContent = 'Movies';
    charFilms.appendChild(filmTitle);
    linksArray = obj.films;
  } else if (obj.starships){
    filmTitle.textContent = 'Starships';
    charFilms.appendChild(filmTitle);
    linksArray = obj.starships;
  };
  loadSupplementaryData(linksArray,charFilms);
};
/* i've decided to define a separate function to download "links" and
* to use it for any appropriate case
*/
function loadSupplementaryData(arr,division){
  var list = document.createElement('ul');
  division.appendChild(list);
  for (var key in arr) {
    fetch(arr[key])
    .then(resp=>resp.json())
    .then(function(json){
      var infoLink = document.createElement('li');
      infoLink.addEventListener('click',function(){
        var path = arr[key];
        loadData(path)
      });
      infoLink.textContent = json.name?json.name:json.title;
      list.appendChild(infoLink);
    })
  };
}
