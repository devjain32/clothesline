$(document).ready(function () {
    $.get("/api/getAll", {})
        .then(function (req, res) {
            console.log(req, res)
            for (var i = 0; i < req.length; i++) {
                $(".whatttttt").append(`
                <div class="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                <div class="product__thumb">
                    <a data-toggle="modal" class="first__img" href="#productmodal${i}"><img style="height: 270px; width: auto; display: block; margin: auto;"src="${req[i].images[0]}"
                            alt="product image"></a>
                    <!-- <a class="second__img animation1" href="#productmodal${i}"><img
                            src="images/books/2.jpg" alt="product image"></a> -->
                    <div class="hot__box">
                        <span class="hot-label" title="Quick View"> <a data-toggle="modal"
                                title="Quick View" class="quickview modal-view detail-link"
                                href="#productmodal${i}">
                                ${req[i].brand}
                            </a > </span >
                    </div >
                </div >
                <div class="product__content content--center">
                    <h4><a href="#product-modal">${req[i].name}</a></h4>
                    <ul class="prize d-flex">
                        <li>$${req[i].oneDay}</li>
                        <li>$${req[i].fourDay}</li>
                        <li>$${req[i].sevenDay}</li>
                        <li>$${req[i].price}</li>
                    </ul>
                    <div class="action">
                        <div class="actions_inner">
                            <ul class="add_to_links">
                                <li>
                                    <span title="Name: ${req[i].name}"><a class="cart" href=""><i
                                        class="bi bi-up-down"></i></a></span>
                                </li>
                                <li>
                                    <span title="Type: ${req[i].type}"><a class="cart" href="#"><i
                                        class="bi bi-tie"></i></a></span>
                                </li>
                                <li>
                                    <span title="Gender: ${req[i].gender}"><a class="cart" href="#"><i
                                        class="bi bi-user-ID"></i></a></span>
                                </li>
                                <li>
                                    <span title="Size: ${req[i].size}"><a class="cart" href="#"><i
                                        class="bi bi-tag"></i></a></span>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div >
                `)
                //var tagArea = req[i].tags.length;
                var tagArea = "";
                for (var j = 0; j < req[i].tags.length; j++) {
                    tagArea += `<li><a href="/tags/${req[i].tags[j]}">${req[i].tags[j]}</a></li>`
                }
                var locationsArea = "";
                for (var k = 0; k < req[i].locations.length; k++) {
                    locationsArea += `<li><a href="/locations/${req[i].locations[k]}">${req[i].locations[k]}</a></li>`
                }
                var forPurchaseArea = "";
                console.log(req[i].forPurchase)
                if (req[i].forPurchase === "yes") {
                    forPurchaseArea += "This item is available for purchase now or at the end of the rental period"
                }
                else if (req[i].forPurchase === "no") {
                    forPurchaseArea += "This item is not available for purchase, only for rental"
                }
                $(".modalsHere").append(`
                <div id="quickview-wrapper">
                <!-- Modal -->
                <div class="modal fade" id="productmodal${i}" tabindex="-1" role="dialog">
                    <div class="modal-dialog modal__container" role="document">
                        <div class="modal-content">
                            <div class="modal-header modal__header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                        aria-hidden="true">&times;</span></button>
                            </div>
                            <div class="modal-body">
                                <div class="modal-product">
                                    <!-- Start product images -->
                                    <div class="product-images">
                                    <div id="carouselExampleIndicators${i}" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                      <li data-target="#carouselExampleIndicators${i}" data-slide-to="0" class="active"></li>
                                      <li data-target="#carouselExampleIndicators${i}" data-slide-to="1"></li>
                                      <li data-target="#carouselExampleIndicators${i}" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                      <div class="carousel-item active">
                                        <img style="height: 500px; width: auto; display: block; margin: auto;" src="${req[i].images[0]}" class="d-block w-100" alt="">
                                      </div>
                                      <div class="carousel-item">
                                        <img style="height: 500px; width: auto; display: block; margin: auto;" src="${req[i].images[1]}" class="d-block w-100" alt="">
                                      </div>
                                      <div class="carousel-item">
                                        <img style="height: 500px; width: auto; display: block; margin: auto;" src="${req[i].images[2]}" class="d-block w-100" alt="">
                                      </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExampleIndicators${i}" role="button" data-slide="prev">
                                      <span class="carousel-control-prev-icon" aria-hidden="false"></span>
                                      <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleIndicators${i}" role="button" data-slide="next">
                                      <span class="carousel-control-next-icon" aria-hidden="false"></span>
                                      <span class="sr-only">Next</span>
                                    </a>
                                  </div>
                                    </div>
                                    <!-- end product images -->
                                    <div class="product-info">
                                        <h1>${req[i].name}</h1>
                                        <div class="rating__and__review">
                                            <ul class="rating">
                                                <li><span class="ti-star"></span></li>
                                                <li><span class="ti-star"></span></li>
                                                <li><span class="ti-star"></span></li>
                                                <li><span class="ti-star"></span></li>
                                                <li><span class="ti-star"></span></li>
                                            </ul>
                                            
                                        </div>
                                        <div class="price-box-3">
                                            <div class="s-price-box">
                                                <span style="color:green;">One day: </span><span class="new-price">$${req[i].oneDay}</span> 
                                                <span style="color:green;">Four day: </span><span class="new-price">$${req[i].fourDay}</span> 
                                                <span style="color:green;">Seven day: </span><span class="new-price">$${req[i].sevenDay}</span>  </br>
                                                <span style="color:green;">Current market price: </span><span class="new-price">$${req[i].price}</span>

                                            </div>
                                        </div>
                                        <div class="quick-desc">
                                            ${req[i].description}
                                        </div>
                                        <div class="select__color">
                                            <h2>Type: ${req[i].type}</h2> </br>
                                        </div>
                                        <div class="select__color">
                                            <h2>Size: ${req[i].size}</h2> </br>
                                        </div>
                                        <div class="select__color">
                                            <h2>Gender: ${req[i].gender}</h2> </br>
                                        </div>
                                        <br>
                                        <br>
                                        <h5>Tags associated with the product <br>
                                        (click to see more products with this tag): </h5>
                                        <div class="select__color">
                                            <aside class="wedget__categories poroduct--tag">
                                            <h3 class="wedget__title"></h3>
                                            <ul>
                                                ${tagArea}
                                            </ul>            
                                        </div>
                                        <h5>Locations this renter is willing to drop to: </h5>
                                        <div class="select__color">
                                            <aside class="wedget__categories poroduct--tag">
                                            <h3 class="wedget__title"></h3>
                                            <ul>
                                                ${locationsArea}
                                            </ul>            
                                        </div>
                                        <div class="select__color">
                                            <h2>${forPurchaseArea}</h2>
                                        </div>
                                        <br>
                                        <form class="was-validated">
                                            <div class="form-input>
                                                <label for="numDays">Please choose the date you would like to reserve this item, an approximate time (note that this time is just to give the renter an idea of when you want it. It is not set in stone and you and the renter and change the time around whenever!), and the number of days you want it. 
                                                    Once you press "Reserve", we will notify the owner of your interest and they will have a chance 
                                                    to approve the request. When it's approved, you will be able to pay, and we will give you the owner's number.
                                                </label>
                                                <br>
                                                <input style="border-radius: 5px; padding-top: 8px; padding-bottom: 8px; padding-left: 5px;" type="datetime-local" name="reserveDate" id="reserveDate">
                                                <br>
                                                <br>
                                                <select class="form-control" id = "numDays" >
                                                    <option selected>Days...</option>
                                                    <option value="one day">1</option>
                                                    <option value="four days">4</option>
                                                    <option value="seven days">7</option>
                                                </select >
                                            </div>
                                            <br>
                                            <button data-id=${req[i]._id} type="submit" class="btn btn-primary my-1" style="background-color: black; color:white; border-radius: 0px; ">
                                                Reserve
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                `)
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

