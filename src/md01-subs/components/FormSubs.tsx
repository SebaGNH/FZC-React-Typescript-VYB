import React, { useState } from 'react'

export const FormSubs = () => {
  const [inputValues, setInputValues] = useState({
    nick: '',
    email:'',
    avatar: '',
    birthday: ''
  });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log('handleSubmit', inputValues);
  }

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues( {...inputValues,
    [ev.target.name]: ev.target.value});
  }

  return (
    <form onSubmit={handleSubmit} className='col-md-6'>
      <input onChange={handleChange} value={inputValues.nick} type="text" name='nick' placeholder='nick' className='form-control mb-2'/>

      <input onChange={handleChange} value={inputValues.email} type="text" name='email' placeholder='email' className='form-control mb-2'/>

      <input onChange={handleChange} value={inputValues.avatar} type="text" name='avatar' placeholder='avatar' className='form-control mb-2'/>

      <textarea onChange={handleChange} value={inputValues.birthday} name='birthday' placeholder='birthday' className='form-control mb-2'/>

      <button type="submit" className='btn btn-primary mt-3'>Enviar</button>

    </form>
  )
}
