import { Link } from "react-router-dom";
import "../styles/usersidebar.css"

const Usersidebar = () => {
    return ( 
     <div className="usersidebar">
        <div><h2>User portal <br /></h2></div>
       <ul>
       <li><Link style={{textDecoration: 'none'}} href=""  to="/user_portal" ><h3>Home</h3></Link></li>
       <li><Link style={{textDecoration: 'none'}} href="" to="book_list"   ><h3>Book List</h3></Link></li>
        <li><Link style={{textDecoration: 'none'}} href="" to="user_list"   ><h3>User List</h3></Link></li>
       </ul>
     </div>
    



     );
}
 
export default Usersidebar;