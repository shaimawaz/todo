var express = require('express');
var socket = require('socket.io');
var app = express();
var server = app.listen(4000, function(){
   console.log('listening on localhost:3000');
});
app.use(express.static('public'));
var io = socket(server);
io.on('connection', (socket) => {
    console.log('a user has connected');
    socket.on('addTask', function(data){
      // console.log(data);
      io.sockets.emit('addTask', data);
  });
});

