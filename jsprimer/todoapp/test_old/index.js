const http = require('http')
const fs = require('fs')
const modeltest = fs.readFileSync('./modeltest.html')
const index = fs.readFileSync('./index.html')
const server = http.createServer((req, res) =>{
	if(req.url === '/modeltest')
        res.end(modeltest)
    else if(req.url === '/index')
		res.end(index)
	else {
		res.writeHead(404)
		res.end("notFoundPage")
	}
})
server.listen(3001)