import { useEffect, useState } from "react";
import Contact from "/src/component/Contact";
import Header from "./component/Header";
import UserCard from "./component/UserCard";
import style from "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
    <BrowserRouter>
      <div className={style.mainContainer}>
        <Routes>
          <Route path="" element={<Header filterUser={filterUser} />} />
        </Routes>
        <div className={style.cardContainer}>
          {users.map((user) => (
            <Routes>
              <Route path="" element={<Contact {...user} key={user.email} />} />
            </Routes>
          ))}
        </div>
      </div>
      <Routes>
        <Route path="/contact/user" element={<UserCard data={users} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
