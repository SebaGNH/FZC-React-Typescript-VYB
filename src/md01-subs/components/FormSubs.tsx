import React, { useState } from 'react'
import { SubI } from '../interfaces';

interface FormState {
  inputV: SubI;
}

export const FormSubs = () => {
  // const [inputValues, setInputValues] = useState<SubI>({
  const [inputValues, setInputValues] = useState<FormState["inputV"]>({
    nick: '',
    email:'',
    description: ''
  });

  // Handle Submit
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log('handleSubmit', inputValues);
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
