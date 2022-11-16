import "../styles/booklist.css"
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Booklist = () => {
  let location=useLocation()
  let [books, setbooks] = useState([]);
  useEffect(() => {
    let fetchbooks = async () => {
      let response = await fetch("http://localhost:4003/books");
      let data = await response.json();
      setbooks(data);
    };
    fetchbooks();
  },[]); //running only when the updation of books. dont pass books here

  // console.log(location.pathname == "/admin_portal/book_list" && )

  let Handledelete =(id) =>{
    fetch(`http://localhost:4003/books/${id}`,{
      method:"delete",
      headers:{"Content-Type":"application.json"},
      body:JSON.stringify(books)
    })
    window.location.reload() //reloads the page
  }

  let Handleintrest =(id) =>{
    setbooks(books.filter(data => data.id !==id))
  }

  return (
    
      <section className="bookheading">
    <h1 id="bookhead">BOOK LIST</h1>

     <div className="bookcard">
     {books.map((data) => (
       <div className="booklist1">
        <h3>{data.id}</h3>
          <h3>{data.Title}</h3>
          <p>{data.Author}</p>
          <p>{data.Ratings}</p>
          <p>{data.Genre}</p>
          {location.pathname == "/admin_portal/book_list" && <button id="booklistbutton" onClick={()=>Handledelete(data.id)} >delete</button>}
          {location.pathname == "/user_portal/book_list" && <button id="booklistbutton" onClick={()=>Handleintrest(data.id)} >Not intrested</button>} 
        </div>
      ))}
     </div>
  </section>
  );
};

export default Booklist;
