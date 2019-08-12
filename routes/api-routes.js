// Requiring our models and passport as we've configured it
require("dotenv").config();
const AWS = require("aws-sdk");
var db = require("../models");
var passport = require("../config/passport.js");
// var upload = multer({ dest: 'uploads/' });

module.exports = function (app) {

  app.post("/api/login", function (req, res, next) {
    console.log("Signing in user");
    console.log(req.body);
    next();
  }, passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/registration"
  }), function (req, res) {
    console.log("should show if logged");
    res.redirect(307, "/shop");
  });

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
        console.log(err);
        res.status(401).json(err);
      });
  });

  app.post("/api/postclothes", function (req, res) {
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
      tags: req.body.tags,
      forPurchase: req.body.forPurchase,
      images: req.body.images,
      listed: false,
      owner: req.user._id,
      locations: req.body.locations
    }).then(function () {
      res.json("after" + req.body)
    })
      .catch(function (err) {
        res.status(401).json(err);
      });
  })

  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/home");
  });

  app.get("/api/user_data", function (req, res) {
    console.log("in api")
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
    console.log(email, id)
  });
  app.get("/api/check", function (req, res) {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        status: true,
        name: req.user.name
      })
    }
  });

  app.get("/api/getAll", function (req, res) {
    db.Clothes.find({
      listed: false
    })
      .sort({ date: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  })

  // app.use(twilioNotifications.notifyOnError);
  const BUCKET_NAME = process.env.AWS_BUCKET_NAME
  const s3Config = {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    Bucket: BUCKET_NAME
  }
  const S3 = new AWS.S3(s3Config);
  app.post("/uploadpictures", function (req, res) {
    console.log(req, res)
    S3.upload({
      Bucket: BUCKET_NAME,
      Key: req.files.file.name,
      Body: req.files.file.data,
      ContentType: req.files.file.mimetype
    }, function (err, data) {
      console.log("Link to image: " + data.Location);
    })
  })

  app.get("/api/clothes/:type", function(req, res) {
    console.log("In type api")
    db.Clothes.find({
      type: req.params.type
    }).sort({ date: 1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));

  })
  app.get("/api/tags/:tags", function(req, res) {
    console.log("In type api")
    db.Clothes.find({
      tags: req.params.tags
    }).sort({ date: 1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  })
  app.get("/api/locations/:location", function(req, res) {
    console.log("In type api")
    db.Clothes.find({
      locations: req.params.location
    }).sort({ date: 1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  })
};
