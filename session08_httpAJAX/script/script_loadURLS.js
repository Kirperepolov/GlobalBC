var pathList = {
  "people": "http://swapi.co/api/people/",
  "planets": "http://swapi.co/api/planets/",
  "vehicles": "http://swapi.co/api/vehicles/",
  "species": "http://swapi.co/api/species/",
  "starships": "http://swapi.co/api/starships/",
  "films": "http://swapi.co/api/films/"
};



function getAllUrls(pathList){
  var urlList=new Object();
  for (var key in pathList){
    urlList[key] = [];
    loadURLs(pathList[key],key,urlList);
  };
  return urlList;
};


function loadURLs(url,key,urlList){

  fetch(url)
  .then(function(response) {return response.json()})
  .then(function(obj){
    for (var i=0;i<obj.results.length;i++){
      urlList[key].push(
        {'url':obj.results[i]['url'],
        'name':(obj.results[i]['name']||obj.results[i]['title'])}
      )
    };
    if (obj.next){loadURLs(obj.next,key,urlList)};
  })
  .then(function(urlList){
    var infoBlock = document.getElementById('infoBlock');
    var children = infoBlock.querySelectorAll('div');
    var childredIds = [];
    for (var i=0;i<children.length;i++){
      childredIds.push(children[i].id)
    };
    
  })
  .catch(function(error){
    console.log(error.message);
  });
};
var urlList = getAllUrls(pathList);

function mainPage(urlList){
  var mainContainer = document.getElementById('main-data');
  mainContainer.innerHTML = null;
  var infoBlock = document.createElement('div');
  infoBlock.className='infoBlock';
  mainContainer.appendChild(infoBlock);
};


function loadCategories(urlList){
  var infoBlock = document.getElementById('infoBlock');
  for (var key in pathList) {
    var block = document.createElement('div');
    block.id = key;
    block.className='col-sm-4';
    var title = document.createElement('h3');
    title.textContent = key.toUpperCase();
    title.className= 'pointer';
    title.addEventListener('click',toggleList);
    var list =  document.createElement('ul');
    list.className='hidden';
    for (var i in urlList[key]) {
      var listItem =  document.createElement('li');
      listItem.textContent = urlList[key][i]['name'];
      listItem.url = urlList[key][i]['url'];
      listItem.addEventListener('click',function(){
        loadData(this.url);
      });
      list.appendChild(listItem);
    };
    block.appendChild(title);
    block.appendChild(list);
    infoBlock.appendChild(block);
  };

  function toggleList(){
    var list = this.parentNode.querySelector('ul');
    if (list.className === 'hidden'){
      list.className = null;
    } else {list.className = 'hidden'};
  };
};
