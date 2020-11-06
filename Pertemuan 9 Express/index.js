var express = require('express')

var app = express()

app.get('/', function(req, res) {
    res.send('HelloWorld!')
})

app.post('/', function(req, res) {
    res.send('Ini POST request')
})

app.put('/user', function(req, res) {
    res.send('PUT request dijalankan')
})

app.delete('/user', function(req, res) {
    res.send('DELETE request pada suatu user')
})

app.use(express.static('public'));

// specified port
app.listen(3000)