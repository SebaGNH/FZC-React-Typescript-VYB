import { useState } from "react";
import { ButtonBack } from "../../components/ButtonBack";

// Lo creamos con un Type para que sea más abreviado
// Elemento de formulario
type FormElement = React.FormEvent<HTMLFormElement>;


export const FormTask = () => {
  const [newTask, setNewTask] = useState<string>('');
  const [taskList, setTaskList] = useState<string[]>([]);

  // const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) : void => {
  const handleSubmit = (ev: FormElement) : void => {
    ev.preventDefault();
    console.log('Submit:', newTask);
    setTaskList([...taskList, newTask]);
    setNewTask('')
  }
  return (
    <div className='container'>
      <ButtonBack />

      <h1>Formulario</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={ ev => setNewTask( ev.target.value)}
        />
        <br />
        <button className="btn btn-primary mt-2">Save</button>
      </form>
      {
        taskList.map( (t: string, i: number) => <p key={i}>{t}</p>)
      }
    </div>
  )
}




