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
      },
      {
         name: "test bottle2",
         country: "germany",
         colour: "red",
         year: 2012,
         grape: "pinot noir"
      },
      {
         name: "test bottle3",
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

   for (let i=0;i<bottles.length;i++) {
      $("#winerack").append(createBottleDOM(bottles[i]))
   }



})
