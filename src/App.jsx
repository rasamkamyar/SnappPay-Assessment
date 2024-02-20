import { useEffect, useState } from "react";
import Contact from "/src/component/Contact";
import Header from "./component/Header";
import style from "./App.module.css";

function App() {
  const [users, setUsers] = useState([]);
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
        setTemp(data.results);
      });

    return () => {};
  }, []);
  function filterUser(textInput) {
    const filteredUsers = temp.filter((user) => {
      const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
      const phoneNumber = user.phone;
      return (
        fullName.toLowerCase().includes(textInput.toLowerCase()) ||
        phoneNumber.includes(textInput)
      );
    });
    setUsers(filteredUsers);
  }

  return (
    <div className={style.mainContainer}>
      <Header filterUser={filterUser} />
      <div className={style.cardContainer}>
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
    </div>
  );
}

export default App;
