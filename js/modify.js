



$(document).ready(function(){
  $("#about").click(function(){
    $(".aboutoverlay").animate({top: '150px'},200);
//    $(".modal").animate({top: '0px'},200);   
    $("#close").show(500);
      $(".aboutoverlay , .modal").show(500);

  });
});





$(document).ready(function(){
  $("#close").click(function(){
    $(".aboutoverlay").hide(500);
    $(".aboutoverlay").animate({top: '-600px'});
    $(".modal").hide(500);
      
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

                