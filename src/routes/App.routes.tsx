import {Routes, Route} from 'react-router-dom';
import { FormTask } from '../fz01-task-app/components/FormTask';
import { HomeNavBar } from './HomeNavBar';

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeNavBar />}/>
        <Route path='/FormTask' element={<FormTask />}/>
      </Routes>

    </>
  )
}
