var mongoose = require('mongoose');

var entrySchema = mongoose.Schema({
    content: String,
    date: { type: Date, default: Date.now },
});

var Post = mongoose.model('Post', entrySchema);

module.exports = Post;