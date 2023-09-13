import { useNavigate } from 'react-router-dom';

export const FormTask = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    // navigate(-1);
    navigate('/'); // Vuelve a "http://localhost:5173/"
  }

  return (
    <div className='container'>
      <button
        className='btn btn-outline-success m-2'
        onClick={() => handleBack()}
        > Volver
      </button>

      <h1>Formulario</h1>
    </div>
  )
}




