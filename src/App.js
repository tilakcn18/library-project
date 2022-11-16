

import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/home';
import Adminlogin from './components/admin_login';
import Userlogin from './components/user_login';
import Adminportal from './components/admin_portal';
import Userportal from './components/user_portal';


function App(props) {
  let email="admin@gmail.com"
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
        {/* <Home/> */}
        <Route path='/admin_login' element={<Adminlogin data={email} />  }></Route>
        <Route path='/user_login' element={<Userlogin/>}></Route>
        <Route path='/admin_portal/*' element={<Adminportal data={email}  />}></Route>
        <Route path="/user_portal/*" element={<Userportal/>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
