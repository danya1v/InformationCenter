import React from 'react';


import {BrowserRouter as Router, Route} from 'react-router-dom';
//my
import APtable1 from '../Table/APtable1';
import APtable2 from '../Table/APtable2';
import AdmTables from '../AdmPractice/AdmTables';
import PersistentDrawerLeft from '../Menu/leftMenu';



export default function MainFrame() {
  
   
  return(
  <>
          
        <Router>
        <PersistentDrawerLeft />
         <Route path ='/adminpractic' component={AdmTables} exact/>   
        <Route path ='/adminpractic/APtable1/' component={APtable1} exact/>   
         <Route path ='/adminpractic/APtable2/' component={APtable2} exact/>    
  
    </Router>
  </>
)}
