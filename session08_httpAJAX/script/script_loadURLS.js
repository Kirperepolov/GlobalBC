var pathList = {
  "films": "http://swapi.co/api/films/",
  "people": "http://swapi.co/api/people/",
  "planets": "http://swapi.co/api/planets/",
  "species": "http://swapi.co/api/species/",
  "starships": "http://swapi.co/api/starships/",
  "vehicles": "http://swapi.co/api/vehicles/"
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
  .catch(function(error){
    console.log(error.message);
  });
};
var urlList = getAllUrls(pathList);

function mainPage(){
  var mainContainer = document.getElementById('main-data');
  for (var key in pathList) {
    var block = document.createElement('div');
    block.id = key;
    block.className='col-sm-4'
    var list =  document.createElement('ul');
    for (var i in urlList[key]) {
      var listItem =  document.createElement('li');
      listItem.textContent = urlList[key][i]['name'];
      textContent.addEventListener('click',function(){loadData(urlList[key][i]['url'])});
      list.appendChild(listItem);
    };
    block.appendChild(list);
    mainContainer.appendChild(block);
  };
};
