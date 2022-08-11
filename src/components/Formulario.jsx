import { useState } from "react";

const Formulario = () => {

    const [todo, setTodo] = useState({
        todoName: '',
        todoDescripcion: '',
        todoEstado: 'pendiente',
        todoCheck: false

    });

    const [error, setError] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();

        const {todoDescripcion, todoName} = todo

        if(!todoDescripcion.trim() || !todoName.trim()){
          setError(true)
          return
        }

        console.log(todo)
        setError(false)
        setTodo({
          todoName: '',
          todoDescripcion: '',
          todoEstado: 'pendiente',
          todoCheck: false
        })
    };



    const handleChange = e => {

      const {name, type, checked, value} = e.target
        setTodo({
          ...todo,
          [name]: type === 'checkbox' ? checked : value
        })
    }


    const PintarError = () => (
      <div className="alert alert-danger">Campo obligatrio</div>
    )

  return (
    <div>
        <h2>formulario controlado</h2>

        {
          error ? <PintarError /> : null
        }

        <h2 className="lead">Formulario no controlado</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2" 
          name="todoName"
          placeholder="Ingresa todo"
          onChange={handleChange}
          value={todo.todoName}
        />
        <textarea
          name="todoDescripcion"
          className="form-control mb-2"
          placeholder="Ingrese descripcion del todo"
          onChange={handleChange}
          value={todo.todoDescripcion}
        />
        <select
          name="todoEstado"
          className="form-control mb-2"
          placeholder="seleccione su estado"
          onChange={handleChange}
          value={todo.todoEstado}
        >
          <option value="pendiente">pendiendte</option>
          <option value="completado">completado</option>
        </select>
        <div className="form-check">
          <input
          className="form-check-input"
          type="checkbox"
          name="todoCheck"
          checked={todo.todoCheck}
          onChange={handleChange}
          id="flexCheckDefault"/>
          <label className="form-check-label" htmlFor="flexCheckDefault">
             Dar prioridad
          </label>
        </div>

        <button className="btn btn-success" type="submit">Agregar</button>
      </form>
    </div>
  )
}

export default Formulario