interface Props {
  subs: Array<{
    nick: string;
    email: string;
    description?: string;
  }>;
}

export const ListSubs = ({ subs }: Props) => {
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

