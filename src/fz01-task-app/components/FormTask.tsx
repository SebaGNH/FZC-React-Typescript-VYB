import { useState } from "react";
import { ButtonBack } from "../../components/ButtonBack";

// Lo creamos con un Type para que sea más abreviado
// Elemento de formulario
type FormElement = React.FormEvent<HTMLFormElement>;


export const FormTask = () => {
  const [newTask, setNewTask] = useState<string>('');
  const [taskList, setTaskList] = useState<string[]>([]);

  // const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) : void => {

  //Agregar nuevo elemento a la lista
  const handleSubmit = (ev: FormElement) : void => {
    ev.preventDefault();
    setTaskList([...taskList, newTask]);
    setNewTask(''); // limpiamos
  }

  // Eliminar elemento de la lista
  const removeTask = (i: number) => {
    const updateTasks = [...taskList];
    updateTasks.splice(i,1);
    setTaskList(updateTasks);
  }

  return (
    <div className='container'>
      <ButtonBack />

      <h1>Lista de tareas con formulario simple</h1>

      <form onSubmit={handleSubmit} className="col-md-6">
        <input
          type="text"
          value={newTask}
          onChange={ ev => setNewTask( ev.target.value)}
          className="col-md-12"
        />
        <br />
        <button className="btn btn-primary mt-2 col-md-12">Save</button>
      </form>

      <div className="mt-3 d-flex flex-column col-md-3">
      {
        taskList.map( (t: string, i: number) =>
          (
            <div
              key={i}
              onClick={() => removeTask(i)}
              className="btn btn-outline-secondary p-2 my-2"
            >{t}</div>
          )
        )
      }
      </div>
    </div>
  )
}




