import { UserReqresI } from "../interfaces";
interface Props {
  users: Array<UserReqresI>
}

export const ListSubs = ({ users }: Props) => {
  return (
    <ul>
      {
        users.map( (user: UserReqresI) => (
          <li key={user.id}>
            <img src={user.avatar} alt="" />
            <h4>{`${user.first_name} ${user.last_name}`}</h4>
            <p>{user.email?.substring(0,30)}</p>
          </li>
        ))
      }
    </ul>
  );
};