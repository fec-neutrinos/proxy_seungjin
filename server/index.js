const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const port = 5000;
const path = require('path');
const http = require('http')
const httpProxy = require('http-proxy');
// const proxy = httpProxy.createProxyServer({target:'http://localhost:3008'});
var proxy = require('http-proxy-middleware');

const app = express();
// app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static('public'));
// app.use(express.static(path.join(__dirname)))
// app.use('/', express.static(__dirname + '/public'));
// app.use(express.static('public'));
app.use(morgan('dev'));


// var proxy = httpProxy.createProxyServer( {target: 'http://localhost:3010'} );
// httpProxy.createProxyServer({target:'http://localhost:3008'}).listen(5000);

// http.createServer((req, res) => {
//   proxy.web(req, res, {target: 'http://localhost:5000'})
// })


app.get('/', function(req, res) {
  res.send("hello")
})

// app.use('http://localhost:3010',
//   httpProxy({
//     target: 'http://localhost:3010'
//   })
// )

// app.get('category/:categoryId', (req, res) => {
//   httpProxy.web(req, res, { target: 'http://localhost:3010'} );
// });




// app.get('/', (req, res) => {
//   proxy.web(req, res, { target: 'http://localhost:3008' })
// });
//   /allReviews/item/:id


app.listen(port, () => console.log(`Proxy server running on port ${port}`));




// app.use(
//   '/',
//   proxy( { target: 'http://localhost:3008', changeOrigin: true })
// );

// app.use(
//   '/',
//   proxy( { target: 'http://localhost:3010' } )
// );
