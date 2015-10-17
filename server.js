// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser");


//Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));


var db = require('./models/index.js');

// Routes //

app.get('/posts', function(req, res) {
    db.Post.find({}, function(err, posts) {
        if (err) console.log(err);
        res.render('index', {
            posts: posts
        });
    });
});

app.post('/posts', function(req, res) {
    // swap for post data later
    console.log(req.body);
    db.Post.create(req.body, function(err, post) {
        if (err) {
            console.log(err);
        }
        res.json(post);
    });
});

app.delete('/posts/:_id', function(req, res) {
    console.log('post id is: ', req.params);
    db.Post.find({
        _id: req.params._id
    }).remove(function(err, post) {
        console.log("post deleted");
        res.json("That post is dead");
    });
});

var server = app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});