var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var app = express();
var PORT = process.env.PORT || 3001;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// mongoose connection
var mongodbUri = 'mongodb://<dbuser>:<dbpassword>@ds127802.mlab.com:27802/fitnessguru';
mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;


// // home page route
// app.get("/", function(req, res) {
//   res.sendFile(__dirname + "/client/build/index.html");
// });

// create profile
app.get("/create", function(req, res) {
     res.render("create");

});

// create id 
router.post('/create', function(req, res) {


    var id = Math.floor(Math.random() * 90000) + 10000;
    routeid = id;
    var createPwd = req.body.user_pwd;
    var createUser = req.body.user_name;
    var createEmail = req.body.user_email;
    users.create({
            id: id,
            name: createUser,
            email: createEmail,
            password: createPwd
        })
        .then(function(newData) {
            console.log(newData.id);
            res.redirect('/success');
        })
});

// success
router.get('/success', function(req, res) {

    res.render("success");

});

// login
router.get('/login', function(req, res) {
    res.render("login");
});
// request login information from database
router.post('/login', function(req, res) {

    var requestedPwd = req.body.user_pwd;
    var requestedEmail = req.body.user_email;

    users.findAll({
            raw: true
        })
        .then(function(crud_data) {

            crud_data.forEach(function(index) {

                if (index.email === index.email && index.password === requestedPwd) {
                    res.redirect('/personal');
                }
            });
        })
});

//personal page displayes
router.get('/personal', function(req, res) {
    res.render("personal");

});
// post personal info to the database
router.post('/personal', function(req, res) {
    var requestedPwd = req.body.user_pwd;
    var requestedEmail = req.body.user_email;
    var
    var
    var

    // age
    // weight
    // height
    // hip circumference
    // waist circumference
    // activity level


});

// main page display
router.get('/main', function(req, res) {


    res.render("main");

});

// posts user input to the database
router.post('/main', function(req, res) {
   // bmi calculator info 
   // food inputn post to database
   // goal request
   // 
});


// Export routes for server.js to use.
module.exports = router;