import * as React from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function App() {
  const [users, setUsers] = React.useState([]);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    f();
  }, []);
  return (
    <div className="App">
      <h1>User List</h1>
      <Link
                                        href={{
                                            pathname: "/login",
                                        }}
                                    >
                                        <button>Login</button>
       </Link>
      <Link
                                        href={{
                                            pathname: "/create",
                                        }}
                                    >
                                        <button>create new user</button>
       </Link>

      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              <div key={user.id}>
                <p>
                  <strong>{user.first_name}</strong>
                </p>
                <p>{user.email}</p>
                <img key={user.avatar} src={user.avatar} />
                <li>
                                    <Link
                                        href={{
                                            pathname: "/detail",
                                            query: { id_user: user.id },
                                        }}
                                    >
                                        <button>Detail</button>
                                    </Link>
                                </li>
              </div>
            );
          })}
      </div>
    </div>
  );
}
