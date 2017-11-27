var mongoose = require('mongoose')
var ObjectId = mongoose.SchemaTypes.ObjectId


var schema = new mongoose.Schema({
    title: { type: String, required: true },
    albumArt: { type: String },
    artist: { type: String, required: true },
    album: { type: String, required: true },
    preview: { type: String, required: true },
    albumPrice: { type: Number },
    kind: { type: String },
    playListId: {type: ObjectId, required: true, ref: 'Playlist' },
    rating:{type: Number, required: true, default: 0}
   
});


module.exports = mongoose.model('Song', schema);