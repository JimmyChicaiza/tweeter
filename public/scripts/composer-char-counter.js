

import { on } from "cluster";

// caracter counter

$(document).ready(function() {
    
    $(".new-tweet form textarea").on("keydown", (event) => { 

     const maxNum = 140;
     const lengthAllowed = $(this).val().length;

     //console.log($()(this).val());
     
        const countBack = maxNum - lengthAllowed;
        const colorChange = countBack < 0 ? "orange" : "FE7F01";
        $(".counter").css("color", colorChange);
        $(".counter").text(countBack);
           
    });
 
  });