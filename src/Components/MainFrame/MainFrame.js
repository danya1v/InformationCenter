import React from 'react';


import {HashRouter as Router, Route} from 'react-router-dom';
//my
import CustomizedTables from '../Table/CustomizedTables';
import AdmPractice from '../AdmPractice/AdmPractice';
import PersistentDrawerLeft from '../Menu/leftMenu';



export default function MainFrame() {
  const table1 = 1;
  const table2 = 2;
  const table3 = 3;
   
  return(
  <>
          
        <Router>

        


        <Route path ='/adminpractic' exact render={()=><AdmPractice table={table1} name={'Админпрактика'} urlCashe = {'/adminpractic'}/>}/>     
        <Route path ='/adminpractic/:id' render={
          ({match}) => {
            const {id} = match.params;
          return <CustomizedTables Id={id} table={table1}/>
          }
        }/>  
        <Route path ='/driver' exact render={()=><AdmPractice table={table2} name={'Водитель'} urlCashe = {'/driver'}/>}/>   
        <Route path ='/driver/:id' render={
          
          ({match}) => {
            const {id} = match.params;
          return <CustomizedTables Id={id} table={table2}/>
          }
        }/>  
        <Route path ='/transport' exact render={()=><AdmPractice table={table3} name={'Транспорт'} urlCashe = {'/transport'}/>}/>   
        <Route path ='/transport/:id' render={
          ({match}) => {
            const {id} = match.params;
          return <CustomizedTables Id={id} table={table3} />
          }
        }/>  

         {/* <Route path ='/adminpractic/APtable2/' component={APtable2} exact/>     */}
  
    </Router>
    
  </>
)}
