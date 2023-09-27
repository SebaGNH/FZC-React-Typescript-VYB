import React, { useReducer } from 'react'
import { UserReqresI } from '../interfaces';

const initialState = {
  id: 0,
  email: '',
  first_name: '',
  last_name: '',
  avatar: ''
}

interface FormState {
  inputV: UserReqresI;
}

interface FormProps {
  handleSubmit: (newSub: FormState["inputV"]) => void;
  usersLength: number;
}

type FormReducerAction = {
  type: "change_value",
  payload:{
    id: number;
    inputName: string,
    inputValue: string
  }
} | {
  type: "clear"
}

const formReducer = (state: FormState["inputV"], action: FormReducerAction) => {
  console.log(state);
  // no se usa default ya que no debería soportar una opción no permitida
  switch (action.type) {
    case "change_value":
      const { inputName, inputValue, id} = action.payload;
      return {
        ...state,
        [inputName]: inputValue,
        id,
        avatar: `https://randomuser.me/api/portraits/med/men/${id}.jpg`
      }
    case "clear":
      return initialState;
  }

}


export const FormSubs = ({handleSubmit, usersLength}: FormProps) => {
  const [stateInputVal, dispatch] = useReducer(formReducer, initialState);

  // Handle Submit
  const onSubmit = (ev: React.FormEvent<HTMLFormElement> ) => {
    ev.preventDefault();
    handleSubmit(stateInputVal); // Enviamos a Padre
    dispatch({
      type: "clear"
    })
  }

  // Handle Change
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value} = ev.target; // ev.target.name y ev.target.value
    dispatch({
      type: "change_value",
      payload: {
        id: usersLength,
        inputName: name,
        inputValue: value
      }
    })
  }

  return (
    <form onSubmit={onSubmit} className='col-md-6'>
      <input onChange={handleChange} name='first_name' value={stateInputVal.first_name} type="text" placeholder='Nombre' className='form-control mb-2'/>

      <input onChange={handleChange} name='last_name' value={stateInputVal.last_name} type="text" placeholder='Apellido' className='form-control mb-2'/>

      <input onChange={handleChange} name='email' value={stateInputVal.email} type="text" placeholder='Email' className='form-control mb-2'/>

      {/* <input onChange={handleChange} name='avatar' value={stateInputVal.avatar} type="text" placeholder='Link Avatar' className='form-control mb-2'/> */}

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