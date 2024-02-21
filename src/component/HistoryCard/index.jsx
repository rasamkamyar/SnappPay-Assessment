import { useContext } from "react";
import ContactHistory from "../../context/ContactHistory";

function HistoryCard(props) {
  const { setHistory } = useContext(ContactHistory);

  console.log(props);

  function handleClick() {}

  return (
    <div
      onClick={handleClick}
      style={{
        display: "flex",
        flexShrink: "0",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <img
        src={props.picture.medium}
        style={{
          width: "50px",
        }}
      />
      <h1 style={{ fontSize: "15px" }}>
        {props.name.title} {props.name.first} {props.name.last}{" "}
      </h1>
    </div>
  );
}

export default HistoryCard;
