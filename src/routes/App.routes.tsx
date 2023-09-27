import {Routes, Route} from 'react-router-dom';
import { FormTask } from '../fz01-task-app/components/FormTask';
import { HomeNavBar } from './HomeNavBar';
import { Suscriptores } from '../md01-subs/pages/Suscriptores';
import { SuscriptoresReducer } from '../md02-subs-reducer/pages/SuscriptoresReducer';
import { SuscriptoresHooksReducer } from '../md03-subs-hooks-reducer/pages/SuscriptoresHooksReducer';
import { UserReqres } from '../mi04-users-reducer/pages/UserReqres';


export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeNavBar />}/>
        <Route path='/*' element={<HomeNavBar />}/>
        <Route path='/FormTask' element={<FormTask />}/>
        <Route path='/Suscriptores' element={<Suscriptores />}/>
        <Route path='/SuscriptoresReducer' element={<SuscriptoresReducer />}/>
        <Route path='/SuscriptoresHooksReducer' element={<SuscriptoresHooksReducer />}/>
        <Route path='/UserReqres' element={<UserReqres />}/>
      </Routes>

    </>
  )
}
