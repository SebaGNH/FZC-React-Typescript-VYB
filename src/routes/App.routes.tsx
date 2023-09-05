import {Routes, Route} from 'react-router-dom';
import { FormTask } from '../ts01-task-app/components/FormTask';
import { HomeNavBar } from './HomeNavBar';

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/HomeNavBar' element={<HomeNavBar />}/>
        <Route path='/FormTask' element={<FormTask />}/>
      </Routes>

    </>
  )
}
