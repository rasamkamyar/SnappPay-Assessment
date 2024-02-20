import style from "./index.module.css";

function Contact(props) {
  return (
    <div className={style.container}>
      <img src={props.image} alt={props.image} style={{ width: "35%" }} />
      <h1 style={{ fontSize: "20px" }}>
        {props.title} {props.first} {props.last}
      </h1>
      <p>
        <span>Phone Number : {props.phone} </span>{" "}
      </p>
      <p>
        <span>City : {props.city} </span>
      </p>
      <button
        style={{
          padding: "10px 30px",
          borderRadius: "10px",
          fontWeight: "600",
          cursor: "pointer",
          backgroundColor: "rgb(53, 3, 53)",
          color: "white",
        }}
      >
        More Info
      </button>
    </div>
  );
}
export default Contact;
