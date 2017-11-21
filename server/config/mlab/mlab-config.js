var mongoose = require('mongoose')
var connectionstring = 'mongodb://bgulley:test@ds040877.mlab.com:40877/music-is-life'
var connection = mongoose.connection

mongoose.connect(connectionstring, {
	useMongoClient: true,
	keepAlive: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
});

connection.on('error', console.error.bind(console, 'connection error:'))

connection.once('open', function () {
    console.log('We are connected to the db')
});