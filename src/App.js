import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './include/body/Body';
import Dashboard from './include/dashboard/Dashboard';
import Login from './include/login/Login';
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
