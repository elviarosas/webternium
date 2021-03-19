const express = require("express")
const app = express()
const port = 8080

//Static files
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/js',express.static(__dirname + 'public/js'))
app.use('/img',express.static(__dirname + 'public/img'))
//Template engine
app.set('views','./src/views')
app.set('view engine', 'ejs')
//Routes
const usuariosRouter = require('./src/routes/usuarios')
app.use('/usuarios', usuariosRouter)

//Listen on por 8080
app.listen(port,()=> console.log(`Escuchando en el puerto ${port}`))
