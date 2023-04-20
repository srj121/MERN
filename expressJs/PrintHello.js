const express = require("express")

const app = express()

app.get('/', (req, res) => {
    const name = req.query.name || 'World'
    res.send(`hello ${name}!`)
})

app.listen(3000, () => {
    console.log('server started on poort 3000')
})


//http://localhost:3000/?name=John
