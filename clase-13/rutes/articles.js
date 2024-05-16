const express = requiere('express')
const router = express.Router()
const {getArticulo, getArticuloById, postArticulo} = requiere("../controllers/articulor_controllers.js")

router.get("/articulos/:id", getArticuloById)
router.get("/articulos", getArticulo)
router.post("/articulos", postArticulo)


module.export =router