const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname + '/index.html'))
})


app.listen(process.env.PORT || 5000, () => console.log('Server ready'))