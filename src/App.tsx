
import "./App.css";
// @ts-ignore
import NavbarApp   from "./lib/navbar-app.tsx";
import { Outlet} from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./store.ts";

function App() {

  return (

    <Provider store={store}>
    <>
    <>
    <NavbarApp></NavbarApp>
    <Outlet />


  </>
   
    </>
  </Provider>



   
  )

}

export default App;
