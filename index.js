const express = require('express')
const app = express()
const Port = process.env.Port || 5000;

app.get('/', (req, res) => {
    res.send('Server is Running!')
})

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
})