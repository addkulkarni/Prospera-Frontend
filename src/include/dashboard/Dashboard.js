import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Ah from '../../modules/ah/Ah';
import Oe from '../../modules/oe/Oe';
import Footer from '../../template/footer/Footer';
import Header from '../header/Header';

import Cm from '../../modules/cm/Cm';
import RE from '../../modules/re/RE';


import Registration from '../../modules/re/registration/Registration';
import ViewLedger from '../../modules/ah/ViewLedger';
import BankAccount from '../../modules/ah/BankAccount';
import SetLoanDetails from '../../modules/cm/setloandetails/SetLoanDetails';
import Admin from '../../modules/admin/Admin';

function Dashboard() {
  return (
    <div className='dashboard-container'>
        <Header></Header>
        
          <div className='col-12 dashboard-body'>
          <Routes>
                <Route path="oe" element={<Oe/>}/>
                <Route path="re" element={<RE/>}/>
                <Route path="ah" element={<Ah/>}/>
                <Route path="cm" element={<Cm />}/>

                <Route path='admin' element={<Admin/>}/>
                <Route path="/ah/setbankaccount/:cid" element={<BankAccount/>}></Route>
                <Route path="/re/:enquiryId" element={<Registration/>}></Route>
                <Route path="/cm/setloandetails/:cid" element={<SetLoanDetails/>}></Route>
                <Route path="/ah/:cid" element={<ViewLedger/>}></Route>

            </Routes>
           
          </div>
     
        <Footer className="footer"></Footer>
    </div>
  )
}

export default Dashboard
