var express = require('express')
var bp = require('body-parser')
var dbConnect = require('./config/mlab/mlab-config')
var cors = require('cors')
var server = express()
var port = 3000

//route variables
var songRoutes = require('./server-assets/routes/song-routes')


//middleware
server.use(cors({}))
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))


//routes
server.use(songRoutes)


server.listen(port, () => {
    console.log('server is running on port', port)
})