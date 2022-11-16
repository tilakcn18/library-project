import "../styles/addbooks.css";
import {useState} from "react"
import {useNavigate} from "react-router-dom"

const Addtobooks = () => {
   let[Title ,settitle]=useState('')
   let[Author,setauthor]=useState('')
   let[Rating ,setrating]=useState('')   
   let[Genre ,setgenre]=useState('') 
   let[Language ,setlanguage]=useState('')

   const navigate=useNavigate()

    let handleSubmit = (e) =>{
        e.preventDefault()
        let addtobooks={
            Title:Title,
            Author:Author,
            Rating:Rating,
            Genre:Genre,
            Language:Language
        }
        fetch(" http://localhost:4003/books",{
            method:"POST",
            headers:{"content-type":"application/json;charset=utf-8"}
            ,body:JSON.stringify(addtobooks)
        });
        alert("added to books")
        navigate("/admin_portal/book_list")
    }

     let reset =() =>{
        settitle("")
       setauthor("")
        setrating("")
        setgenre("")
        setlanguage("")
       



    }
    return ( 
            
        <section className="addbooks">
            <div className="row"> <h1>ADD TO BOOKS</h1> </div>
            <form action="" id="bookadd" onSubmit={handleSubmit}>
                <label id="lab" htmlFor="Title"> <h1>Title</h1> <br /> <input class="inp" type="text" placeholder="Title" aria-label="Title" value={Title} onChange={(e)=>settitle(e.target.value)} /></label><br />
                <label id="lab" htmlFor="Title"> <h1>Author</h1> <br /> <input class="inp" type="text" placeholder="Author" aria-label="Author" value={Author} onChange={(e)=>setauthor(e.target.value)} /></label><br />
               <label id="lab" htmlFor="Rating"><h1>Rating</h1> <br /><input class="inp" type="number" min="0" max="10" placeholder="Rating" aria-label="Rating" value={Rating} onChange={(e)=>setrating(e.target.value)} /></label><br />
               <label id="lab" htmlFor="Genre"><h1>Genre</h1> <br /> <input class="inp" type="text" placeholder="Genre" aria-label="Genre" value={Genre} onChange={(e)=>setgenre(e.target.value)} /></label><br />
                <label id="lab" htmlFor="Language"><h1>Language</h1><br /> <input class="inp" type="text" placeholder="Language" aria-label="Language" value={Language} onChange={(e)=>setlanguage(e.target.value)} /></label>
                <div className="addbooksbutton">
                    <button id="addbooksbut" onClick="">submit</button>
                    {/* by default  button will act as submit button */}
                    <button id="addbooksbut" onClick={reset} type="reset">reset</button>
                </div>
                </form> 

                
           
            
        </section>
        



     );
}
 
export default Addtobooks;