import "../styles/home.css"
import  {Link} from "react-router-dom"

const Home = () => {
  return (
    <section className="homepage">
      <Link to="/"><h1>Home</h1></Link> 
       
    <div className="home">
         <section className="linkad">
        <div> <img src="profile1.jpg" alt="" height="40px" width="40px"/></div>
         <div> <Link to="/admin_login"><button>Admin</button></Link></div> 
          </section> 
      <section className="userad">
        <div><img src="profile1.jpg" alt="" height="40px" width="40px" /></div>
        <div className="but"><Link to="/user_login"><button id="btn">User</button></Link></div>
        </section>
    </div>
     </section>
  );
};

export default Home;
