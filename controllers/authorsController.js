const { allAuthors, authorsAddition, authorsEdit, getAuthor, deleteAuthor } = require('../models/authorsModels')

const allAuthorsController = async (req, res) => {
    try {
            const authors = await allAuthors()
            return res.status(200).send(authors)
    } catch (error) {
            console.log(error)
            return res.send('An error occurred when obtaining all the authors')
    }
}

const getAuthorControllerById = async (req, res) => {
    const {id} = req.params
    try {
        const data = await getAuthor(id)
        return res.status(200).send({
            author: data,
            error: false,
            message: 'Author id obtained successfully'
        })
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            error: true,
            message: 'Error produced when obtaining author by Id'
        })
        
    }
}

const authorsAdditionController = async (req, res) => {
    //req.body es el body del objeto en json const author_name = req.body.author_name que va por destructuring 
    const {author_name, book_name, price} = req.body
    try {
        const authors = await authorsAddition(author_name, book_name, price)
        return res.status(201).send(authors)
    } catch (error) {
        console.log(error)
        return res.status(400).send('An error occurred when adding new authors')
        
    }
}

const authorsEditController = async (req, res) => {
    const {id} = req.params
    const {author_name, book_name, price} = req.body
    try {
        const data = await authorsEdit(author_name, book_name, price, id)
        return res.status(200).send({
            error: false,
            id,
            message: 'Author edited successfully'
        })
    } catch (error) {
        console.log(error)
        return res.status(400).send({
            error: true,
            message: 'An error placed in editing the author'
        })
        
    }
}

const deleteAuthorController = async (req, res) => {
    const {id} = req.params
    try {
        const data = await deleteAuthor(id)
        return res.status(200).send('deleted successfully')
    } catch (error) {
        return res.status(400).send('An error occurred when deleting authors')
    }
}

module.exports = {
    allAuthorsController,
    getAuthorControllerById,
    authorsAdditionController,
    deleteAuthorController,
    authorsEditController
}