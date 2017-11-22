var express = require('express')
var bp = require('body-parser')
var dbConnect = require('./config/mlab/mlab-config')
var cors = require('cors')
var server = express()
var port = 3000

//route variables
var myTunesRoutes = require('./server-assets/routes/myTunes-routes')
var playlistsRoutes = require('./server-assets/routes/playlists-routes')

//middleware
server.use(cors({}))
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))


//routes
server.use(myTunesRoutes)
server.use(playlistsRoutes)

//get mytunes(get)

//add song to list (post)

// update ranking (put)

// delete song (delete)


server.listen(port, () => {
    console.log('server is running on port', port)
})