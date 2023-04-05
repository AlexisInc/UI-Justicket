
import "./App.css";
// @ts-ignore
import NavbarApp   from "./lib/navbar-app.tsx";
import { Outlet} from 'react-router-dom';
// @ts-ignore
import { Provider } from "react-redux";
// @ts-ignore
import { store } from "./store.ts";

function App() {

  return (
    <Provider store={store}>
      <>
        <>
          <NavbarApp />
          <Outlet />
        </>
      </>
    </Provider>
  )
}

export default App;
