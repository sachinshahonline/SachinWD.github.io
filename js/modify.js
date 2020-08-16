
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

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}