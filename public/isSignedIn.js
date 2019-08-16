$(document).ready(function () {
    checkUser();
    function checkUser() {
        $.get("/api/check", {})
            .then(function (res) {
                console.log(res.name);
                if (res.status) {
                    $(".navStatus").html(`
                    <span><a href="/cart">Your Orders</a></span>
                    <span><a href="/logout">Sign Out</a></span>
                    `)
                    $(".textStatus").html(`Signed in`);
                    $(".nameStatus").html("Welcome, " + res.name)
                }
                else {
                    $(".navStatus").html(`
                    <span><a href="/registration">Sign In</a></span>
                    <span><a href="/registration">Create An Account</a></span>
                    `)
                    $(".textStatus").html(`Not signed in`)
                }
                // If there's an error, log the error
            })
            .catch(function (err) {
                console.log(err);
            });
    }

})