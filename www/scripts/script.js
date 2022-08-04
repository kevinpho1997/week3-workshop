$( document ).ready(function() {
    console.log( "ready!" );
    $("loginform").submit(function(event){
        event.preventDefault();
        ajaxPost();
    });

    function ajaxPost(){
        var formData = {
            username: $("#username").val(),
            password: $("#password").val()
        };

        
    }
});