$(document).ready(function () {
    // Getting references to our form and inputs
    var newClothesForm = $("form.was-validated");
    var nameInput = $("input#name");
    var brandInput = $("input#brand");
    var oneDayInput = $("input#oneDay");
    var fourDayInput = $("input#fourDay");
    var sevenDayInput = $("input#sevenDay");
    var priceInput = $("input#fullPrice");
    var descriptionInput = $("textarea#description");
    var typeSelect = $("select#type");
    var sizeSelect = $("select#size");
    var genderSelect = $("select#gender");
    var tagsInput = $("input#tags");
    var forPurchaseInput = $("select#forPurchase");
    // var imageOnlyInput = $("input#imageOnly");
    // var imageFrontInput = $("input#imageFront");
    // var imageBackInput = $("input#imageBack");
    // console.log(imageOnlyInput,imageFrontInput, imageBackInput)

    // When the form is submitted, we validate there's an email and password entered
    console.log(tagsInput)
    newClothesForm.on("submit", function (event) {
        event.preventDefault();
        var clothesData = {
            name: nameInput.val().trim(),
            brand: brandInput.val().trim(),
            oneDay: oneDayInput.val().trim(),
            fourDay: fourDayInput.val().trim(),
            sevenDay: sevenDayInput.val().trim(),
            price: priceInput.val().trim(),
            description: descriptionInput.val().trim(),
            type: typeSelect.val().trim(),
            size: sizeSelect.val().trim(),
            gender: genderSelect.val().trim(),
            tags: tagsInput.val().trim().split(","),
            forPurchase: forPurchaseInput.val().trim(),
        };
        console.log(clothesData)
        // If we have an email and password we run the loginUser function and clear the form
        postClothes(clothesData.name, clothesData.brand,
            clothesData.oneDay, clothesData.fourDay,
            clothesData.sevenDay, clothesData.price,
            clothesData.description, clothesData.type, clothesData.size,
            clothesData.gender, clothesData.tags[0], clothesData.tags[1], clothesData.tags[2], clothesData.tags[3], clothesData.tags[4],
            clothesData.forPurchase);
        //   name.val("");
        //   brand.val("");
        //   oneDay.val("");
        //   fourDay.val("");
        //   sevenDay.val("");
        //   price.val("");
        //   type.val("");
        //   size.val("");
        //   gender.val("");
        //   tags.val("");
        //   forPurchase.val("");
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function postClothes(name, brand, oneDay, fourDay, sevenDay, price, description, type, size, gender, tagOne, tagTwo, tagThree, tagFour, tagFive, forPurchase) {
        $.post("/api/postClothes", {
            name: name,
            brand: brand,
            oneDay: oneDay,
            fourDay: fourDay,
            sevenDay: sevenDay,
            price: price,
            description: description,
            type: type,
            size: size,
            gender: gender,
            forPurchase: forPurchase,
            tagOne: tagOne,
            tagTwo: tagTwo,
            tagThree: tagThree,
            tagFour: tagFour,
            tagFive: tagFive,
        })
            .then(function () {
                window.alert("Thank you for posting to theClothesLine. We will notify you when someone is interested in your item.")
            })
            .catch(function (err) {
                console.log(err);
            });

    }
});
