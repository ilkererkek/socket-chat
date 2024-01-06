const socket = io.connect("http://localhost:5000");

const message = document.getElementById("message");
const handle = document.getElementById("handle");
const btn = document.getElementById("send");
const output = document.getElementById("output");
const feedback = document.getElementById("feedback");

btn.addEventListener("click", () => {
  socket.emit("chat", {
    handle: handle.value,
    message: message.value,
  });
});

message.addEventListener("keypress", () => {
  socket.emit("typing", {
    handle: handle.value,
  });
});

socket.on("chat", (data) => {
  output.innerHTML += `<p><strong>${data.handle}:</strong>${data.message}</p>`;
  feedback.innerHTML = "";
});

socket.on("typing", (data) => {
  feedback.innerHTML = `<p><em>${data.handle} is typing a message.</em></p>`;
});
