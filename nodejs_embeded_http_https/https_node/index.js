const https = require('https');
const fs = require('fs')
const homePage = fs.readFileSync('html/index.html')
const aboutPage = fs.readFileSync('html/about.html')
const contactPage = fs.readFileSync('html/contact.html')
const notFoundPage = fs.readFileSync('html/notfound.html')
const ssl_server_key = '/etc/pki/tls/private/server.key.pem';
const ssl_server_crt = '/etc/pki/tls/certs/server.crt.pem';
const port = 3000;
var options = {
    key: fs.readFileSync(ssl_server_key),
    cert: fs.readFileSync(ssl_server_crt)
};

const server = https.createServer(options, (req,res) =>{
	if(req.url === '/about')
		res.end(aboutPage)
	else if(req.url === '/contact')
		res.end(contactPage)
	else if(req.url === '/')
		res.end(homePage)
	else {
		res.writeHead(404)
		res.end(notFoundPage)
	}
});

server.listen(port);