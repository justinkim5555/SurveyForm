var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "static"));


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

const server = app.listen(1337);
const io = require('socket.io')(server);

io.on('connection', function(socket){
  socket.emit('greeting',{msg: 'thanks'})
})


app.get('/', function(request,response){
  response.render("index");
})

app.post('/process', function(request,response){
  response.redirect('/');
})

// express will look at this directory for static files








app.listen(9900, function(){
  console.log("listening to port 9900");
})
