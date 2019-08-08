const path = require("path");
const router = require("express").Router();
var isAuthenticated = require("../config/middleware/isAuthenticated");
// const userRoutes = require("./user");
// const publicRoutes = require("./public");

// router.use("/user", userRoutes);
// router.use("/public", publicRoutes);

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.route("/")
    .get(function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
        //.get(userController.findAll);
    })


module.exports = router;