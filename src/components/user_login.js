import "../styles/user_login.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Userlogin = () => {
    let [email,setemail]=useState("")
  let [password,setpassword]=useState("")
  let navigate=useNavigate()

  let handleSubmit =()=>{
    if ((email == "user@gmail.com") && (password == 12345)) {
        navigate("/user_portal")
    } else {
        alert("invalid username and password")
    }
  }
 


    return ( 
        <section className="userlogin">
        <div className="heading"><h1>User login</h1></div>
        <div className="addet">
            <form action="" className="formm"  onSubmit={handleSubmit}>
            <label id="labb" htmlFor="Username"> <h1 id="htag">Username</h1> <br /> <input class="" type="text" placeholder="Type your username" aria-label="username"  value={email} onChange={(e)=>setemail(e.target.value)} /></label><br />
               <label htmlFor="Password"><h1 id="htag" >Password</h1> <br /><input class="" type="Number,text"  placeholder="Type your password" aria-label="password" value={password} onChange={(e)=>setpassword(e.target.value)}  /></label><br />
               <div className="butt"><button id="userloginbut">Login</button></div>

            </form>
            
        </div>
    </section>

     );
}
 
export default Userlogin;