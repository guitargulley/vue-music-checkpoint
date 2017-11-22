var mongoose = require('mongoose')
var ObjectId = mongoose.SchemaTypes.ObjectId


var schema = new mongoose.Schema({
    title: { type: String, required: true },
    albumArt: { type: String },
    kind: { type: String },
    artist: { type: String, required: true },
    album: { type: String, required: true },
    preview: { type: String, required: true },
    playListId: {type: ObjectId, required: true, ref: 'Playlist' },
    rank:{type: Number, required: true, default: 0}
   
});

module.exports = mongoose.model('MyTune', schema);