const socketConnection = (io) => {
  io.on("connection", (socket) => {
    console.log(`Made websocket connection with the id of ${socket.id}.`.blue);

    socket.on("chat", (data) => {
      io.sockets.emit("chat", data);
    });
    socket.on("typing", (data) => {
      socket.broadcast.emit("typing", data);
    });
  });
};

module.exports = socketConnection;
