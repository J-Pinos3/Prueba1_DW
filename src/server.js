const express = require("express")
const path = require("path")
const {engine} = require("express-handlebars")
const axios = require("axios")

const app = express()

//configuraciones
app.set("port", process.env.port || 3000)
app.set("views", path.join(__dirname,"views"))

//middleware
app.use(express.urlencoded({extended:false}))
//app.use(require("./routes/index.routes"))

//rutas
app.get("/",async (request, response)=>{
    try {
        const videoUrl = 'https://raw.githubusercontent.com/soruly/trace.moe/master/demo.jpg'
        response = await axios.get('https://api.trace.moe/search', {
            params: {
              url: videoUrl
            }
          });

          const data = response.data

            response.send(JSON.stringify(data))
    } catch (error) {
        console.log(error)        
    }
})

module.exports = app