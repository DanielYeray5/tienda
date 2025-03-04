const {despedir} = require('../service/despedir.service');

const despedirController = (req, res) => {
    const mensajeDespedida = despedir()
    res.json(mensajeDespedida)
}

module.exports = {despedirController}