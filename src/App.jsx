import { useEffect, useState } from "react";
import Contact from "/src/component/Contact";
import Header from "./component/Header";
import UserCard from "./component/UserCard";
import style from "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactHistory from "./context/ContactHistory";
import HistoryCard from "./component/HistoryCard";

function App() {
  const [users, setUsers] = useState(null);
  const [temp, setTemp] = useState([]);
  const [history, setHistory] = useState([]);

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
      <ContactHistory.Provider
        value={{
          setHistory,
          history,
        }}
      >
        <div className={style.mainContainer}>
          <Routes>
            <Route path="/" element={<Header filterUser={filterUser} />} />
          </Routes>
          <div
            style={{
              display: "inline-flex",
              gap: "20px",
              border: "2px solid grey",
              padding: "20px",
              overflowX: "auto",
            }}
          >
            {history.map((item) => {
              return <HistoryCard {...item} key={item.id} />;
            })}
          </div>
          <div className={style.cardContainer}>
            {users &&
              users.map((user) => (
                <Routes>
                  <Route
                    key={user.email}
                    path="/"
                    element={<Contact {...user} />}
                  />
                </Routes>
              ))}
          </div>
        </div>
        <Routes>
          {users && (
            <Route path="/contact/user" element={<UserCard data={users} />} />
          )}
        </Routes>
      </ContactHistory.Provider>
    </BrowserRouter>
  );
}

export default App;
