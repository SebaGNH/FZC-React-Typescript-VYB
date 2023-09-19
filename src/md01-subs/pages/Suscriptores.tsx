import { useEffect, useState } from "react";
import { ButtonBack } from "../../components/ButtonBack";
import { ListSubs } from "../components/ListSubs";
import { FormSubs } from "../components/FormSubs";

const initialState = [ // https://randomuser.me/
  {
    nick: 'Christina Douglas',
    email: 'christina.douglas@example.com',
    description: '11/1/1962'
  },
  {
    nick: 'Cassandra Carer',
    email: 'cassandra.carr@example.com',
    description: '11/1/1987'
  }
]

interface SubI {
  nick: string;
  email: string;
  description?: string; // que no es obligatorio este dato
}

interface AppState {
  subsI: Array<SubI>;
  newSubNumber: number;
}

export const Suscriptores = () => {
  //const [subs, setSubs] = useState<Array<SubI>>([]);
  // const [subs, setSubs] = useState<SubI[]>([]);
  const [subs, setSubs] = useState<AppState["subsI"]>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubNumber"]>(0);

  useEffect(() => {
    setSubs(initialState);
  }, []);

  // Handle Submit
  const onSubmit = (newSub: SubI): void => {
    setSubs(subs => [...subs, newSub]);
  }

  return (
    <div className="container">
      <ButtonBack />

      <h1>Suscriptores</h1>

      <ListSubs subs={subs}/>

      <FormSubs
        // setSubs={setSubs}
        onSubmit={onSubmit}
      />
    </div>
  )
}


