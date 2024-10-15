import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './template/body/Body';
import Login from './template/login/Login';
import Oe from './template/oe/Oe';
import RE from './template/re/RE';
import Registration from './template/registration/Registration';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route path="" element={<Body/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/oe" element={<Oe/>}></Route>
          <Route path="/re" element={<RE/>}></Route>
          <Route path='/registration/:enquiryId' element={<Registration/>}></Route>
        </Routes>
        
        
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
