import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Axios from "axios";
import { ExportCSV } from "./DownloadXLSX";
import PersistentDrawerLeft from '../Menu/leftMenu';
import {HashRouter as Router, Route} from 'react-router-dom';
import admpractic from '../../admpractic';
import voditel from '../../voditel';
import auto from '../../auto';

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
    "&:nth-of-type(odd)": {
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
    Axios.get(`http://localhost:3001/api/get${props.Id}`).then((response) => {
      setDataInfo(response.data);
    });
  }, [props.Id]);

  const classes = useStyles();
  let nam = '';
  

  // function namesRows (a) {
  //   for (let i = 0; i <= a ; i++){
  //     <StyledTableCell align="right">Факт</StyledTableCell>
  //   }
  // }

  


  return (
    <>
    
    {props.table === 1 ? (nam = (admpractic[props.Id -1]).label)
         : props.table === 2 ? (nam = (voditel[props.Id -1]).label) 
         : (nam = (auto[props.Id -1]).label)}
         

         <Route render={()=><PersistentDrawerLeft nameTwo={nam}/>}/>  
      <Grid container justify="center">
        <Grid item xs={10}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Столбец №1</StyledTableCell>
                  {Object.keys(dataInfo[0]).length > 1 ? (
                    <StyledTableCell align="right">Столбец №2</StyledTableCell>
                  ) : null}
                  {Object.keys(dataInfo[0]).length > 2 ? (
                    <StyledTableCell align="right">Столбец №3</StyledTableCell>
                  ) : null}
                  {Object.keys(dataInfo[0]).length > 3 ? (
                    <StyledTableCell align="right">Столбец №4</StyledTableCell>
                  ) : null}
                  {Object.keys(dataInfo[0]).length > 4 ? (
                    <StyledTableCell align="right">Столбец №5</StyledTableCell>
                  ) : null}
                  {Object.keys(dataInfo[0]).length > 5 ? (
                    <StyledTableCell align="right">Столбец №6</StyledTableCell>
                  ) : null}
                  {Object.keys(dataInfo[0]).length > 6 ? (
                    <StyledTableCell align="right">Столбец №7</StyledTableCell>
                  ) : null}
                  {Object.keys(dataInfo[0]).length > 7 ? (
                    <StyledTableCell align="right">Столбец №8</StyledTableCell>
                  ) : null}
                  {Object.keys(dataInfo[0]).length > 8 ? (
                    <StyledTableCell align="right">8</StyledTableCell>
                  ) : null}
                </TableRow>
              </TableHead>
              <TableBody>
                {dataInfo.map((row) => (
                  <StyledTableRow key={row.number}>
                    <StyledTableCell component="th" scope="row">
                      {row[Object.keys(row)[0]]}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row[Object.keys(row)[1]]}
                      {/* ((row[Object.keys(row)[1]]).length) === 24 ? ((row[Object.keys(row)[1]]).substr(0, 10)) : (row[Object.keys(row)[1]]) */}
                    </StyledTableCell>
                    {Object.keys(row).length >= 3 ? (
                      <StyledTableCell align="right">
                        {row[Object.keys(row)[2]]}
                      </StyledTableCell>
                    ) : null}
                   
                    {Object.keys(row).length >= 4 ? (
                      <StyledTableCell align="right">
                        {row[Object.keys(row)[3]]}
                      </StyledTableCell>
                    ) : null}

                    {Object.keys(row).length >= 5 ? (
                      <StyledTableCell align="right">
                        {row[Object.keys(row)[4]]}
                      </StyledTableCell>
                    ) : null}
                    {Object.keys(row).length >= 6 ? (
                      <StyledTableCell align="right">
                        {row[Object.keys(row)[5]]}
                      </StyledTableCell>
                    ) : null}
                    {Object.keys(row).length >= 7 ? (
                      <StyledTableCell align="right">
                        {row[Object.keys(row)[6]]}
                      </StyledTableCell>
                    ) : null}
                    {Object.keys(row).length >= 8 ? (
                      <StyledTableCell align="right">
                        {row[Object.keys(row)[7]]}
                      </StyledTableCell>
                    ) : null}
                     
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid
          container
          justify="flex-end"
          item
          xs={11}
          style={{ marginTop: 40 }}
        >
          <ExportCSV csvData={dataInfo} fileName="File" />
        </Grid>
      </Grid>
    </>
  );
}
