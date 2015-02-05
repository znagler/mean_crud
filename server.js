console.log("Hello from Node")
var express = require('express')
var bodyParser = require('body-parser')
mongoose = require('mongoose')
app = express();
meetupsController = require('./server/controllers/meetups-controller')

mongoose.connect('mongodb://localhost:27017/mean-demo')
app.use(bodyParser())
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/client/views/index.html')
})

app.use('/js',express.static(__dirname+'/client/js'))

app.get('/api/meetups',meetupsController.list)
app.post('/api/meetups',meetupsController.create)

app.listen(3000, function() {
	console.log("Listening")
})