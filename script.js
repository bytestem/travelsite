$(document).ready(function(){   //try to change to vanilla js
    
    $("#top").click(function(){

            $('html, body').animate({

            scrollTop:0

            },1000);
        });
    
    $.each( $('*'), function() { 
    if( $(this).width() > $('body').width()) {
        console.log("Wide Element: ", $(this), "Width: ", $(this).width()); 
        } 
    });
});

function openSlideMenu(){
    document.getElementById('sidenav').style.width = "50%"; //ADD OVERLAY CLASS
}

function closeMenu(){
    document.getElementById('sidenav').style.width = "0";    //make background close menu
}



