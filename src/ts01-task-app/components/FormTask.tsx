import { useNavigate } from 'react-router-dom';

export const FormTask = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // navigate(-1);
    navigate('/HomeNavBar');
  }

  return (
    <div className='m-2'>
      <button
        className='btn btn-outline-success btn-sm'
        onClick={() => handleClick()}
        > Volver atrás
      </button>
      <h1>Formulario</h1>
    </div>
  )
}




