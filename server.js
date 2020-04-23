const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000

app.use(express.static('.'))

app.get('/', (req, res) => {
    res.sendFile("index.html")
})

app.listen(PORT, () => {console.log(`Running on port: ${PORT}`)})