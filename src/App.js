import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './include/body/Body';
import Dashboard from './include/dashboard/Dashboard';
import Login from './include/login/Login';


import Register from './modules/re/registration/Register';

function App() {
  return (
    <div >
      <div className="App">

      
      <BrowserRouter>
        
        <Routes>
          <Route path="" element={<Body/>}></Route>
          <Route path="/login" element={<Login/>}></Route>

          <Route path="/dashboard/*" element={<Dashboard/>}></Route>
          
          {/* <Route path='/registration/:enquiryId' element={<Registration/>}></Route> */}

        </Routes>
        
        
      </BrowserRouter>
      </div>
      
      
    </div>
  );
}

export default App;
