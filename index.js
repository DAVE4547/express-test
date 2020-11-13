const express = require('express')
const app = express()

app.use(express.json())

    app.get('/twitch', (req, res) => {

        console.log(req.query['hub.challenge'])
        res.status('200').type('text/plain').send(req.query['hub.challenge'])

    })

    app.post('/twitch', (req, res) => {
        res.status('200')
        console.log(req.body)
    })


app.listen(3001, () => {
    console.log("Listening on port 3001...")
})