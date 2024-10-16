import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './include/body/Body';
import Login from './include/login/Login';
import SetLoanDetails from './modules/cm/setloandetails/SetLoanDetails.js';
import Dashboard from './include/dashboard/Dashboard.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route path="" element={<Body/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="dashboard/*" element={<Dashboard/>}></Route>
          
        </Routes>
        
        
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
