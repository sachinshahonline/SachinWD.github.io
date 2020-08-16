
$(document).ready(function(){
  $("#about").click(function(){
    $(".aboutoverlay").animate({top: '150px'},200);
//    $(".modal").animate({top: '0px'},200);   
    $("#close").show(500);
      $(".aboutoverlay , .modal").show(500);

  });
});


//$(document).ready(function(){
//  $("#bluebar").click(function(){
//    $(".aboutoverlay").animate({top: '10%'});
//  });
//});



$(document).ready(function(){
  $("#close").click(function(){
    $(".aboutoverlay").hide(500);
    $(".aboutoverlay").animate({top: '-600px'});
    $(".modal").hide(500);
      
  });
});



//form overlay


var modal = document.getElementById('id01');

window.onclick = function(event) {
    
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




//function validateForm() {
//    console.log("Hello world!");
//  var x = document.forms["myForm"]["fname"].value;
//  if (x == "") {
//    alert("Name must be filled out");
//    return false;
//  }
//}