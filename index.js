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
         colour: "white",
         year: 2012,
         grape: "pinot noir"
      },
      {
         name: "test bottle3",
         country: "germany",
         colour: "bubbles",
         year: 2012,
         grape: "pinot noir"
      },
      {
         name: "test bottle4",
         country: "germany",
         colour: "red",
         year: 2012,
         grape: "pinot noir"
      }

   ]
   return bottles;

}

function createBottleDOM(bottle) {
   if (bottle.colour === "white") {
      return $(`<div class="col-sm">
      <img alt="White Wine" src="./assets/whiteWine.png"
         height=150px>
      </div>`)
   }
   else if (bottle.colour === "red") {
      return $(`<div class="col-sm">
      <img alt="Red Wine" src="./assets/redWine.png"
         height=150px>
      </div>`)
   }
   else if (bottle.colour === "bubbles") {
      return $(`<div class="col-sm">
      <img alt="Red Wine" src="./assets/bubbles.png"
         height=150px>
      </div>`)
   }
   else {
   return $(`<div class="col-sm">
      <h3>${bottle.name}</h3>
   </div>`)
}
}


$(document).ready(() => {
   console.log("Bonjour! Je travaille");
   console.log(parseInt(4/3));
   getBottles();

   for (let i=0;i<bottles.length;i++) {
      $("#winerack").append(createBottleDOM(bottles[i]))
   }
})
