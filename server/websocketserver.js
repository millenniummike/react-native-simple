const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 9000 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  function doSomething(rand) {
    ws.send(""+rand)
  }

(function loop() {
    var rand = Math.round(Math.random() * (3000 - 500)) + 500;
    setTimeout(function() {
            doSomething(rand);
            loop();  
    }, rand);
}());
 
  ws.send("0");
});
