import style from "./index.module.css";

function Header() {
  return (
    <header className={style.header}>
      <h1>Contact List</h1>
      <input
        type="text"
        placeholder="Search Name or Phone"
        style={{ padding: "25px", borderRadius: "10px" }}
      />
    </header>
  );
}

export default Header;
