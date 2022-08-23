const express = require('express')

const app = express()

const authorsRouter = require('./routes/authorsRoutes')

const port = 8000

app.use(express.json())

app.use('/authors', authorsRouter)

app.get('/', (req, res) => {
    res.send('This is the home page')
})

app.listen(port, () => {
    console.log(`el servidor esta corriendo en el puerto ${port}`)
})

