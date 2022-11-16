import { useState } from "react";
import "../styles/admin_login.css"
import { useNavigate } from "react-router-dom";

const Adminlogin = (props) => {
  let [email,setemail]=useState("")
  let [password,setpassword]=useState("")
  let navigate=useNavigate()

  let handleSubmit =()=>{
    if ((email == props.data) && (password ==1234)) {
        navigate("/admin_portal")
    } else {
        alert("invalid username and password")
    }
  }


    return ( 
    <section className="adminlogin">
        <div className="heading"><h1>Admin login</h1></div>
        <div className="addet">
            <form action="" className="form" onSubmit={handleSubmit}>
            <label htmlFor="Username"> <h1 id="htag">Username</h1> <br /> <input class="" type="text,number" placeholder="Type your username" aria-label="username" value={email} onChange={(e)=>setemail(e.target.value)}  /></label><br />
               <label htmlFor="Password"><h1 id="htag" >Password</h1> <br /><input class="" type="Number,text"  placeholder="Type your password" aria-label="password" value={password} onChange={(e)=>setpassword(e.target.value)}  /></label><br />
               <div className=""><button id="adminloginbut">Login</button></div>

            </form>
            
        </div>
    </section>

     );
}
 
export default Adminlogin;