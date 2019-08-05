$(document).ready(function () {
    checkUser();
    function checkUser() {
        $.get("/api/check", {})
            .then(function (res) {
                console.log(res);
                if (res.status) {
                    $(".isSignedIn").text("Signed in")
                }
                else {
                    $(".isSignedIn").text("Not signed in")
                }
                // If there's an error, log the error
            })
            .catch(function (err) {
                console.log(err);
            });
    }

})