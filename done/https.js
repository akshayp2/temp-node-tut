const http = require('http');

const server = http.createServer((req,res)=>{
   if(req.url==='/'){
       res.end('welcome to our home page')
    }
    
   if(req.url==='/about'){
       res.end('this is about page')
    }

    res.end(`<h1>Opps</h1>
    <p>cant find the pgae you looking</p>
    `)

})
 

server.listen(5000)