import React, { useEffect, useState } from 'react'
import service from '../services/registro.service.js'
import { Link } from 'react-router-dom';
    

const Consulta = () => {

    const [rows, setRows] = useState([])

    const traerDatos = async () => {
        const repa = await service.getDatos()
        setRows(repa)
    }

    useEffect(() => {traerDatos()}, [])
    
    
    function esReparado(data) {
        if (data) {
            return "Si"
        } else {
            return "No"
        }
    }

    return (
        <>
            <div className="container_app" >
                <br />
                <h5 style={{textAlign: "center"}}>Listado de órdenes de reparación</h5>
                <br />

                <table className="table" >
                    <thead>
                        <tr>
                            <th>Dni</th>
                            <th>Fecha Ingreso</th>
                            <th>Tipo Electrodoméstico</th>
                            <th>Diagnóstico</th>
                            <th>Reparado</th>
                        </tr>
                    </thead>

                    <tbody >
                        {rows && rows.map( (fila) => {
                            return (
                                <tr key={fila.Id}>
                                    <td>{fila.Dni}</td>
                                    <td>{fila.FechaIngreso}</td>
                                    <td>{fila.TipoElectrodomestico}</td>
                                    <td>{fila.Diagnostico}</td>
                                    <td>{esReparado(fila.Reparado)}</td>
                                </tr>
                            )
                        })}
                        
                    </tbody>

                    <br />
                    <br />
                    
                    <Link className="btn btn-primary" to="/registro">Volver</Link>
                </table>
            </div>

        </>
  )
}

export default Consulta
