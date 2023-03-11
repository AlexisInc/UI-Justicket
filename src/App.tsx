
import "./App.css";
import NavbarApp   from "./lib/navbar-app.tsx";
import { Outlet} from 'react-router-dom';

function App() {
  
  



  return (
    <>
    <NavbarApp></NavbarApp>
    <Outlet />


  </>
  )

}

export default App;
