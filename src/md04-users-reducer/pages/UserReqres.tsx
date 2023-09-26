import { useEffect, useRef, useState } from "react";
import { ButtonBack } from "../../components/ButtonBack";
import { ListSubs } from "../components/ListSubs";
import { FormSubs } from "../components/FormSubs";
import { UserReqresI } from '../interfaces';
import { HomePage } from '../../../../../FE/React-Query/fe-rq01-cripto-random/src/pages/HomePage';

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
  subsI: Array<UserReqresI>;
  page: number;
}

export const UserReqres = () => {
  const [subs, setSubs] = useState<AppState["subsI"]>([]);
  const [page, setPage] = useState<AppState["page"]>(1);


  useEffect(() => {
    setSubs(initialState);
  }, []);

  // Handle Submit
  const handleSubmit = (newSub: UserReqresI): void => {
    setSubs(subs => [...subs, newSub]);
  }

  return (
    <div className="container">
      <ButtonBack />

      <h1>Usuarios de Resres API</h1>
      .
      <ListSubs subs={subs} />

      <FormSubs
        handleSubmit={handleSubmit}
      />
    </div>
  )
}


