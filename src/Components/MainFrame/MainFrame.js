import React from 'react';


import {BrowserRouter as Router, Route} from 'react-router-dom';
//my
import CustomizedTables from '../Table/APtable1';
import AdmPractice from '../AdmPractice/AdmPractice';
import PersistentDrawerLeft from '../Menu/leftMenu';



export default function MainFrame() {
  
   
  return(
  <>
          
        <Router>
        <Route component = {PersistentDrawerLeft} />
        <Route path ='/adminpractic' component={AdmPractice} exact/>   
        <Route path ='/adminpractic/:id' render={
          ({match}) => {
            const {id} = match.params;
            console.log({match})
          return <CustomizedTables Id={id} />
          }
        }/>   
         {/* <Route path ='/adminpractic/APtable2/' component={APtable2} exact/>     */}
  
    </Router>
  </>
)}
