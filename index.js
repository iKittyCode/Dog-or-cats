const { response } = require('express')
var express = require('express')
var Datastore = require('nedb')
var database = new Datastore({
    filename:'database.db',
    autoload:'true'

    
    
})

var app = express()
app.listen(8070, () => {
console.log("listening at port 8070")
})
app.use(express.static("client"))
app.use(express.json())
app.post('/api', (request, response) => {
console.log(request.body)
database.insert(request.body)
})
app.get('/api', function(req, res) {
database.find({},function(err,data) {
if (err) {
console.error(err)
return;
} 
res.json(data)
})
} )