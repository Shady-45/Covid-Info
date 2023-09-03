import React from 'react';

import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Maps from './components/Maps';
import Charts from './components/Charts';


function App() {

  return (
    <>
  <Navbar/>
   <Routes>

<Route element={ <Contacts />}  path='/'  />
<Route element={<Maps/>} path='/maps' />
<Route element={<Charts/>} path='/charts' />
  
   </Routes>

     
  
   
 
   
   
     </>
  
  );
}

export default App;
