import { useContext } from "react";
import ContactHistory from "../../context/ContactHistory";

function UserCard() {
  const { history } = useContext(ContactHistory);

  const currentData = history[history.length - 1];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        width: "30%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",
        border: "5px solid darkgrey",
      }}
    >
      <h1>
        name is : {currentData.name.title} {currentData.name.first}
      </h1>
      <img src={currentData.picture.large} style={{ width: "100px" }} />
      <p>Email: {currentData.email}</p>
      <p>Phone Number : {currentData.phone}</p>
      <p>Gender : {currentData.gender}</p>
      <p>
        Address : {currentData.location.street.number}{" "}
        {currentData.location.street.name} {currentData.location.city}{" "}
        {currentData.location.country}
      </p>
    </div>
  );
}

export default UserCard;
