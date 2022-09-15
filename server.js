const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()

const authorsRouter = require('./routes/authorsRoutes')
const loginRouter = require('./routes/loginRoutes')

const port = 8000

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/authors', authorsRouter)
app.use('/login', loginRouter)

app.get('/', (req, res) => {
    res.send('This is the home page')
})

app.listen(port, () => {
    console.log(`el servidor esta corriendo en el puerto ${port}`)
})

