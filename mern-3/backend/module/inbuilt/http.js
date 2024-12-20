import http from "http";

const server = http.createServer((req, res) => {
  res.end("<h1>Hello</h1>");
});




let port = 8081;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
