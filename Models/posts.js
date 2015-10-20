var mongoose = require('mongoose');

var entrySchema = mongoose.Schema({
    item1: String,
    item2: String,
    item3: String,
    date: String
});

var Post = mongoose.model('Post', entrySchema);

module.exports = Post;