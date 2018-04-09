var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get("/", function (req, resp) {
    resp.send("Making MSN Messenger great again");
});

var cors = require('cors');    
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

io.on('connection', function (socket) {
  var addedUser = false;
     
  // when the client emits 'new message', this listens and executes
    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })

  // when the client emits 'add user', this listens and executes
  socket.on('add user', function (data) { 
    // echo globally (all clients) that a person has connected
    io.emit('user joined', data);
  });
});

// Use express to listen to port

http.listen(process.env.PORT || 8080, function () {
    console.log("Server running at port= " + process.env.PORT);
});



    