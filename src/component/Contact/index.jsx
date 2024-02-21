import { Link } from "react-router-dom";
import style from "./index.module.css";
import { useContext } from "react";
import ContactHistory from "../../context/ContactHistory";

function Contact(props) {
  const { setHistory, history } = useContext(ContactHistory);
  function handleCardClick() {
    setHistory((prev) => {
      if (prev.length === 4) {
        const temp = [...prev];
        temp.shift();
        temp.push(props);
        return temp;
      } else {
        return [...prev, props];
      }
    });
  }

  return (
    <div className={style.container}>
      <img
        src={props.picture.large}
        alt={props.picture.large}
        style={{ width: "35%" }}
      />
      <h1 style={{ fontSize: "20px" }}>
        {props.name.title} {props.name.first} {props.name.last}
      </h1>
      <p>
        <span>Phone Number : {props.phone} </span>{" "}
      </p>
      <p>
        <span>City : {props.location.city} </span>
      </p>
      <div onClick={handleCardClick}>
        <Link
          to="/contact/user"
          style={{
            padding: "10px 30px",
            borderRadius: "10px",
            fontWeight: "600",
            cursor: "pointer",
            backgroundColor: "rgb(53, 3, 53)",
            color: "white",
            textDecorationLine: "none",
          }}
        >
          More Info
        </Link>
      </div>
    </div>
  );
}
export default Contact;
