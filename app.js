const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) =>{
    const url = req.url;
    const method = req.method;

    if (url === '/'){
        res.write('<html>');    
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST'){
        res.setHeader('Context-Type', 'text/html');
        res.write('<html>');    
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><p>oi</p></body>');
        res.write('</html>');
        res.end();
    }
});

server.listen(3000);