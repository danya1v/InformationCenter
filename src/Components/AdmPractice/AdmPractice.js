import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CardTable from '../Table/CardTable';
import admpractic from '../../admpractic';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  
  flex: {
    display: 'flex!important',
    flexWrap: 'wrap',
    justifyContent: 'centxer',
   
  }
 
});

export default function AdmPractice() {
  const classes = useStyles();
  return (
   
    <>
    <Container style={{ width: '110%' }}>

      <Grid item container spacing={1} bgcolor="background.paper" >

        <Grid item xs className={classes.flex}>
        {admpractic.map((item, index) => (
          <Link key={item.label} to = {item.link} style={{width:'345px', textDecoration: 'none' }} >
          <CardTable 
          key={item.label}
          img={item.img} 
          name={item.label} 
          text={item.text}
        >
          
          </CardTable>
         
         </Link>
        ))}
      
      </Grid>
     {  /*
      <Grid item xs>
        <CardTable 
         link ='adminpractic/APtable2' 
        img={image1} 
        name='Привлечение к административной отвестенности лица, возраст которого мнее 13 лет' 
        text="Ошибки по таблицам АдмПрактики для исправления"/>
        </Grid>
        */}
      </Grid>
      
    </Container>
    </>
  );
}