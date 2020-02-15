var express = require('express');
var socket = require('socket.io');
var app = express();
let tasks =[];
var server = app.listen(4000, function(){
   console.log('listening on localhost:3000');
});
app.use(express.static('public'));
var io = socket(server);
io.on('connection', (socket) => {
    console.log('a user has connected');
    socket.on('addTask', function(data){
      tasks.push(data);
      console.log(tasks)
      io.sockets.emit('addTask', data);
  });
});

