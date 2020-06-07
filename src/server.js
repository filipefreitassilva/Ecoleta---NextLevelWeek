const express = require("express")
const server = express()

//folder public
server.use(express.static("public"))

//using nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//page init
server.get("/", (req, res)=> {
    return res.render("index.html")
})

server.get("/create-point", (req, res)=> {
    return res.render("create-point.html")
})

server.get("/search-results", (req, res)=> {
    return res.render("search-results.html")
})

//ligar o servidor
server.listen(3000)