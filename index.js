//! const SaludarRoutes = require("./routes/greet.routes")
//! const DespedirRoutes = require("./routes/despedir.routes")

const ProductRoutes = require('./routes/products.routes')
const express = require('express')
const cors = require('cors')
const port = 3000;

const app = express()

//TODO  Middleware
app.use(express.json())
app.use(cors())

//TODO  Rutas
//app.use("/saludar",SaludarRoutes)
//app.use("/despedir",DespedirRoutes)

//? If is a API
app.use('/api/v1', ProductRoutes)


app.listen(port, () => console.log(`Server is running in http://localhost:${port}`))
