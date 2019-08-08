$(document).ready(function () {
    // Getting references to our form and inputs
    var urlArr = []
    var locations = []
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
    var southAustinInput = $("input#southAustin");
    var northAustinInput = $("input#northAustin");
    var domainInput = $("input#domain");
    var centralAustinInput = $("input#centralAustin");
    var utCampusInput = $("input#utCampus");
    var anywhereInput = $("input#anywhere");

    if (southAustinInput === true) {
        locations.push("South Austin");
    }
    if (northAustinInput === true) {
        locations.push("North Austin");
    }
    if (domainInput === true) {
        locations.push("Domain");
    }
    if (centralAustinInput === true) {
        locations.push("Central Austin");
    }
    if (utCampusInput === true) {
        locations.push("UT Campus Area");
    }
    if (anywhereInput === true) {
        locations.push("Anywhere");
    }

    // var imageOnlyInput = $("input#imageOnly");
    // var imageFrontInput = $("input#imageFront");
    // var imageBackInput = $("input#imageBack");
    // console.log(imageOnlyInput,imageFrontInput, imageBackInput)


    // When the form is submitted, we validate there's an email and password entered
    console.log(tagsInput)
    newClothesForm.on("submit", function (event) {
        event.preventDefault();
        const only = document.querySelector("#imageOnly").files[0];
        var toURL = encodeURIComponent(only.name.trim());
        var finalURL = "https://theclothesline.s3.amazonaws.com/" + toURL;
        urlArr.push(finalURL);
        const dataOne = new FormData();
        dataOne.append("file", only)
        fetch("/uploadpictures", {
            method: "POST",
            body: dataOne
        }).then((response) => { })

        const front = document.querySelector("#imageFront").files[0];
        var toURL = encodeURIComponent(front.name.trim());
        var finalURL = "https://theclothesline.s3.amazonaws.com/" + toURL;
        urlArr.push(finalURL);
        const dataTwo = new FormData();
        dataTwo.append("file", front)
        fetch("/uploadpictures", {
            method: "POST",
            body: dataTwo
        }).then((response) => { })

        const back = document.querySelector("#imageBack").files[0];
        var toURL = encodeURIComponent(back.name.trim());
        var finalURL = "https://theclothesline.s3.amazonaws.com/" + toURL;
        urlArr.push(finalURL);
        const dataThree = new FormData();
        dataThree.append("file", back)
        fetch("/uploadpictures", {
            method: "POST",
            body: dataThree
        }).then((response) => { })
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
            locations: locations
        };
        console.log(clothesData)
        // If we have an email and password we run the loginUser function and clear the form
        postclothes(clothesData.name, clothesData.brand,
            clothesData.oneDay, clothesData.fourDay,
            clothesData.sevenDay, clothesData.price,
            clothesData.description, clothesData.type, clothesData.size,
            clothesData.gender, clothesData.tags,
            clothesData.forPurchase, urlArr, locations);

        nameInput.val("");
        brandInput.val("");
        oneDayInput.val("");
        fourDayInput.val("");
        sevenDayInput.val("");
        priceInput.val("");
        typeSelect.val("");
        sizeSelect.val("");
        genderSelect.val("");
        tagsInput.val("");
        forPurchaseInput.val("");
        tagsInput.val("");
        descriptionInput.val("");
        locations.val("");
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function postclothes(name, brand, oneDay, fourDay, sevenDay, price, description, type, size, gender, tags, forPurchase, urlArr, locations) {
        $.post("/api/postclothes", {
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
            tags: tags,
            forPurchase: forPurchase,
            images: urlArr,
            locations: locations
        })
            .then(function () {
                window.alert("Thank you for posting to theClothesLine. We will notify you when someone is interested in your item.")
            })
            .catch(function (err) {
                console.log(err);
            });

    }
})