// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  // app.get("/", function (req, res) {
  // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.redirect("/members");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/signup.html"));
  // });

  app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  app.get("/shop", function (req, res) {
    if (req.user) {
      res.sendFile(path.join(__dirname, "../public/dashboard.html"));    //redirect("/members.html");
    }
    else {
      res.sendFile(path.join(__dirname, "../public/shop.html"));
    }
  });
  app.get("/contact", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });
  app.get("/faq", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/faq.html"));
  });
  app.get("/registration", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/my-account.html"));
  });
  app.get("/instructions", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/instructions/instructions.html"));
  });
  app.get("/sustainability", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/sustainability.html"));
  });
  app.get("/instructions/renters/drop-off", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/instructions/renters/drop-off.html"));
  });
  app.get("/instructions/renters/pick-up", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/instructions/renters/pick-up.html"));
  });
  app.get("/instructions/renters/posting", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/instructions/renters/posting.html"));
  });
  app.get("/instructions/shoppers/drop-off", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/instructions/shoppers/drop-off.html"));
  });
  app.get("/instructions/shoppers/pick-up", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/instructions/shoppers/pick-up.html"));
  });
  app.get("/instructions/shoppers/buying", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/instructions/shoppers/buying.html"));
  });
  app.get("/instructions/renters", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/instructions/instructions.html"));
  });
  app.get("/instructions/shoppers", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/instructions/instructions.html"));
  });
  // app.get("/dashboard", isAuthenticated, function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/members.html"))
  // })
  app.get("/mainpage", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/mypage.html"))
  });
  app.get("/clothes/suit", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/dashboard.html"));
  });

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  // app.get("/login", function (req, res) {
  //   // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.redirect("/members");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/login.html"));
  // });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/members", isAuthenticated, function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/members.html"));
  // });

};
