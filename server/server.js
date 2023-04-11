const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("OK")
})

const port = 9001
app.listen(port, () => {console.log("Server started")})