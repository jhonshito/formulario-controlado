import { useRef } from "react"

const FormNoControlados = () => {

  const formulario = useRef(null) 
  const handleSubmit = e => {
    e.preventDefault();
    
    const datos = new FormData(formulario.current)
    
    const objectoDatos = Object.fromEntries([...datos.entries()])
    console.log(objectoDatos)

    const {todoName, todoDescripcion} = objectoDatos;
    if(!todoDescripcion.trim() || !todoName.trim()){
      console.log('nooooo esta vacio')
      return
    }

    console.log('paso la validacion')
  };


  return (
    <div>
      <h2 className="lead">Formulario no controlado</h2>
      <form ref={formulario} onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2" 
          name="todoName"
          placeholder="Ingresa todo"
          defaultValue='Tarea #1'
        />
        <textarea
          name="todoDescripcion"
          className="form-control mb-2"
          placeholder="Ingrese descripcion del todo"
          defaultValue='Descripcion Tarea #1'
        />
        <select
          name="todoEstado"
          className="form-control mb-2"
          placeholder="seleccione su estado"
          defaultValue='pendiente'
        >
          <option value="pendiente">pendiendte</option>
          <option value="completado">completado</option>
        </select>
        <button className="btn btn-success">Agregar</button>
      </form>
    </div>
  )
}

export default FormNoControlados