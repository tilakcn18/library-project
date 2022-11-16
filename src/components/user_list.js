import "../styles/userlist.css";
import { useState, useEffect } from "react";

const Booklist = () => {
  let [users, setusers] = useState([]);
  useEffect(() => {
    let fetchbooks = async () => {
      let response = await fetch("http://localhost:4003/users");
      let data = await response.json();
      setusers(data);
    };
    fetchbooks();
  });

  return (
    <section className="userheading">
      <h1>USER LIST</h1>

      <div className="usercard">
        {users.map((data) => (
          <div className="userlist1">
            <h3>{data.id}</h3>
            <h3>{data.FirstName}</h3>
            <h3>{data.LastName}</h3>
            <p>{data.PhoneNo}</p>
            <p>{data.EmailID}</p>
            <button id="userlistbutton">delete</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Booklist;
