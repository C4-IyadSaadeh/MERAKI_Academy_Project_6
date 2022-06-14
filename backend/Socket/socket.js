const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const socket = require("socket.io");
const app = express();
// app.use(express.static('assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const server =app.listen(8081,()=>{
    const host = 'localhost';
    const port = 5500;
    console.log(`socket Server listening on ${host}:${port}`);
});

app.get('/',(req,res)=>{
    res.sendFile(_dirname + '/'+'index.html');
});

const io=socket(server);
io.on('connection',(socket)=>{
    console.log('Made socket connection');

    socket.on('disconnect',()=>{
    console.log('Made socket disconnected');

    });

    socket.on('send-notification',(data)=>{
        socket.broadcast.emit('new-notification',data);
        socket.broadcast.emit('new-notification',data);

    })
})