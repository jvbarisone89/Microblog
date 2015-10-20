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

// Routes 
app.get('/posts', function(req, res) {
    db.Post.find({}, function(err, posts) {
        if (err) console.log(err);
        res.render('index', {
        posts: posts
        });
    });
});

//Create new Post
app.post('/posts', function(req, res) {
    // swap for post data later
    console.log(req.body);
    var date = new Date().toDateString();
    var post = {item1: req.body.item1,
                item2: req.body.item2,
                item3: req.body.item3,
                date: date};
    db.Post.create(post, function(err, post) {
        if (err) {
            console.log(err);
        }
        res.json(post);
    });
});

//Delete Post
app.delete('/posts/:_id', function(req, res) {
    console.log('post id is: ', req.params);
    db.Post.find({
        _id: req.params._id
    }).remove(function(err, post) {
        console.log("Post deleted");
        res.json("That post is dead");
    });
});

//Initialize server
var server = app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening at http://localhost:3000/');
});