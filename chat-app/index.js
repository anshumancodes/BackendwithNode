const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const server = http.createServer(app);
const PORT = process.env.PORT || 8001;
// socket io  setup

const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

io.on("connection", (socket) => {

 
  socket.on('message', (msg) => {
    io.emit("message",msg)
  });
});

// routes
app.use(express.static(path.resolve("./public")));
app.get("/", (req, res) => {
  return res.sendFile("/public/index.html");
});

server.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
