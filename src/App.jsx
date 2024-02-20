import { useEffect, useState } from "react";
import Contact from "/src/component/Contact";
import style from "./App.module.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((data) => setUsers(data.results));

    return () => {};
  }, []);

  console.log(users);
  return (
    <>
      <div className={style.container}>
        {users.map((user) => (
          <Contact
            key={user.email}
            {...user.name}
            image={user.picture.medium}
            phone={user.phone}
            city={user.location.city}
          />
        ))}
      </div>
    </>
  );
}

export default App;
