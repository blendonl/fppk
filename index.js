const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('A')
})


app.listen(process.env.PORT || 5000, () => console.log('Server ready'))