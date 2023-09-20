import { useNewSubForm } from '../hooks/useNewSubForm';

interface FormProps {
  handleSubmit: (newSub: FormState["inputV"]) => void;
}

export const FormSubs = ({handleSubmit}: FormProps) => {

  const [stateInputVal, dispatch ]  = useNewSubForm();

  // Handle Submit
  const onSubmit = (ev: React.FormEvent<HTMLFormElement> ) => {
    ev.preventDefault();
    handleSubmit(stateInputVal); // Enviamos a Padre
    dispatch({
      type: "clear"
    })
  }

  // Handle Change
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value} = ev.target; // ev.target.name y ev.target.value
    dispatch({
      type: "change_value",
      payload: {
        inputName:name,
        inputValue: value
      }
    })
    // setInputValues( {...inputValues,
    // [ev.target.name]: ev.target.value});
  }

  return (
    <form onSubmit={onSubmit} className='col-md-6'>
      <input onChange={handleChange} value={stateInputVal.nick} type="text" name='nick' placeholder='nick' className='form-control mb-2'/>

      <input onChange={handleChange} value={stateInputVal.email} type="text" name='email' placeholder='email' className='form-control mb-2'/>

      <textarea onChange={handleChange} value={stateInputVal.description} name='description' placeholder='description' className='form-control mb-2'/>

      <button type="submit" className='btn btn-primary mt-3'>Enviar</button>
    </form>
  )
}


/*
  // Handle Submit
  // const handleSubmit = (ev: React.FormEvent<HTMLFormElement> ) => {
  //   ev.preventDefault();
  //   setSubs(subs => ([...subs, inputValues])); //sumamos uno nuevo
  //   // console.log('handleSubmit', inputValues);
  //   setInputValues({
  //     nick: '',
  //     email:'',
  //     description: ''
  //   });
  // }
*/