import { useEffect, useState } from "react";
import { ButtonBack } from "../../components/ButtonBack";
import { ListSubs } from "../components/ListSubs";
import { FormSubs } from "../components/FormSubs";
import { UsersApiI } from "../interfaces";
import axios from "axios";



interface SubI {
  nick: string;
  email: string;
  description?: string; // que no es obligatorio este dato
}

interface AppState {
  subsI: Array<SubI>;
  UsersApiI: Array<UsersApiI>;
  newSubNumber: number;
}

export const SuscriptoresHooksReducer = () => {
  //const [subs, setSubs] = useState<Array<SubI>>([]);
  // const [subs, setSubs] = useState<SubI[]>([]);
  const [subs, setSubs] = useState<AppState["UsersApiI"]>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubNumber"]>(0);


  useEffect(() => {
    const fetchSubs = async (): Promise<UsersApiI> => {
      const response = await axios
        .get(`https://jsonplaceholder.typicode.com/users`);
        return response.data
    }

    // 1.42
    const mapFromApiToSubs = (apiResponse: UsersApiI):
    Array<SubI> => {
      return apiResponse.map(subFromApi => {
        const {
          name: nick,
          email,
          website: description
        } = subFromApi
        return {
          nick, email, description
        }
      })
    }

    fetchSubs()
      .then(mapFromApiToSubs)
      .then(setSubs)

  }, []);

  // Handle Submit
  const handleSubmit = (newSub: SubI): void => {
    setSubs(subs => [...subs, newSub]);
  }

  return (
    <div className="container">
      <ButtonBack />

      <h1>Suscriptores Reducer</h1>
      <ListSubs subs={subs} />

      <FormSubs
        // setSubs={setSubs}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}


