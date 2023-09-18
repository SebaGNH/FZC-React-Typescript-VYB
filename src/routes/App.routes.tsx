import {Routes, Route} from 'react-router-dom';
import { FormTask } from '../fz01-task-app/components/FormTask';
import { HomeNavBar } from './HomeNavBar';
import { Suscriptores } from '../md01-subs/pages/Suscriptores';

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeNavBar />}/>
        <Route path='/FormTask' element={<FormTask />}/>
        <Route path='/Suscriptores' element={<Suscriptores />}/>
      </Routes>

    </>
  )
}
