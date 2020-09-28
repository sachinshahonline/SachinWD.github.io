


$(document).ready(function(){
  $("#Sachin_overlay").click(function(){
    $(".aboutoverlay, .modal").slideDown({top: '150px'},200); 
      $(".modal").animate({top: '0px'},200);
    $("#close").show(500);
//      $(".aboutoverlay , .modal").show(500);

  });
});


$(document).ready(function(){
  $("#Snehal_overlay").click(function(){
    $(".aboutoverlay_Snehal, .modal_Snehal").slideDown({top: '150px'},200);
      $(".modal_Snehal").animate({top: '0px'},200);
    $("#close_Snehal").show(500);
//      $(".aboutoverlay_Snehal , .modal_Snehal").show(500);

  });
});


$(document).ready(function(){
  $("#Suchita_overlay").click(function(){
    $(".aboutoverlay_Suchita, .modal_Suchita").slideDown({top: '150px'},200);
      $(".modal_Suchita").animate({top: '0px'},200);
    $("#close_Suchita").show(500);
//      $(".aboutoverlay_Suchita , .modal_Suchita").show(500);

  });
});



$(document).ready(function(){
  $("#Anil_overlay").click(function(){
    $(".aboutoverlay_Anil , .modal_Anil").slideDown({top: '150px'},200);
      $(".modal_Anil").animate({top: '0px'},200);
    $("#close_Anil").show(500);
//      $(".aboutoverlay_Anil , .modal_Anil").show(500);

  });
});

$(document).ready(function(){
  $("#Sushant_overlay").click(function(){
    $(".aboutoverlay_Sushant, .modal_Sushant").slideDown({top: '150px'},200);
      $(".modal_Sushant").animate({top: '0px'},200);
    $("#close_Sushant").show(500);
//      $(".aboutoverlay_Sushant , .modal_Sushant").show(500);

  });
});


$(document).ready(function(){
  $("#Dinesh_overlay").click(function(){
    $(".aboutoverlay_Dinesh , .modal_Dinesh").slideDown({top: '150px'},200); 
    $(".modal_Dinesh").slideDown({top: '0px'},200);
    $("#close_Dinesh").show(500);
//      $(".aboutoverlay_Dinesh , .modal_Dinesh").show(500);

  });
});





$(document).ready(function(){
    
    
    $("#close , #close_Snehal, #close_Suchita, #close_Anil, #close_Sushant, #close_Dinesh").click(function(){
//    $(".aboutoverlay , .aboutoverlay_Snehal, .aboutoverlay_Suchita , .aboutoverlay_Anil , .aboutoverlay_Sushant, .aboutoverlay_Dinesh").hide(500);
      
      
    $(".aboutoverlay , .aboutoverlay_Snehal, .aboutoverlay_Suchita , .aboutoverlay_Anil , .aboutoverlay_Sushant , .aboutoverlay_Dinesh").slideUp({top: '-600px'});
    $(".modal , .modal_Snehal, .modal_Suchita , .modal_Anil, .modal_Sushant, .modal_Dinesh").slideUp({top: '-800px'});
      
  });
});





$(document).ready(function(){
  $("#service, #portfolio, #about, #team, #contact ").click(function(){
    $("#collapsenavbar").toggle(500);
      
      
  });
});

$(document).ready(function(){
  $(".navbar-toggler").click(function(){
    $("#collapsenavbar").toggle(500);
      
      
  });
});



//form overlay
var subscribe = document.getElementById('id01');

window.onclick = function(event) {
    
    if (event.target == subscribe) {
        subscribe.style.display = "none";
    }
}




$(document).ready(function(){
                
                    $('#usercheck').hide();
                    $('#passcheck').hide();
                    
                    
                    var user_err = true;
                    var pass_err = true;
                    
                    
                    $('#usernames').keyup(function(){
                        username_check();
                    
                    });
                    
                    function username_check(){
                    
                        var user_val = $('#usernames').val();
                        
                        if(user_val.length == ''){
                            $('#usercheck').show();
                            $('#usercheck').html("**Please Fill the Name");
                            $('#usercheck').focus();
                            $('#usercheck').css("color" , "red");
                            user_err = false;
                            return false;
                            
                        }else{
                            $('#usercheck').hide();
                        }
                        
                        if( (user_val.length < 3 ) || (user_val.length > 10) ){
                            $('#usercheck').show();
                            $('#usercheck').html("Name Length must be between 3 to 10");
                            $('#usercheck').focus();
                            $('#usercheck').css("color" , "red");
                            user_err = false;
                            return false;
                            
                        }else{
                            $('#usercheck').hide();
                        }
                        
                    }
                    
                    
                        $('#password').keyup(function(){
                            password_check();
                        
                        });
                    
                        function password_check(){
                            
                            var passwrdstr = $('#password').val();
                            
                            if(passwrdstr.length == ''){
                                $('#passcheck').show();
                                $('#passcheck').html("Enter Complete Email Address");
                                $('#passcheck').focus();
                                $('#passcheck').css("color" , "red");
                                pass_err = false;
                                return false;
                                
                            }else{
                                $('#passcheck').hide();
                            }
                            
                            if( (passwrdstr.length < 7 ) || (passwrdstr.length > 35) ){
                            $('#passcheck').show();
                            $('#passcheck').html("Enter Proper Email Address");
                            $('#passcheck').focus();
                            $('#passcheck').css("color" , "red");
                            user_err = false;
                            return false;
                            
                        }else{
                            $('#passcheck').hide();
                        }
                                
                               
                               }
                        

                           
                    $('#submitbtn').click(function(){
                       
                    
                        user_err = true;
                        pass_err = true;
                        
                        
                        username_check();
                        password_check();
                        
                        
                        
                        if((user_err == true ) && (pass_err == true))
                            
                        {
                           $('#id01').hide(0);
                            return true;
                           
                            
                            
                        }else{
                            
                            $.alert({
                                title: 'Alert!',
                                content: 'Please Fill the Form Correctly!',
                            });
                            return false;
                            
                            
                        
                        }
                    
                    });                   
                    
                });

                