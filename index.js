var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get("/", function (req, resp) {
    resp.send("Making MSN Messenger great again");
});

var cors = require('cors');    
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

// Use express to listen to port
let port = 4000;
app.listen(process.env.PORT || 4000, function () {
    console.log("Server running at port= " + port);
});
    