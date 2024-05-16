1 Crear las carpetas frontend y backend dentro de la carpeta Simulacro

==========================================
BACKEND
==========================================

2 Situarse en la carpeta backend

3 Ejecutar npm init -y

4 Instalar paquetes SQLite, Sequelize, Express y Cors

5 Crear las carpetas data, models y services

6 Dentro de la carpeta data, crear el archivo db.js el cual debe exportar una instancia de se de datos SQLite abierta en memoria utilizando sequelize 'sqlite::memory:' 
	const sequelize = new Sequelize("sqlite::memory:");

7 Dentro de la carpeta models crear el archivo reservas.js en el cual se debe definir (sequelize.define()) el modelo sequelize para la tabla reservas. Dicha definición deberá contener los siguientes atributos:
	- idReserva: Clave primaria, tipo de dato entero, autonumérico
	- fechaReserva: tipo de dato fecha, valor requerido
	- jugador: tipo de dato texto
	- numeroCancha: tipo de dato entero, valor requerido
En este archivo será necesario declarar "DataTypes" del paquete sequelize, por otro lado será necesario tener una referencia a "../data/db.js"

8 Dentro de la carpeta services, crear el archivo reservassvc.js en el cual se deberán definir las operaciones de manipulación de datos para el modelo reservas:
	a) Get all reservas ordenadas por fecha y numero de cancha -> getAll()
	b) Get reservas by Jugador -> getAllByJugador(nombreJugador)

Ambas funciones deben utilizar el método "findAll" que provee sequelize para realizar consultas sobre un modelo.

a) Esta función debe utilizar el atributo "order" para ordenar por "fechaReserva" y "numeroCancha"
b) Esta función debe utilizar el atributo "where" para filtrar por "jugador" utilizando el operador "[Op.startsWith]: nombreJugador"

En este archivo será necesario declarar los operadores (OP) de sequelize para poder utilizar el operador startWith, por otra parte deberá tener una referencia al modelo Reserva "../models/reservas"

Este módulo debe exportar las dos funciones {getAll, getAllByJugador}

EXPRESS
9 Crear el archivo app.js en el cual levantaremos el servidor express. 
En este archivo será necesario declarar Express, Cors, hacer referencia a "./data/db.js", "./models/reservas" y el servicio de reservas "./services/reservassvc".

10 Configurar el servidor Express 
	use(express.json())
	user(cors())

11 Definir una ruta ("/reservas") que según reciba o no un parámetro por queryString llame a la función que retorne un JSON con todas las reservas o solo las que coincidan con el filtro por nombre del jugador

	Ruta -> app.get('/reservas',.....
	Lectura del queryString -> (req.query.Jugador != undefined && req.query.Jugador !== "")
	
12 En el mismo app.js crear una función asíncrona llamada DBInit() que realice la inicialización de la base de datos sequelize.sync() y además genere datos para el modelo Reserva llamando al método BulkCreate([{},{},{}]);

    await ReservasModel.bulkCreate([
        { fechaReserva: '2024-05-07 13:00', jugador: 'Carlos Calvo', numeroCancha: '1'},
        { fechaReserva: '2024-05-07 14:00', jugador: '', numeroCancha: '2'},
        { fechaReserva: '2024-05-07 15:00', jugador: '', numeroCancha: '1'},
        { fechaReserva: '2024-05-07 16:00', jugador: 'Laura Lopez', numeroCancha: '2'},
        { fechaReserva: '2024-05-07 17:00', jugador: 'Martin Miranda', numeroCancha: '1'},
        { fechaReserva: '2024-05-07 18:00', jugador: '', numeroCancha: '2'},
        { fechaReserva: '2024-05-07 19:00', jugador: 'Andrea Alvarez', numeroCancha: '1'},
        { fechaReserva: '2024-05-07 20:00', jugador: '', numeroCancha: '2'} 
    ]);

13 Levantar el servidor express en el puerto 3000 después de completada la llamada a la función asíncrona DBInit()

DBInit().then(() => {
    app.listen(.....
EXPRESS

14 Ejecutar el backend "node app.js" y realizar pruebas desde un browser o postman 
	- http://localhost:3000/reservas
	- http://localhost:3000/reservas?Jugador=Laura

==========================================
FRONTEND
==========================================

15 Situarse en la carpeta fronend 

16 Crear las carpeta, js

17 Crear el archivo "index.html"

18 En el <head>, agregar agregar una referencia a bootstrap y a un archivo js donde escribiremos código JavaScript para recuperar la reservas
	css -> href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
	js -> src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
	js -> src="js\scripts.js"

19 Dentro del body, agregar un <header> y dentro del agregar una barra de navegación
	<nav class="navbar fixed-top navbar-expand-lg navbar-static-top bg-body-tertiary">
20 Dentro del <nav> agregar los elementos:
	<div class="container-fluid">
            <a class="navbar-brand" href="#">Estado de reservas	</a>
            <button
            	class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>

21 Inmediatamente después del header, agregar un <div> que contendrá una tabla donde se mostrarán los resultados obtenidos por el fetch
	<div class="container" style="margin-top: 70px">
            <table
                class="table table-bordered border-primary table-striped container-xl">
                <thead>
                    <tr>
                        <th scope="col">IdReserva</th>
                        <th scope="col">Fecha de reserva</th>
                        <th scope="col">Jugador</th>
                        <th scope="col"># de Cancha</th>
                    </tr>
                </thead>
                <tbody id="TablaReservas">
                </tbody>
            </table>
        </div>

22 Inmediatamente después del div que contiene la tabla, agregar una sección <footer>
	<footer
            class="footer-dark bg-dark text-light justify-content-between align-items-center py-3 border-top">
            <span class="m-3 mb-3 mb-md-0">
                © 2024 Desarrollo de Software, UTN FRC, Córdoba, Argentina.
            </span>
        </footer>

23 Situarse en la carpeta "js"

24 Crear el archivo "scripts.js" y escribir una function llamada RecuperarReservas, la cual deberá:
 	a) hacer un fetch a la url sobre la que montamos la ruta para devolver todas las reservas
	b) recorrer los resultados y cargar la grilla 

25 En el archivo index.html, agregar un boton primary de bootstrap y vincular el atributo onClick on la función RecuperarReservas()


