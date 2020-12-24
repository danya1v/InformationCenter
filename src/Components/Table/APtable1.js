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
  const [dataInfo, setDataInfo] = useState([0]);

  useEffect(() => {
    Axios.get(`http://10.89.100.31:3001/api/get${props.Id}`)
          .then((response) => {
            setDataInfo(response.data)
            
          })
  }, [props.Id])

 
  const classes = useStyles();

  return (
    <>
    {console.log(dataInfo)}
    <Grid container justify="center" >
    <Grid item xs={10}  >
    <TableContainer component={Paper}  >
      <Table className={classes.table} aria-label="customized table" >
        <TableHead >
  
          <TableRow >
          <StyledTableCell >Номер</StyledTableCell>
            <StyledTableCell align="right" >ФИО</StyledTableCell>
            <StyledTableCell align="right" >Факт</StyledTableCell>
            <StyledTableCell align="right" >Подразделение</StyledTableCell>
            {(Object.keys(dataInfo[0]).length) === 5 ? <StyledTableCell align="right">Ещё что-то</StyledTableCell> : null}
    
            </TableRow>
          
        </TableHead>
        <TableBody>
          {dataInfo.map((row) => (
            
            <StyledTableRow key={row.number}>
              <StyledTableCell component="th" scope="row" >
                {row[Object.keys(row)[0]]}
              </StyledTableCell>
              <StyledTableCell align="right">{row[Object.keys(row)[1]]}</StyledTableCell>
              <StyledTableCell align="right">{row[Object.keys(row)[2]]}</StyledTableCell>
              <StyledTableCell align="right">{row[Object.keys(row)[3]]}</StyledTableCell>

              {Object.keys(row).length === 5 ? <StyledTableCell align="right" >{row[Object.keys(row)[4]]}</StyledTableCell> : null}
              

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
