const http = require('http');
const fs = require('fs');

const server = http.createServer((request,response) => {
    if(request.url !== '/favicon.ico') {
        //basic routing
        switch (request.url) {
            case '/':
                response.write(readFile('index'));
                break;
            case '/about':
                response.write(readFile('about'));
                break;
            default:
                response.write(readFile('404'));
        }

        response.end();
    }   
});

server.listen(3008, () => {
    console.log('server running at port: ',3008);
});

function readFile(page) {
    let path = `./public/${page}.html`;
    let data = fs.readFileSync(path);
    //console.log(data.toString()); //to change the binary data into string
    return data;
}