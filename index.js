import express from "express"
import usuarioRoutes from './routes/usuarioRoutes.js'
import db from './config/db.js'

// crear la app
const app = express()

//Habilitar lectura datos de formularios
app.use(express.urlencoded({extended: true}))

// Conexion a la base de datos
try {
    await db.authenticate();
    db.sync()
    console.log('Conexion correcta a la BD')
} catch (error){
    console.log(error)
}

// routing
app.use('/auth', usuarioRoutes)

// Habilitar pug
app.set('view engine', 'pug')
app.set('views', './views')

// carpeta publica
app.use( express.static('public'))

// definir un puerto y arrancar el proyecto
const port = 3000;

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto: ${port}`)
})