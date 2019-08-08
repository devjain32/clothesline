$(document).ready(function () {
    $.get("/api/getAll", {})
        .then(function (req, res) {
            console.log(req, res)
            for (var i = 0; i < req.length; i++) {
                $(".whatttttt").append(`
                <div class="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12">
                <div class="product__thumb">
                    <a data-toggle="modal" class="first__img" href="#productmodal${i}"><img src="${req[i].images[0]}"
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
                        <li>${req[i].oneDay}</li>
                        <li>${req[i].fourDay}</li>
                        <li>${req[i].sevenDay}</li>
                        <li>${req[i].price}</li>
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
                                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                      <div class="carousel-item active">
                                        <img style="height: 500px; width: 100%" src="${req[i].images[0]}" class="d-block w-100" alt="">
                                      </div>
                                      <div class="carousel-item">
                                        <img style="height: 500px; width: 100%" src="${req[i].images[1]}" class="d-block w-100" alt="">
                                      </div>
                                      <div class="carousel-item">
                                        <img style="height: 500px; width: 100%" src="${req[i].images[2]}" class="d-block w-100" alt="">
                                      </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                      <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
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
                                                <span style="color:green;">One day: </span><span class="new-price">${req[i].oneDay}</span> 
                                                <span style="color:green;">Four day: </span><span class="new-price">${req[i].fourDay}</span> 
                                                <span style="color:green;">Seven day: </span><span class="new-price">${req[i].sevenDay}</span>  </br>
                                                <span style="color:green;">Current market price: </span><span class="new-price">${req[i].price}</span>

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
                                        <div class="select__color">
                                            <aside class="wedget__categories poroduct--tag">
                                            <h3 class="wedget__title"></h3>
                                            <ul>
                                                ${tagArea}
                                            </ul>
                                        </aside>
            
                                        </div>
                                        <div class="select__color">
                                            <h2>${forPurchaseArea}</h2>
                                        </div>
                                        <div class="addtocart-btn">
                                            <a href="#">Reserve</a>
                                        </div>
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