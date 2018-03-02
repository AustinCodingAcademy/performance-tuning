//imagine this is data from a database
var randomWords = require('random-words');

exports.createData  = function (){
  let photos = [];
  for(let i =0; i < 1000000; i ++){
    photos[i] =  {
      "albumId": 2,
      "id":  i,
      "title": randomWords(),
      "url": "http://placehold.it/600/75334a",
      "thumbnailUrl": "http://placehold.it/150/75334a"
    };
  }
  for(let i =1000000; i < 1000020; i ++){
    photos[i] =  {
      "albumId": 2,
      "id":  i,
      "title": "aicdirt",
      "url": "http://placehold.it/600/75334a",
      "thumbnailUrl": "http://placehold.it/150/75334a"
    };
  }
  photos.push({
    "albumId": 2,
    "id": 1000020,
    "title": "ratm",
    "url": "http://placehold.it/600/75334a",
    "thumbnailUrl": "http://placehold.it/150/75334a"
  });
  for(let i =1000021; i < 1000030; i ++){
    photos[i] =  {
      "albumId": 2,
      "id": i,
      "title": "aicdirt",
      "url": "http://placehold.it/600/75334a",
      "thumbnailUrl": "http://placehold.it/150/75334a"
    };
  }
  for(let i =1000030; i < 2000000; i ++){
    photos[i] =  {
      "albumId": 2,
      "id":  i,
      "title": randomWords(),
      "url": "http://placehold.it/600/75334a",
      "thumbnailUrl": "http://placehold.it/150/75334a"
    };
  }

  return photos;
}