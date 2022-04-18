const { response } = require('express')
const express = require('express')
const port = 8000
const app = express()
var permission = false

app.use("/" , (request,response,next) => {
    console.log(request.url)
    next()
})

app.get('/books' , (request,response) => {
    if(permission) {
        response.send("Books page")
    }else {
        response.send("Permisson Denied")
        console.log("Permisson Denied")
    }
})
app.get('/libraries' , (request,response) => {
    permission = true
    if(permission) {
        response.send("Libraries Listed over Here")
    }
    permission = false
})
app.get('/authors' , (request,response) => {
    permission = true
    if(permission) {
        response.send("Authors Listed over Here")
    }
    permission = false
})

app.listen(port, () => console.log("Open localhost:8000"))