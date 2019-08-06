// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
// var upload = multer({ dest: 'uploads/' });

console.log("in file")
module.exports = function (app) {
  console.log("in module")
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: req.body.password
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });
  app.post("/api/postClothes", function (req, res) {
    console.log(req);
    db.Clothes.create({
      name: req.body.name,
      brand: req.body.brand,
      oneDay: req.body.oneDay,
      fourDay: req.body.fourDay,
      sevenDay: req.body.sevenDay,
      price: req.body.price,
      description: req.body.description,
      type: req.body.type,
      size: req.body.size,
      gender: req.body.gender,
      forPurchase: req.body.forPurchase
    }).then(function () {
      res.redirect(307, "/api/postTags");
    })
      .catch(function (err) {
        res.status(401).json(err);
      });
  })
  app.post("/api/postTags", function(req, res) {
    db.Tags.create({
      tagOne: req.body.tagOne,
      tagTwo: req.body.tagTwo,
      tagThree: req.body.tagThree,
      tagFour: req.body.tagFour,
      tagFive: req.body.tagFive,

    })
  })
  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/home");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    console.log("in api")
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
    console.log(email, id)
  });
  app.get("/api/check", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        status: true,
        name: req.user.name
      })
    }

  })
};
