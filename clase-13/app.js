// npm i --save-dev nodemon (Para instalar una dependencia en modo desarrollador)
requier("dotenv").config()
const express = requiere('express')
const app = express()
const port = process.env,API_PART

app.se(express.json())

app.use("api", requiere("./routes/articulosRoute"))

app.listen(port, () => {
    console.log("aa")
})