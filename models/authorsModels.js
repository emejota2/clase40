const {request} = require('../db/config')

const allAuthors = async () => {
    const info = await request('SELECT * FROM authors')

    return info
}

const getAuthor = async (id) => {
    const data = await request(`SELECT author_name,book_name FROM authors WHERE id = ${id}`)

    if (data.length > 0){
        return data[0].author_name
    } else {
        return data
    }
}

const authorsAddition = async (author_name, book_name, price) => {
    const query = await request(`
    INSERT INTO authors(author_name, book_name, price)
    VALUES('${author_name}', '${book_name}', ${price});
    `)
    // el request hace la conexion a la BBDD
    return query
}

const authorsEdit = async (author_name, book_name, price, id) => {
    const query = await request(`
    UPDATE authors SET author_name = '${author_name}', book_name = '${book_name}', price = ${price}
    WHERE id = ${id}
    `)
    // el request hace la conexion a la BBDD
    return query
}

const deleteAuthor = async (id) => {
    const info = await request(`
    DELETE FROM authors
    WHERE id = ${id}
    `)

    return info
}

module.exports = {
    allAuthors,
    getAuthor,
    authorsAddition,
    authorsEdit,
    deleteAuthor
}