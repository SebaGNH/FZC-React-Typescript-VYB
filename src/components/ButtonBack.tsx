import { useNavigate } from 'react-router-dom';

export const ButtonBack = () => {
  const navigate = useNavigate();

  const handleBack = () : void => {
    // navigate(-1);
    navigate('/'); // Vuelve a "http://localhost:5173/"
  }

  return (
    <button onClick={handleBack} className='btn btn-outline-success m-2'>Volver</button>
  )
}
