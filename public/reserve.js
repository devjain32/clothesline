$(document).ready(function () {
    var form = $("form.was-validated");
    var daysSelect = $("select#numDays");
    console.log("in form")
    $(document).on("submit", ".was-validated", function (event) {
        event.preventDefault()
        // console.log($(this).find("#numDays").val())
        var numberOfDays = $(this).find("#numDays").val();
        var reserveDate = $(this).find("#reserveDate").val();
        var clothesId = $(this).find("button").attr("data-id")
        var ownerId;
        var nameOfItem;
        var properFormat = moment(reserveDate).format('LLLL');
        // console.log(properFormat);
        // console.log(numberOfDays)
        $.get("/api/" + clothesId, {})
            .then(function (req, res) {
                // console.log(req);
                ownerId = req.owner;
                nameOfItem = req.name;
                // console.log(nameOfItem)
                // console.log(ownerId);
                $.get("/api/owner/" + ownerId, {})
                    .then(function (req, res) {
                        console.log(`Hi, ${req.name}! Somebody is interested in the ${nameOfItem} you posted. They want to rent it for ${numberOfDays} starting on ${properFormat}. Please go to theClothesLine to approve, deny, or remove this listing as soon as possible.`)
                        $.post("/api/changeToReserve/" + clothesId, {})
                            .then(function (req, res) {
                                console.log("changed")
                            })
                    })
            })
    })
})