const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const port = 5000;
const path = require('path');
const http = require('http')
const httpProxy = require('http-proxy');
// const proxy = httpProxy.createProxyServer({target:'http://localhost:3008'});

httpProxy.createProxyServer({target:'http://localhost:3008'}).listen(5000);


app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname)))
app.use('/', express.static(__dirname + '/public'));
// app.use(express.static('public'));
app.use(morgan('dev'));

// http.createServer((req, res) => {
//   proxy.web(req, res, {target: 'http://localhost:5000'})
// })


// app.get('/', function(req, res) {
//   res.send("hello")
// })


// app.get('/', (req, res) => {
//   proxy.web(req, res, { target: 'http://localhost:3008' })
// });
//   /allReviews/item/:id


// app.listen(port, () => console.log(`Proxy server running on port ${port}`));



// var server = http.createServer(function(req, res) {
//   // You can define here your custom logic to handle the request
//   // and then proxy the request.
//   proxy.web(req, res, { target: 'http://localhost:3008' });
// });
 
// console.log("listening on port 3008")
// server.listen(3008);