import React, { useState } from 'react'
import { SubI } from '../interfaces';

interface FormState {
  inputV: SubI;
}

interface FormProps {
  // setSubs: () => {}
  setSubs: React.Dispatch<React.SetStateAction<SubI[]>>
}

export const FormSubs = ({setSubs}: FormProps) => {
  // const [inputValues, setInputValues] = useState<SubI>({
  const [inputValues, setInputValues] = useState<FormState["inputV"]>({
    nick: '',
    email:'',
    description: ''
  });

  // Handle Submit
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement> ) => {
    ev.preventDefault();
    setSubs(subs => ([...subs, inputValues])); //sumamos uno nuevo
    // console.log('handleSubmit', inputValues);
    setInputValues({
      nick: '',
      email:'',
      description: ''
    });
  }

  // Handle Change
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues( {...inputValues,
    [ev.target.name]: ev.target.value});
  }

  return (
    <form onSubmit={handleSubmit} className='col-md-6'>
      <input onChange={handleChange} value={inputValues.nick} type="text" name='nick' placeholder='nick' className='form-control mb-2'/>

      <input onChange={handleChange} value={inputValues.email} type="text" name='email' placeholder='email' className='form-control mb-2'/>

      <textarea onChange={handleChange} value={inputValues.description} name='description' placeholder='description' className='form-control mb-2'/>

      <button type="submit" className='btn btn-primary mt-3'>Enviar</button>
    </form>
  )
}
