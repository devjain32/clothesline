$(document).ready(function () {
    var form = $("form.was-validated");
    var daysSelect = $("select#numDays");
    console.log("in form")
    $(document).on("submit",".was-validated",function(event){
        event.preventDefault()
        console.log(daysSelect)
    })
    // form.on("submit", function (event) {
    //     event.preventDefault();
    //     console.log("here")
    //     console.log(daysSelect)
    // })
})