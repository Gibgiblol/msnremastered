var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get("/", function (req, resp) {
    resp.send("Making MSN Messenger great again");
});

app.use(function (req, resp, next) {
    resp.setHeader('Access-Control-Allow-Origin', "*");
    
    next();
    
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

http.listen(4000, function(){
  console.log('listening on *:4000');
});
    