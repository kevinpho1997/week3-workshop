$( document ).ready(function() {

    $("#loginform").submit(function(event){
        event.preventDefault();
        console.log( "ready!" );
        ajaxPost();
    });

    function ajaxPost(){
        var formData = {
            username: $("#username").val(),
            password: $("#password").val()
        };
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: window.location + "login",
            data: JSON.stringify(formData),
            dataType: 'json',
            success: function(customer) {
                if (customer.valid == true) {
                    $("#loginform").addClass("success");
                    $("#loginform").removeClass("fail");
                } else {
                    $("#loginform").removeClass("success");
                    $("#loginform").addClass("fail");
                }
                $("#postResultDiv").html("<p>" + "Post Succesfully! <br>" + "Username" + customer.username + "Password:"
                + customer.password + "</br>" + "Valid user:" + customer.valid + "</p>");
            },
            error: function(err) {
                alert("Error")
                console.log("Error: ", err);
            }
        });
        resetData();
    }
    function resetData() {
        $("#username").val("");
        $("#password").val("");
    }
});