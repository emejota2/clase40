const express = require('express')
const router = express.Router()
const validar = require('./middlewares')
//const {allAuthorsController, authorsAdditionController, deleteAuthorController } = require('../controllers/authorsController')
const authorsControllers = require('../controllers/authorsController')

// router.get('/:id', validar, (req, res) => {
//     res.send(`The author id is: ${req.params.id}`)
// })

router.get('/', authorsControllers.allAuthorsController)

router.get('/:id', authorsControllers.getAuthorControllerById)

router.post("/create", authorsControllers.authorsAdditionController)

router.put("/edit/:id", authorsControllers.authorsEditController)

router.put("/edit/:category/:subcategory", (req, res) => {
    res.send(`category: ${req.params.category}, subcategory: ${req.params.subcategory}`)
})

router.delete("/delete/:id", authorsControllers.deleteAuthorController)

module.exports = router;