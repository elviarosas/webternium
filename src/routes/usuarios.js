const express = require('express')
const usuariosRouter = express.Router()
const axios = require('axios')

usuariosRouter.get('', async(req,res)=>{

//res.render('usuarios')

try{
    const webAPI = await axios.get(`http://localhost:4000/api/getUsuarios`) 
    //console.log(webAPI.data)
    res.render('usuarios', { users: webAPI.data})

    } catch(error){
    }
    
})



module.exports = usuariosRouter