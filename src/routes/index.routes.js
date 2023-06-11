const {Router} = require("express")
const axios = require("axios")
const router = Router()

router.get("/",async (request, response)=>{
    response.send("test")
})

module.exports = router