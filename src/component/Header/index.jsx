import style from "./index.module.css";

function Header(props) {
  return (
    <header className={style.header}>
      <h1>Contact List</h1>
      <input
        onChange={(e) => {
          props.filterUser(e.target.value);
        }}
        type="text"
        placeholder="Search Name or Phone"
        style={{ padding: "25px", borderRadius: "10px" }}
      />
    </header>
  );
}

export default Header;
