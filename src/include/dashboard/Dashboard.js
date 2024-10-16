import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../../template/footer/Footer';
import Header from '../header/Header';
import Oe from '../../modules/oe/Oe';
import Ah from '../../modules/ah/Ah';
import Cm from '../../modules/cm/Cm';
import RE from '../../template/re/RE';
function Dashboard() {
  return (
    <div>
        <Header></Header>
        
          <div className='col-12 oediv'>
          <Routes>
                <Route path="oe" element={<Oe/>}/>
                <Route path="re" element={<RE/>}/>
                <Route path="ah" element={<Ah/>}/>
                <Route path="cm" element={<Cm/>}/>
            </Routes>
          </div>
     
        <Footer className="footer"></Footer>
    </div>
  )
}

export default Dashboard
