import './App.css';
import Body from './template/body/Body';
import Navbar from './template/navbar/Navbar';
import Footer from './template/footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './template/login/Login';
import Registration from './template/registration/Registration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="" element={<Body/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
        
        <Footer></Footer>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
