$(document).ready(function () {
    var reserveSection;
    var reserveSectionOthers;
    $.get("/api/getmyitems", function (req, res) {
        console.log(req, res);
        for (var i = 0; i < req.length; i++) {
            if (req[i].status === "pendingreserve") {
                reserveSection = `<td class="product-quantity">
            <select class="form-control" id = "changeStatus" >
                <option selected>Choose what to do with this...</option>
                <option value="delete">DELETE (remove this item from theClothesLine)</option>
                <option value="approve">APPROVE (let the person who requested this item on this day pay)</option>
                <option value="deny">DENY (deny the request and repost to theClothesLine)</option>
            </select>
            <button data-id=${req[i]._id} type="submit" class="btn btn-primary my-1" style="background-color: black; color:white; border-radius: 0px; ">
                Submit
            </button></td>`
            }
            else if (req[i].status === "listed") {
                reserveSection = `<td class="product-quantity">
                <select class="form-control" id = "changeStatus" >
                    <option selected>Choose what to do with this...</option>
                    <option value="delete">DELETE (remove this item from theClothesLine)</option>
                    <option value="update">UPDATE</option>
                </select>
                <button data-id=${req[i]._id} type="submit" class="btn btn-primary my-1" style="background-color: black; color:white; border-radius: 0px; ">
                    Submit
                </button></td>`
            }
            $(".usersItems").append(`
                    <tr>
                        <td class="product-name">${req[i].name}</td>
                        ${reserveSection}
                    </tr>
            `)
        }
    })
    $.get("/api/getothersitems", function (req, res) {
        console.log(req, res);
        for (var i = 0; i < req.length; i++) {
            if (req[i].status === "pendingreserve") {
                reserveSectionOthers = `<td class="product-quantity">
            <select class="form-control" id = "changeStatus" >
                <option selected>Choose what to do with this...</option>
                <option value="delete">DELETE (remove this item from theClothesLine)</option>
                <option value="approve">APPROVE (let the person who requested this item on this day pay)</option>
                <option value="deny">DENY (deny the request and repost to theClothesLine)</option>
            </select>
            <button data-id=${req[i]._id} type="submit" class="btn btn-primary my-1" style="background-color: black; color:white; border-radius: 0px; ">
                Submit
            </button></td>`
            }
            else if (req[i].status === "listed") {
                reserveSectionOthers = `<td class="product-quantity">
                <select class="form-control" id = "changeStatus" >
                    <option selected>Choose what to do with this...</option>
                    <option value="delete">DELETE (remove this item from theClothesLine)</option>
                    <option value="update">UPDATE</option>
                </select>
                <button data-id=${req[i]._id} type="submit" class="btn btn-primary my-1" style="background-color: black; color:white; border-radius: 0px; ">
                    Submit
                </button></td>`
            }
            $(".usersItems").append(`
                    <tr>
                        <td class="product-name">${req[i].name}</td>
                        ${reserveSectionOthers}
                    </tr>
            `)
        }
    })

})