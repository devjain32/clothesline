$(document).ready(function () {
    $.get("/api/getAll", {})
        .then(function (req, res) {
            for (var i = 0; i < req.length; i++) {
                $(".singleProductsHere").append(`
                <div class="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                    <div class="product__thumb">
                        <a class="first__img" href="/registration"><img style="height: 400px; width: auto; display: block; margin: auto"src="${req[i].images[0]}" alt="product image"></a>
                        <div class="hot__box">
                            <span class="hot-label">${req[i].brand}</span>
                        </div>
                    </div>
                    <div class="product__content content--center">
                        <h4>One day: ${req[i].oneDay} </br>Four day: ${req[i].fourDay} </br>Seven day: ${req[i].sevenDay} </br>Market price: ${req[i].price}</h4>
                        <div class="action">
                            <div class="actions_inner">sign up/log in to view <br />prices and order this ASAP!
                            </div>
                        </div>
                    </div>
                </div>`)
            }

            console.log(req)
            // If there's an error, log the error
        })
        .catch(function (err) {
            console.log(err);
        });

    // $.get("/api/getAll", {}).then(function { })
})

// $(".singleProductsHere")