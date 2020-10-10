let bottles = [];

function getBottles() {
   if (bottles.length != 0) {
      return bottles
   }

//TODO make API Query here

   bottles = [
      {
         name: "test bottle",
         country: "germany",
         colour: "red",
         year: 2012,
         grape: "pinot noir"
      }
   ]
   return bottles;

}

function createBottleDOM(bottle) {
   return $(`<h2>${bottle.name}</h2>`)
}











$(document).ready(() => {
   console.log("Bonjour! Je travaille");
   getBottles();

   $("#winerack").append(createBottleDOM(bottles[0]));


})
