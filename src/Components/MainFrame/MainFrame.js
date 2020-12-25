import React from 'react';


import {BrowserRouter as Router, Route} from 'react-router-dom';
//my
import CustomizedTables from '../Table/APtable1';
import AdmPractice from '../AdmPractice/AdmPractice';
import PersistentDrawerLeft from '../Menu/leftMenu';



export default function MainFrame() {
  const table1 = 1;
  const table2 = 2;
  const table3 = 3;
   
  return(
  <>
          
        <Router>
        <Route component = {PersistentDrawerLeft} />
        <Route path ='/adminpractic' exact render={()=><AdmPractice table={table1}/>}/>     
        <Route path ='/adminpractic/:id' render={
          ({match}) => {
            const {id} = match.params;
            console.log({match})
          return <CustomizedTables Id={id} />
          }
        }/>  
        <Route path ='/driver' exact render={()=><AdmPractice table={table2}/>}/>   
        <Route path ='/driver/:id' render={
          ({match}) => {
            const {id} = match.params;
            console.log({match})
          return <CustomizedTables Id={id} />
          }
        }/>  
        <Route path ='/transport' exact render={()=><AdmPractice table={table3}/>}/>   
        <Route path ='/transport/:id' render={
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
