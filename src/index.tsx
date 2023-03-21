import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter,  Routes ,Route} from 'react-router-dom';
import Billet from './pages/billet.tsx';
import Admin from './pages/administration.tsx';
import Concert from './pages/concert.tsx';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<App/>} >

        <Route path='billet' element={<Billet/>} />
        <Route path='administration' element={<Admin/>} />
        <Route path='concert' element={<Concert/>} />


       </Route>

   </Routes>
      </BrowserRouter>
  </React.StrictMode>,
);


