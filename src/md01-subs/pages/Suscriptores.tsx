import { useEffect, useState } from "react";
import { ButtonBack } from "../../components/ButtonBack";
import { ListSubs } from "../components/ListSubs";
import { FormSubs } from "../components/FormSubs";

const initialState = [ // https://randomuser.me/
  {
    nick: 'Christina Douglas',
    email: 'christina.douglas@example.com',
    avatar: 'https://randomuser.me/api/portraits/women/96.jpg',
    birthday: '11/1/1962'
  },
  {
    nick: 'Cassandra Carer',
    email: 'cassandra.carr@example.com',
    avatar: 'https://randomuser.me/api/portraits/women/37.jpg',
    birthday: '11/1/1987'
  }
]

interface SubI {
  nick: string;
  email: string;
  avatar: string;
  birthday?: string; // que no es obligatorio este dato
}

interface AppState {
  subsI: Array<SubI>;
  newSubNumber: number;
}

export const Suscriptores = () => {
  //const [subs, setsubs] = useState<Array<SubI>>([]);
  // const [subs, setsubs] = useState<SubI[]>([]);
  const [subs, setsubs] = useState<AppState["subsI"]>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubNumber"]>(0);

  useEffect(() => {
    setsubs(initialState);
  }, [])

  return (
    <div className="container">
      <ButtonBack />

      <h1>Suscriptores</h1>

      <ListSubs subs={subs}/>

      <FormSubs />
    </div>
  )
}


