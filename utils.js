const bcrypt = require('bcrypt');
const saltRounds = 10;

const encriptar = (dato) => {
    return bcrypt.hashSync(dato, saltRounds)
}

const verificarPass = (password, encriptada) => {
    return bcrypt.compareSync(password, encriptada)
}

module.exports = {
    encriptar,
    verificarPass
}