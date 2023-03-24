const http = require('http');

const PORT = 3000;

const server = http.createServer()

const friends = [
    { id: 1, 'name': 'shaktimaan' },
    { id: 2, 'name': 'Kappalla' }
]


server.on('request', (req, res) => {

    if (req.url === '/friends') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application.json');

        res.end(JSON.stringify({
            id: 1,
            name: 'The great Aryabhatta'
        }));



        // res.writeHead(200, {
        //     // 'Content-Type': 'text/plain',
        //     'Content-Type': 'application/json',
        // });
    } else if (req.url === '/messages') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<body>')
        res.write('<ul>')
        res.write('<li> hello Arya</li>');
        res.write('<li> hello Arya, whats going on</li>');
        res.write('</ul>')
        res.write('</body>')
        res.write('</html>')
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})