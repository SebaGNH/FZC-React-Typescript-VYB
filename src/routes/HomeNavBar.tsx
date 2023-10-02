import { NavLink } from 'react-router-dom';

export const HomeNavBar = () => {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">

              <NavLink to="/FormTask" className="nav-link btn btn-outline-primary mx-1">
              FormTask
              </NavLink>

              <NavLink to="/Suscriptores" className="nav-link btn btn-outline-primary mx-1">
              Suscriptores
              </NavLink>

              <NavLink to="/SuscriptoresReducer" className="nav-link btn btn-outline-primary mx-1">
              Susbs Reducer
              </NavLink>

              <NavLink to="/SuscriptoresHooksReducer" className="nav-link btn btn-outline-primary mx-1">
              Susbs Hooks Reducer
              </NavLink>

              <NavLink to="/UserReqres" className="nav-link btn btn-outline-primary mx-1">
              User Reqres
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">

              <NavLink to="/CSCounterReducer" className="nav-link btn btn-outline-primary mx-1">
              CSCounterReducer
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>

      <h1>HOME PAGE</h1>
      <p>En esta sección están las rutas</p>
    </div>
  )
}
