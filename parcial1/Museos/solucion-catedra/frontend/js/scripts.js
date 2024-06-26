const cargarMuseos = async () => {
  try {
    let nombre = document.getElementById("nombre").value;

    let response = await fetch("http://localhost:3000/museos?nombre=" + nombre);

    let data = await response.json();

    const tableBody = document.querySelector("#lista-museos");
    tableBody.innerHTML = "";
    let contenido = "";
    data.forEach((museo) => {
      contenido += `<tr>
            <td>${museo.nombre}</td>
            <td>${museo.ubicacion}</td>
            <td>${museo.exposiciones}</td>
            <td>${museo.horarios}</td>
            <td>${museo.precioEntrada}</td>
            </tr>`;
      tableBody.innerHTML = contenido;
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

cargarMuseos();
