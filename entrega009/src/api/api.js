//COSAS QUE HE INSTALADO
const express = require("express")

const cors = require("cors")

const bodyParser = require("body-parser")

const mysql = require("mysql")

const app = express()

//COSAS QUE USA LA APP
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

//CONEXION A LA BBDD
const connection = mysql.createConnection({
    host: "localhost",
    user: "sergio",
    password: "sergio",
    database: "notas",
})

// REALIZANDO CONEXION
connection.connect((error) => {
    if (error) throw error
    console.log("DATABASE UP :)")
});

// CONEXION A LA API
const PORT = 3308

//CONEXION DEL SERVICIO
app.listen(PORT, () => console.log("API UP :)"))

// // ENVIANDO MENSAJE DE BIENVENIDA
// app.get('/', (req, res) => {
//     res.send('Hola :)')
// })

//RECOGER TODOS LOS CLIENTES DE LA BBDD
app.get('/clientes', (req, res) => {

    //SECUENCIA SQL
    const sql = 'SELECT * FROM listaclientes'

    //CONEXION A LA BBDD
    connection.query(sql, (error, results) => {
        if (error) throw error
        if (results.length > 0) {
            res.json(results)
        } else {
            console.log('No hay clientes que mostrar :(')
        }
    })
})

app.get('/productos', (req, res) => {

    //SECUENCIA SQL
    const sql = 'SELECT * FROM listaproductos'

    //CONEXION A LA BBDD
    connection.query(sql, (error, results) => {
        if (error) throw error
        if (results.length > 0) {
            res.json(results)
        } else {
            console.log('No hay productos que mostrar :(')
        }
    })
})

//AÑADIR CLIENTES A LA BBDD
app.post('/add', (req, res) => {

    //SECUENCIA SQL
    const sql = 'INSERT INTO listaclientes SET ?'

    //OBJETO DE DATOS DEL NUEVO CLIENTE
    const nuevoCliente = {
        nombre: req.body.nombre,
        usuario: req.body.usuario,
        password: req.body.password,
        email: req.body.email,
        foto: req.body.foto,
    }

    //CONEXION A LA BBDD
    connection.query(sql, nuevoCliente, error => {
        if (error) throw error
        console.log('Cliente creado con exito :)')
    })

})

// ACTUALIZAR CLIENTES EN LA BBDD
app.put('/update/:id', (req, res) => {
    //DATOS QUE RECIBIMOS
    const id = req.params.id
    const nombre = req.body.nombre
    const usuario = req.body.usuario
    const password = req.body.password
    const email = req.body.email
    const foto = req.body.foto

    //SECUENCIA SQL
    const sql = `UPDATE listaclientes SET nombre='${nombre}', usuario='${usuario}', password='${password}', email='${email}', foto='${foto}' WHERE id=${id}`

    //CONEXION A LA BBDD
    connection.query(sql, error => {
        if (error) throw error
        console.log('Cliente actualizado con exito :)')
    })
})

//BORRANDO CLIENTES EN LA BBDD
app.delete('/delete/:id', (req, res) => {
    //DATOS QUE LLEGAN DE LA VISTA
    const id = req.params.id

    //SECUENCIA SQL 
    const sql = `DELETE FROM listaclientes WHERE id=${id}`

    //CONEXION A LA BBDD
    connection.query(sql, error => {
        if (error) throw error
        console.log('Cliente borrado :(')
    })
})