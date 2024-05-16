//Aqui nos conectaremos con el backend
// funcion para cargar los musculos 
function cargarMusculos() {
  const musculos = fetch("http://localhost:3000/musculos");
  
  musculos
    .then((respuesta) => {
     console.log(respuesta);
      return respuesta.json();
    })
    .then((musculos) => {
 
     //carga de datos en la tabla
      const listaMusculos = document.getElementById("tabla-contenido");
      listaMusculos.innerHTML = ''; // limpiamos la tabla anterior
      for (let musculo of musculos) {
        const row = `
          <tr>
            <td>${musculo.nombre}</td>
            <td>${musculo.ubicacion}</td>
            <td>${musculo.funcion}</td>
            <td>${musculo.tipoFibra}</td>
            <td>${musculo.acciones}</td>
            <td>${musculo.enlace}</td>
          </tr>
        `;
        listaMusculos.innerHTML += row; // se agrega fila a la tabla
        console.log(row); 
      }
    })
    .catch((error) => console.log("Error al cargar los musculos: ", error));

    console.log("Carga pendiente de musculos...");
};


//const cargarMusculos = () => {
  //Aqui nos conectaremos con el backend
//};

cargarMusculos();
