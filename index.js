let bottles = [];

function getBottles() {
   if (bottles.length != 0) {
      return bottles
   }

//TODO make API Query here

   bottles = [
      {
         name: "yummy vintage wine",
         country: "french",
         colour: "red",
         year: 1912,
         grape: "pinot noir"
      },
      {
         name: "the good stuff",
         country: "germany",
         colour: "white",
         year: 2015,
         grape: "chardonnay"
      },
      {
         name: "gewurztrayumyum",
         country: "germany",
         colour: "bubbles",
         year: 2018,
         grape: "pinot noir"
      },
      {
         name: "another delishus red wine",
         country: "chile",
         colour: "red",
         year: 2012,
         grape: "malbec"
      }


   ]
   return bottles;

}

function createBottleDOM(bottle) {
   if (bottle.colour === "white") {
      return $(`<div class="col-sm">
      <img alt="White Wine" src="./assets/whiteWine.png"
         height=150px>
         <table style = width 10%>
           <tr>
             <th> name </th>
             <th> country </th>
             <th> colour  </th>
             <th> year  </th>
             <th> grape </th>
           </tr>
           <td>${bottle.name}</td>
           <td>${bottle.country}</td>
           <td>${bottle.colour}</td>
           <td>${bottle.year}</td>
           <td>${bottle.grape}</td>
          </tr>
          </table>
      </div>`)
   }
   else if (bottle.colour === "red") {
      return $(`<div class="col-sm">
      <img alt="Red Wine" src="./assets/redWine.png"
         height=150px>
         <table style = width 100%>
           <tr>
             <th> name </th>
             <th> country </th>
             <th> colour  </th>
             <th> year  </th>
             <th> grape </th>
           </tr>
           <td>${bottle.name}</td>
           <td>${bottle.country}</td>
           <td>${bottle.colour}</td>
           <td>${bottle.year}</td>
           <td>${bottle.grape}</td>
          </tr>
          </table>
      </div>`)
   }
   else if (bottle.colour === "bubbles") {
      return $(`<div class="col-sm">
      <img alt="Red Wine" src="./assets/bubbles.png"
         height=150px>
         <table style = width 100%>
           <tr>
             <th> name </th>
             <th> country </th>
             <th> colour  </th>
             <th> year  </th>
             <th> grape </th>
           </tr>
           <td>${bottle.name}</td>
           <td>${bottle.country}</td>
           <td>${bottle.colour}</td>
           <td>${bottle.year}</td>
           <td>${bottle.grape}</td>
          </tr>
          </table>
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
