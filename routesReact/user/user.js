const router = require("express").Router();
// const userController = require("../../controllers/userController");
// const passport = require("../../config/passport");
// const isAuthenticated = require("../../config/middleware/isAuthenticated");

router.route("/")
    .get(function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
        //.get(userController.findAll);
    })

// router.route("/register")
//     .get(function (req, res) {
//         res.render("/register");
//     })
//     .post(userController.create);

// router.route("/login")
//     .get(function (req, res) {
//         res.render("/login");
//     })
//     .post(function (req, res, next) {
//         console.log("Signing in user");
//         console.log(req.body);
//         next();
//     }, passport.authenticate("local", {
//         successRedirect: "/garden/",
//         failureRedirect: "/user/accounts/login"
//     }), function (req, res) {
//         console.log("should show if logged");
//         res.status(200).json(req.body);
//     });

// router
//     .route("/:id", isAuthenticated)
//     .get(userController.findById)
//     .put(userController.update)
//     .delete(userController.remove);

// router
//     .route("/logout")
//     .get(function (req, res) {
//         req.logout();
//         res.redirect("/home");
//     });

module.exports = router;