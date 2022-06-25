const http =require('http');
const url =require('url');
const fs =require('fs');
const { isAbsolute } = require('path');
const { start } = require('repl');

// create server
const server = http.createServer(
function(request,response) {
    //get the pathname
    const parsedUrl = url.parse(request.url)
    const filename =parsedUrl.pathname !=="/" ? `.${parsedUrl.pathname}.html` : './index.html';
    // ./about.html
fs.readFile(filename,(err,data)=>{
    if(data){
        response.write(data);
        response.end();
    }else{
        fs.readFile('./404.html'),(err,data)=>{
        response.write(data);
        response.end();
        }
        response.write(data);
        response.end();
    }
})

}  
 )
//Listen for requests
server.listen(5000)

