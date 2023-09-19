import { useEffect, useRef, useState } from "react";
import { ButtonBack } from "../../components/ButtonBack";
import { ListSubs } from "../components/ListSubs";
import { FormSubs } from "../components/FormSubs";

const initialState = [ // https://randomuser.me/
  {
    nick: 'Jim Ferguson',
    email: 'jimferguson@example.com',
    description: 'gasman'
  },
  {
    nick: 'Lois Lewis',
    email: 'loislewis@example.com',
    description: 'london'
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

export const SuscriptoresReducer = () => {
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

      <h1>Suscriptores</h1>
      .
      <ListSubs subs={subs} />

      <FormSubs
        // setSubs={setSubs}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}


