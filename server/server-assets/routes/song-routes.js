
var Songs = require('../models/song')
var Playlists = require('../models/playlist')
var router = require('express').Router()


//ALL OF MY GET REQUESTS HERE-->


//Get all stored songs

router.get('/api/songs/', (req, res, next) => {
    Songs.find({})
        .then(songs => {
            res.send(songs)
        })
        .catch(err => res.status(400).send('ERROR:', err))
})

//Get Specific song

router.get('/api/songs/:songId', (req, res, next) => {
    Songs.findById(req.params.songId)
        .then(song => {
            req.send(song)
        })
        .catch(err => res.status(400).send('ERROR:', err))
})

//Get all songs from specific Playlist

router.get('/api/playlists/:playlistId/songs', (req, res, next) => {
    Songs.find({playlistId: req.params.playlistId})
        .then(songs => {
            req.send(songs)
        })
        .catch(err => res.status(400).send('ERROR:', err))
})

// ALL POST REQUESTS HERE -->

//Add new song to database

router.post('/api/songs', (req, res, next) => {
    Songs.create(req.body)
        .then(song => {
            res.send(song)
        })
        .catch(err => res.status(400).send(err))
})


//ALL DELETE REQUESTS HERE -->

//Delete song from database
router.delete('/api/songs/:songId', (req, res, next) => {
    Songs.findByIdAndRemove(req.params.songId)
        .then((song) => {
            song.remove()
            res.send({ message: 'Successfully removed song at ' + req.params.id })
        })
        .catch(err => res.status(400).send(err))
})

//UPDATE SONG RATINGS

router.put('/api/songs/:songId', (req, res, next) => {
    console.log(req.body.rating)
    Songs.findByIdAndUpdate(req.params.songId, req.body)
        .then(() => {
            res.send('Your ranking has been updated!')
        })
        .catch(err => res.status(400).send('ERROR:', err))
})


module.exports = router