interface Props {
  subs: Array<{
    nick: string;
    email: string;
    avatar: string;
    birthday?: string;
  }>;
}

export const ListSubs: React.FC<Props> = ({ subs }) => {
  console.log(subs.map(sub => sub.nick))
  return (
    <ul>
      {
        subs.map( (sub) => (
          <li key={sub.nick}>
            <h4>{sub.nick}</h4>
            <p>{sub.email?.substring(0,30)}</p>
          </li>
        ))
      }
    </ul>
  );
};

