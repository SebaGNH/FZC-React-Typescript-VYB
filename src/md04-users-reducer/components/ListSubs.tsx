import { UserReqresI } from "../interfaces";
interface Props {
  subs: Array<UserReqresI>
}

export const ListSubs = ({ subs }: Props) => {
  return (
    <ul>
      {
        subs.map( (sub) => (
          <li key={sub.id}>
            <h4>{`${sub.first_name} ${sub.last_name}`}</h4>
            <p>{sub.email?.substring(0,30)}</p>
          </li>
        ))
      }
    </ul>
  );
};