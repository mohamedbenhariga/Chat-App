const http = require('http');
var MongoClient =require('mongodb'),MongoClient;
var url ='mongodb:/localhost/EmployeeDB';
const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8082 });
wss.on("connection", ws => {
  console.log("connection")
})

ws.onmessage = ({data}) => {
  wss.clients.forEach(function each(client) {
  if (client !== ws && client.readyState === WebSocket.OPEN) {
    client.send(`${data}`);
  }
});}
ws.onclose = function() {
  console.log(`Client ${ws.id} has disconnected!`);
};

if ("WebSocket" in window) { 
  let ws = new WebSocket("ws://localhost:8082");
  // Then only do something with ws
}
ws.onopen = function() {
  console.log("Connected to Server");
};



ws.send(messageBox.value);
ws.onmessage = function ({data}) {
  showMessage(`YOU: ${data}`);
};


ws.onclose = function() {
console.log("closed")};

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});