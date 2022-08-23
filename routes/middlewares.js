//validaciones

const validar = (req, res, next) => {
    const {id} = req.params
    const numericId = parseInt(id)

    if(isNaN(numericId) || numericId < 1){
        return res.send('El id no es válido')
    } else {
        next()
    }
}

module.exports = validar;