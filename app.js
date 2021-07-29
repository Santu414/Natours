const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.status(200).send('Hello from server side')
})

const port = process.env.PORT | 3000;

app.listen(port,console.log(`App is running on port number ${port}`))