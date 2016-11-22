var pathList = {
  "films": "http://swapi.co/api/films/",
  "people": "http://swapi.co/api/people/",
  "planets": "http://swapi.co/api/planets/",
  "species": "http://swapi.co/api/species/",
  "starships": "http://swapi.co/api/starships/",
  "vehicles": "http://swapi.co/api/vehicles/"
};
var urlList=new Object();

for (var key in pathList){
  loadURLs(pathList[key],key);
};

function loadURLs(url,key,urlList){
  if (!urlList){var urlList=new Object();};
  urlList[key] = [];
  fetch(url)
  .then(function(response) {return response.json()})
  .then(function(obj){
    for (var i=0;i<obj.results;i++){
      urlList.key.push(obj.results[i]['url']);
      console.log(urlList.key);
    };
    if (obj.next){loadURLs(obj.next,key,urlList)};
  })
  .catch(function(error){
    console.log(error.message);
  });
};
