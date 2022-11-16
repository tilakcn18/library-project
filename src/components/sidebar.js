import { Link } from "react-router-dom";
import "../styles/sidebar.css"

const Sidebar = (props) => {
    return ( 
     <div className="sidebar">
        <div><h2>Admin portal <br /> <small>{props.data}</small></h2></div>
       <ul>
       <li><Link style={{textDecoration: 'none'}} href=""  to="/admin_portal" ><h3>Home</h3></Link></li>
       <li><Link style={{textDecoration: 'none'}} href="" to="book_list"   ><h3>Book List</h3></Link></li>
        <li><Link style={{textDecoration: 'none'}} href="" to="user_list"   ><h3>User List</h3></Link></li>
        <li><Link style={{textDecoration: 'none'}} href="" to="add_books"  ><h3>Add books</h3></Link></li>
        <li><Link style={{textDecoration: 'none'}} href="" to="add_user"   ><h3>Add users</h3></Link></li>
       </ul>
     </div>
    



     );
}
 
export default Sidebar;