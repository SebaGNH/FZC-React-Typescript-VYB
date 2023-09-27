import { useEffect, useRef, useState } from "react";
import './styles.css';
import { ButtonBack } from "../../components/ButtonBack";
import { ListSubs } from "../components/ListSubs";
import { FormSubs } from "../components/FormSubs";
import { UserReqresI } from '../interfaces';


const initialState = [ // https://reqres.in/api/users?page=1
  {
    id: 51,
    email: 'Lucio_Hettinger@annie.ca',
    first_name: 'Chelsey',
    last_name: 'Dietrich',
    avatar: 'https://randomuser.me/api/portraits/med/men/51.jpg'
  },
  {
    id: 52,
    email: 'Nathan@yesenia.net',
    first_name: 'Clementine',
    last_name: 'Bauch',
    avatar: 'https://randomuser.me/api/portraits/med/men/52.jpg'
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
    setUsers( users => [...users, newUser]);
  }


  return (
    <div className="container">
      <ButtonBack />

      <h1>Usuarios de Resres API</h1>
      .
      <ListSubs users={users} />

      <FormSubs
        handleSubmit={handleSubmit}
      />
    </div>
  )
}


