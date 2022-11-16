import "../styles/userportal.css"
import Usersidebar from "./usersidebar";
import {Routes,Route} from "react-router-dom"
import Booklist from "./book_list"
import Userlist from "./user_list";
import Sidebarcontent from "./siderbarcontent";


const Userportal = () => {
    return ( 
        <div className="userportal">
            <Usersidebar/>
            <Routes>
                <Route path="/" element={<Sidebarcontent/> }/>
                <Route path="/book_list" element={<Booklist/>}/>
                <Route path="/user_list" element={<Userlist/>}/>
                 </Routes>
        </div>
     );
}
 
export default Userportal;