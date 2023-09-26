import { useEffect, useRef, useState } from "react";
import { ButtonBack } from "../../components/ButtonBack";
import { ListSubs } from "../components/ListSubs";
import { FormSubs } from "../components/FormSubs";

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

interface SubI {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface AppState {
  subsI: Array<SubI>;
  newSubNumber: number;
}

export const UserReqres = () => {
  //const [subs, setSubs] = useState<Array<SubI>>([]);
  // const [subs, setSubs] = useState<SubI[]>([]);
  const [subs, setSubs] = useState<AppState["subsI"]>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubNumber"]>(0);
  // es recomendable que inicie en null para evitar conflictos
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSubs(initialState);
  }, []);

  // Handle Submit
  const handleSubmit = (newSub: SubI): void => {
    setSubs(subs => [...subs, newSub]);
  }

  return (
    <div className="container" ref={divRef}>
      <ButtonBack />

      <h1>Suscriptores Reducer</h1>
      .
      <ListSubs subs={subs} />

      <FormSubs
        // setSubs={setSubs}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}


