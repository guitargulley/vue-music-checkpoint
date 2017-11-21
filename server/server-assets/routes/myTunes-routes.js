
var MyTunes = require('../models/myTune')
var Playlists = require('../models/playlist')
var router = require('express').Router()

router.get('/api/myTunes', (req, res, next) => {
    MyTunes.find({})
        .then(myTunes => res.send(myTunes))
        .catch(err => res.status(400).send(err))
})
router.get('/api/playlists'), (req, res, next) => {
    Playlists.find({})
    .then(playlists => res.send(playlists))
    .catch(err => res.status(400).send(err))
}
router.get('/api/playlists/:id', (req, res, next) => {
    Playlists.findById(req.params.id)
        .then(playlist => res.send(playlist))
        .catch(err => res.status(400).send(err))
})


router.post('/api/myTunes', (req, res, next) => {
    MyTunes.create(req.body)
        .then(myTune => res.send(myTune))
        .catch(err => res.status(400).send(err))
})

router.delete('/api/myTunes/:id', (req, res, next) => {
    MyTunes.findByIdAndRemove(req.params.id)
        .then((myTune) => {
            res.send({ message: 'Successfully removed myTune at ' + req.params.id })
        })
        .catch(err => res.status(400).send(err))
})


module.exports = router