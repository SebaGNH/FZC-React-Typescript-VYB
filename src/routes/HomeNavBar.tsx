import { NavLink } from 'react-router-dom';

export const HomeNavBar = () => {
  return (
    <div className='mx-2'>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">

              <NavLink to="/FormTask" className="nav-link btn btn-info">
              FormTask
              </NavLink>

            </ul>
          </div>
        </div>
      </nav>

      <h1>En esta sección están las rutas</h1>
    </div>
  )
}
