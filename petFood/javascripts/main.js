'use strict';

console.log("hello");

const $ = require('jquery');

$.ajax({
    url:'../data/dogfood.json'
})
.done((dogData)=>{
    //loop through first array
    dogData.dog_brands.forEach((brand) => {
      console.log(brand); 
      let $dogFood = $("#dogFood");
      $dogFood.append(`<h3>${brand.name}</h3>`);
      //loop through brand type Array
      brand.types.forEach((brandType)=>{
        $dogFood.append(`<h4>${brandType.type}</h4>`);
        // loop through the brandType's volumes array
            brandType.volumes.forEach((vol)=>{
                $dogFood.append(`<h5>Size: ${vol.name} Price: $${vol.price}</h5>`);
    
            });

      });
    });
})
.fail((error)=>{
    console.log("error",error.statusText);
});