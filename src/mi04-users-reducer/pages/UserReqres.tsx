import { useEffect, useRef, useState } from "react";
import './styles.css';
import { ButtonBack } from "../../components/ButtonBack";
import { ListSubs } from "../components/ListSubs";
import { FormSubs } from "../components/FormSubs";
import { UserReqresI } from '../interfaces';


const initialState = [ // https://reqres.in/api/users?page=1
  {
    id: 0,
    email: 'Lucio_Hettinger@annie.ca',
    first_name: 'Chelsey',
    last_name: 'Dietrich',
    avatar: 'https://randomuser.me/api/portraits/med/men/1.jpg'
  },
  {
    id: 1,
    email: 'Nathan@yesenia.net',
    first_name: 'Clementine',
    last_name: 'Bauch',
    avatar: 'https://randomuser.me/api/portraits/med/men/2.jpg'
  }
]

interface AppState {
  users: Array<UserReqresI>
  page: number;
}

export const UserReqres = () => {
  const [users, setUsers] = useState<AppState["users"]>([]);
  const [page, setPage] = useState<AppState["page"]>(1);


  useEffect(() => {
    setUsers(initialState);
  }, []);

  // Handle Submit.
  const handleSubmit = ( newUser: UserReqresI):void => {
    const nuevoUsuario = newUser;
    nuevoUsuario["id"] = users.length + 1; // agregamos el id en el padre y avatar desde hijo
    // setUsers( users => [...users, newUser]);
    setUsers( users => [...users, nuevoUsuario]);
  }
  //[inputName]: inputValue,

  return (
    <div className="container">
      <ButtonBack />

      <h1>Usuarios de Resres API</h1>
      <div className="d-flex flex-row">
        <div className="col-md-6">
          <ListSubs users={users} />
        </div>

        <div className="col-md-6">
          <FormSubs
            handleSubmit={handleSubmit}
            usersLength={users.length}
          />
        </div>
      </div>

    </div>
  )
}


