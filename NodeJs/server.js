/*var connect = require("connect");
connect(connect.static(__dirname + "/public")).listen(3000, function(){
  console.log('listening on *:3000');
})*/
//Conecta de forma automatica a index.html desde la carpeta public 



var http = require("http"),
querystring = require("querystring");

http.createServer(function(req, res) {
// parse everything after the "?" into key/value pairs var qs = querystring.parse(req.url.split("?")[1]),
var qs=querystring.parse(req.url.split("/")[1]);
console.log(qs);
userName=qs.firstname+" "+qs.lastname;
// property names are the same as in the querystring userName = qs.firstName + " " + qs.lastName,
html = "<!doctype html>" +
"<html><head><title>Hello " + userName + "</title></head>" + "<body><h1>Hello, " + userName + "!</h1></body></html>";
res.end(html); }).listen(3000, function(){
console.log('listening on *:3000');
})
//Envia un mensaje tomando parametros de la url

/*var http = require("http"),
fs = require("fs"),
querystring = require("querystring");
http.createServer(function(req, res) { 
var data = "";
// serve static form
if (req.method == "GET") {

getFile(__dirname + "/public/simpleForm.html", res); }
// handle form post
if (req.method == "POST") {
req.on("data", function(chunk) 
// append received data
data += chunk; });
req.on("end", function() {
// get key/value pairs from received data var params = querystring.parse(data),
userName = params.firstName + " " + params.lastName, html = "<!doctype html>" +
"<html><head><title>Hello " + userName + "</title></head>" + "<body><h1>Hello, " + userName + "!</h1></body></html>";
res.end(html); });
} }).listen(8000);

function getFile(localPath, res) {
// read the file in and return it, or return a 500 if it can't be read fs.readFile(localPath, function(err, contents) {
fs.readFile(localPath, function(err, contents) {
if (!err) {
// use defaults instead of res.writeHead() res.end(contents);
res.end(contents);
} else { res.writeHead(500); res.end();
} });
}*/