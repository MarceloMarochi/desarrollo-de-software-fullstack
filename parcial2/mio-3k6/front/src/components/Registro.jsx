import { useForm,  } from 'react-hook-form'
import {useState, React} from 'react'
import { Link } from 'react-router-dom';
import service from '../services/registro.service.js'


const Registro = () => {
    const  { register, handleSubmit, formState: {errors} } = useForm()

    const [nuevaReparacion, setNuevaReparacion] = useState([])

    const onSubmit = async (data) => {
        const nuevaReparacion = {
            Dni: data.Dni,
            FechaIngreso: data.FechaIngreso,
            TipoElectrodomestico: data.TipoElectrodomestico,
            Reparado: data.Reparado,
            Diagnostico: data.Diagnostico
        }
        
        await service.postDatos(nuevaReparacion)
        const repActualizados = await service.getDatos()
        setNuevaReparacion(repActualizados)
    }

    return (
        <>
            <div className="container_app">
                <h5>Reparaciones. Ordenes de Servicio</h5>
                <br />

                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div >
                            <label htmlFor="Dni">DNI Solicitante: </label>
                            <input type="number" id="Dni" {...register("Dni", {required: " - Requerido." })} />
                            {errors.Dni && <span>{errors.Dni.message}</span>}
                        </div>

                        <div>
                            <label htmlFor="FechaIngreso">Fecha Ingreso:  </label>
                            <input type="date" id="FechaIngreso" {...register("FechaIngreso", {required: " - Requerido." })} />
                            {errors.FechaIngreso && <span>{errors.FechaIngreso.message}</span>}
                        </div>

                        <div>
                            <label htmlFor="TipoElectrodomestico">Tipo Electrodoméstico:  </label>
                            <input type="text" id="TipoElectrodomestico" {...register("TipoElectrodomestico", {required: " - Requerido." })} />
                            {errors.TipoElectrodomestico && <span>{errors.TipoElectrodomestico.message}</span>}
                        </div>

                        <div>
                            <label htmlFor="Diagnostico">Diagnóstico:  </label>
                            <input type="text" id="Diagnostico" {...register("Diagnostico", {required: " - Requerido." })} />
                            {errors.Diagnostico && <span>{errors.Diagnostico.message}</span>}
                        </div>

                        <div>
                            <input type="checkbox" id="Reparado" {...register("Reparado")} />
                            <label htmlFor="Reparado">  Reparado</label>
                        </div>

                        <div>
                            
                            <button className="btn btn-primary" type="submit">Registrar</button>
                            <button className="btn btn-primary" type="reset">Limpiar</button>

                            <br />
                            <br />
                            <Link className="btn btn-primary" to="/registro/reparaciones">Mostrar tabla actualizada</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
  )
}

export default Registro
