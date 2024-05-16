const cargarDatos = async () => {
    const divCursos = document.getElementById('divCursos');
    if(divCursos){
        let nivel = 0;
        const ddlNivel = document.getElementById('ddlNivel');
        if (ddlNivel){
            nivel = ddlNivel.value;
        }


        const res = await fetch(`http://localhost:3000/cursos/${nivel}`);
        const datos = await res.json();
        let contenido = '<table class="table">';
        contenido += `
        <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Nivel</th>
        </tr>                
        `
        datos.forEach(c => {
            contenido += `
            <tr>
                <td>${c.id}</td>
                <td>${c.nombre}</td>
                <td>${c.nivel}</td>
            </tr>                
            `
        })
        contenido += `</table>`


        divCursos.innerHTML = contenido;
    }
}

const btnCargarCursos = document.getElementById('btnCargarCursos');
if (btnCargarCursos){
    btnCargarCursos.addEventListener('click', ()=>{cargarDatos()})
}