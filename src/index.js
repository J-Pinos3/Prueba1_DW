const app = require("./server.js")


app.listen(app.get("port"), ()=>{
    console.log(`Servidor conectado en el puerto ${app.get("port")}`)
})