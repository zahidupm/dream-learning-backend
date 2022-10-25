const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors());
const Port = process.env.Port || 5000;

const items = require('./data/learners.json')

app.get('/', (req, res) => {
    res.send('Server is Running!')
})

app.get('/all', (req, res) => {
    res.send(items)
})

app.get('/item/:id', (req, res) => {
    const id = req.params.id;
    const singleItem = items?.find(item => item.id == id);
    if(!singleItem) {
        res.send('no item found')
    }
    res.send(singleItem);
})

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
})