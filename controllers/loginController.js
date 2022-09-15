const { createUser, login } = require('../models/loginModels');
const { encriptar } = require('../utils');

const loginController = async (req, res) => {
    const {usuario, password} = req.body;
    try {
        const user = await login(usuario, password)
        if (user.error) {
            return res.status(200).send(user)
        } else {
            return res.status(200).send(user)
        }
    } catch (error) {
        console.log(error)
        return res.send({
            error: true,
            msg: 'se produjo un error al hacer el login'
        })
    }
}

const registerController = async (req, res) => {
    const {usuario, nombre, password} = req.body;
    const pass = encriptar(password)
    console.log(pass)

    try {
        const user = await createUser(usuario, nombre, pass)
        return res.status(201).send({
        error: false,
        msg: "usuario creado correctamente",
        user
    })
    } catch (error) {
        console.log(error)
        return res.send({
            error: true,
            msg: 'se produjo un error al crear el usuario'
        })
    }
}

module.exports = {
    loginController,
    registerController
}