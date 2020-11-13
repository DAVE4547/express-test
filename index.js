const express = require('express')
const app = express()

app.use(express.json())

    app.get('/test', (req, res) => {

        console.log(req.query['hub.challenge'])
        res.status('200').type('text/plain').send('hello world')

    })

    app.post('/post', (req, res) => {
        res.status('200')
        console.log(req.body)
    })


app.listen(3000, () => {
    console.log("Listening on port 3000...")
})