var http = require("http");

function onRequest(request, response) {
  console.log("Request received.");
  response.writeHead(200, {"Cotnent-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Serever has started");