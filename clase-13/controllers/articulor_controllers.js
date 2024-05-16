// El sentido de que haya un controler antes de un servicio es que
// desacoplamos parte del código. Es una capa que junta todo lo que necesita
// antes de pasarla. NO HAY LOGICA DE NEGOCIO EN EL CONTROLADOR, ESO ESTÁ EN
// EL SERVICIO. El controler junta la informacion obtenida de los distintos servicios
// y que se la pidieron mediante peticion

const getArticuloById = async (req, res) => {
    try {
        res.status(200)
        res.send("Se solicito el articulo id: " + req.params.id)
    }
    catch(e) {

    }
}

const getArticulo = async (req, res) => {
    try {
        res.status(200)
        res.send("Se solicitaron todos los articulos")
    }
    catch(e) {
        
    }
}

const postArticulo = async (req, res) => {
    try {
        res.status(200)
        res.send("Se solicitaron todos los articulos")
    }
    catch(e) {
        
    }
}

module.exports = {getArticuloById, getArticulo, postArticulo}