import "../styles/admin_portal.css"
import Sidebar from "./sidebar";
import Sidebarcontent from "./siderbarcontent";
import {Routes,Route} from "react-router-dom"
import Booklist from "./book_list"
import Userlist from "./user_list";
import Addtousers from "./add_user";
import Addtobooks from "./add_books";


const Adminportal = (props) => {
    let email=props.data
    return ( 
        <div className="adminportal">
            <Sidebar data={email} />
             <Routes>
                <Route path="/" element={<Sidebarcontent/> }/>
                <Route path="/book_list" element={<Booklist/>}/>
                <Route path="/add_books" element={<Addtobooks/>}/>

                <Route path="/user_list" element={<Userlist/>}/>

                <Route path="/add_user" element={<Addtousers/>}/>
               
            </Routes>
        </div>
     );
}
 
export default Adminportal;