function UserCard({ data }) {
  // const template = Object.values(props)
  //   console.log(data);
  let filtered = data.find((item) => {
    return item.name.title === "Mr";
  });

  return <h1>name is : </h1>;
}

export default UserCard;
