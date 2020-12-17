import React, {useState, useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Axios from 'axios';
import {ExportCSV} from './DownloadXLSX';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);





const useStyles = makeStyles({
  table: {
    minWidth: 700,
    
  },
});


export default function CustomizedTables(props) {
  const [dataInfo, setDataInfo] = useState([]);



  useEffect(() => {
    Axios.get(`http://localhost:3001/api/get${props.Id}`)
          .then((response) => {
            setDataInfo(response.data)
            
          })
  }, [props.Id])
  
 
  const classes = useStyles();
  
  let rowsName = 0;
  // let coubt = function (){
  //   dataInfo.find((row) => (
            
  //     rowsName++
      
  //   ))
  // }
  // coubt();
  let ideshka = props.Id;
  let tableNumber = 4;
  if (ideshka === ("2" || "4")) {
    tableNumber = 5;
  } else {
    tableNumber = 4;
  }
  if (ideshka === ("4" || "2")) {
    tableNumber = 5;
  } else {
    tableNumber = 4;
  }
  
  return (
    <>
    
    <Grid container justify="center">
    <Grid item xs={10} >
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          {console.log(props.Id)}
          {console.log(tableNumber)}
          <TableRow>

         

          
            {/* {console.log(Object.keys(dataInfo).length)}
            {console.log(dataInfo.[1])} */}


          {/* {rowsName.map((item, i) => (
            
            
              <StyledTableCell align="right" key={i}>
                {item}
              </StyledTableCell>
            
            
          ))} */}


          <StyledTableCell>Номер</StyledTableCell>
            <StyledTableCell align="right">ФИО</StyledTableCell>
            <StyledTableCell align="right">Факт</StyledTableCell>
            <StyledTableCell align="right">Подразделение</StyledTableCell>
            {tableNumber === 5 ? <StyledTableCell align="right">Ещё что-то</StyledTableCell> : null}
            
      {/* {dataInfo.map((lengthMap)=> (
        Object.keys(lengthMap).length !== 4) ? <StyledTableCell align="right">xz</StyledTableCell> : ''
      )} */}
      {/* {console.log(dataInfo.[props.Id])} */}
      {/* {(dataInfo.forEach((e) => {
      (numCallbackRuns = numCallbackRuns +1)
      })) }
      {numCallbackRuns === '1' ? <StyledTableCell align="right" >33</StyledTableCell> : <StyledTableCell align="right" >11</StyledTableCell> } */}
          {/* {dataInfo.map((row) => ( */}
{/* {      dataInfo.forEach(e => (Object.keys(e).length === 5  ? <StyledTableCell align="right" >33</StyledTableCell> : null))}             */}
            {/* )))} */}
          
            </TableRow>
          
        </TableHead>
        <TableBody>
          {dataInfo.map((row) => (
            
            <StyledTableRow key={row.number}>
              <StyledTableCell component="th" scope="row">
                {row.number}
              </StyledTableCell>
              <StyledTableCell align="right">{row.FIO}</StyledTableCell>
              <StyledTableCell align="right">{row.what}</StyledTableCell>
              <StyledTableCell align="right">{row.podr}</StyledTableCell>
              {Object.keys(row).length === 5 ? <StyledTableCell align="right" >{row.xz}</StyledTableCell> : null}
            </StyledTableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    <Grid container justify="flex-end" item xs={11} style={{ marginTop: 40 }}>
    <ExportCSV  csvData={dataInfo} fileName='File' />
    </Grid>
    </Grid>
    
    </>
  );
}
