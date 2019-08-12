$(document).ready(function () {
    console.log("in form")
    form.on("submit", function (event) {
        event.preventDefault();
        console.log("here")
        console.log(daysSelect)
    })
})