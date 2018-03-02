
let photos = require("./state").createData();

console.log("There are this many photos:", photos.length);




console.time("Time to find() a photo by id");
let id = 5004;
let photo = photos.find((u) => {
  return (u.id === id);
})
console.log("Photo found by find(id)",photo.id);
console.timeEnd("Time to find() a photo by id");







let photosArray = [];
//re arrange the data to be stored with the id as the index
for(let i = 0; i< photos.length; i++){
  if(photos[i])
    photosArray[photos[i].id] = photos[i];
}
console.log("There are this many photos in the array:", photosArray.length);

console.time("Time to find a photo by the index");
photo = photosArray[id];
console.log("Photo found by array index", photo.id);
console.timeEnd("Time to find a photo by the index");




let photosIndexedOnTitle =  {};
//create another data structure that is organized by title
for(let i = 0; i< photos.length; i++){
  if(photos[i])
    photosIndexedOnTitle[photos[i].title] = photos[i];
}
console.log("Index Created");




console.time("Time to find() a photo by title");
photo = photos.find((u) => {
  return (u.title === "ratm");
})
console.log("Photo found by find(title)",photo.id);
console.timeEnd("Time to find() a photo by title");


console.time("Time to find a photo by title index");
photo = photosIndexedOnTitle["ratm"];
console.log("id found by find()",photo.id);
console.timeEnd("Time to find a photo by title index");


//okay manually do filter so that sort matters
console.time("Time to filter() photos by title");
let dirtphotos = photos.filter((u) => {
  return (u.title === "aicdirt");
})
console.log("Photos found by find(title)",dirtphotos.length);
console.timeEnd("Time to filter() photos by title");


console.time("Time to sort photos on title");
photos.sort((p1,p2) => {
  return (p1.title > p2.title);
})
console.timeEnd("Time to sort photos on title");