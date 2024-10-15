import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './template/body/Body';
import Login from './template/login/Login';
import Oe from './template/oe/Oe';
import Cm from './template/cm/Cm.js';
import SetLoanDetails from './template/cm/setloandetails/SetLoanDetails.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route path="" element={<Body/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/oe" element={<Oe/>}></Route>
          <Route path="/cm" element={<Cm/>}></Route>
          <Route path="/setloandetails/:cid" element={<SetLoanDetails />} />
        </Routes>
        
        
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
