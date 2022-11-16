import "../styles/addusers.css";
import {useState} from "react"
import {useNavigate} from "react-router-dom"

const Addtousers = () => {
   let[FirstName ,setfirstname]=useState('')
   let[LastName,setlastname]=useState('')
   let[PhoneNo ,setphone]=useState('')   
   let[EmailID ,setemail]=useState('') 
   

   const navigate=useNavigate()

    let handleSubmit = (e) =>{
        e.preventDefault()
        let addtousers={
          FirstName:FirstName,
          LastName:LastName,
          PhoneNo:PhoneNo,
          EmailID:EmailID,
           
        }
        fetch(" http://localhost:4003/users",{
            method:"POST",
            headers:{"content-type":"application/json;charset=utf-8"}
            ,body:JSON.stringify(addtousers)
        });
        alert("added to users")
        navigate("/admin_portal/add_user")
    }

     let reset =() =>{
        setfirstname("")
       setlastname("")
        setphone("")
        setemail("")
        
       



    }
    return ( 
            
        <section className="addusers">
            <div className="row"> <h1>ADD TO BOOKS</h1> </div>
            <form action="" id="bookadd" onSubmit={handleSubmit}>
                <label id="lab" htmlFor="firstname"> <h1>Firstname</h1> <br /> <input class="inp" type="text" placeholder="Firstname" aria-label="Firstname" value={FirstName} onChange={(e)=>setfirstname(e.target.value)} /></label><br />
                <label id="lab" htmlFor="lastname"> <h1>lastname</h1> <br /> <input class="inp" type="text" placeholder="Lastname" aria-label="Lastname" value={LastName} onChange={(e)=>setlastname(e.target.value)} /></label><br />
               <label id="lab" htmlFor="phonenumber"><h1>PhoneNUmber</h1> <br /><input class="inp" type="number" min="0" max="10" placeholder="Phonenumber" aria-label="phonenumber" value={PhoneNo} onChange={(e)=>setphone(e.target.value)} /></label><br />
               <label id="lab" htmlFor="email.id"><h1>Email.id</h1> <br /> <input class="inp" type="text" placeholder="email id" aria-label="email id" value={EmailID} onChange={(e)=>setemail(e.target.value)} /></label><br />
                
                <div className="addusersbutton">
                    <button id="addusersbut" onClick="">submit</button>
                    {/* by default  button will act as submit button */}
                    <button id="addbooksbut" onClick={reset} type="reset">reset</button>
                </div>
                </form> 

                
           
            
        </section>
        



     );
}
 
export default Addtousers;