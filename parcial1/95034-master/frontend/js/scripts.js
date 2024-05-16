
async function cargarMusculos(URL) {
  try {
    const res = await fetch(URL);
    const musculos = await res.json()
    const cuerpoTabla = document.getElementById('tabla-contenido')
    musculos.forEach((musculo) => {
      const row = 
        `<tr>
          <td>${musculo.nombre}</td>
          <td>${musculo.ubicacion}</td>
          <td>${musculo.funcion}</td>
          <td>${musculo.tipoFibra}</td>
          <td>${musculo.acciones}</td>
          <td><link>${musculo.enlace}</link></td>
        </tr>`
        cuerpoTabla.innerHTML += row
    })
  } catch (err) {
    console.err("Ha ocurrido un error al cargar los datos de los musculos", err)
  }

}
cargarMusculos("http://localhost:3000/musculos");

