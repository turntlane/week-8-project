const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})


app.use('/js', express.static(path.join(__dirname, '/index.js')))

app.use('/config', express.static(path.join(__dirname, '/config.js')))

app.use('/css', express.static(path.join(__dirname, '/style.css')))

app.use('/img', express.static(path.join(__dirname, '/yeshi-kangrang-wTD1-_u8x1g-unsplash.jpg')))




let config = ({
  apiOne: process.env.myAPIKey,
  apiTwo: process.env.timeAPIKey
});

app.get('/api/config', (req, res) => {
    res.status(200).send(config)
})

const port = process.env.PORT || 4500;

app.listen(port, () => {
    console.log(`server up on ${port}`)
})