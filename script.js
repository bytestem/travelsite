$(document).ready(function(){
    
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

function closeSlideMenu(){
    
    document.getElementById('sidenav').style.width = "0";
}