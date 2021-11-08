const http = require('http')
//import { create } from 'http'

const server=http.createServer((req,res)=>{
    //console.log(req)
    if(req.url==='/'){
        res.end('Welcome to home')
    }
    else if(req.url==='/about'){  
        res.end(' this our shorthistory')
    }
    else{
    res.end(`<h1>oops!</h1>
    <p>We cannot seem to find the page you are looking for</p>
    <a href="/">back home </a>`)}
})

server.listen(5000)