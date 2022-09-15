const {request} = require('../db/config')
const { verificarPass } = require('../utils')

const login = async (usuario, password) => {
    const info = await request(`SELECT * FROM users WHERE usuario = '${usuario}'`)

    if(info.length > 0){
        if(verificarPass(password, info[0].password)){
            return {
                error: false,
                info
            } 
        } else {
            return {
                error: true,
                msg: 'Usuario o contraseña incorrecta'
            }
            
        }
    } else {
        return {
            error: true,
            msg: 'Usuario no registrado'  
        } 
    }
}

const createUser = async (usuario, nombre, password) => {
    const data = await request(`
    INSERT INTO users (usuario, nombre, password)
    VALUES('${usuario}', '${nombre}', '${password}');
    `)
    // el request hace la conexion a la BBDD
    return data;
}

module.exports = {
    login,
    createUser
}

