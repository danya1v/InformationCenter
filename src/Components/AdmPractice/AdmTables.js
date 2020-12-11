import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CardTable from '../Table/CardTable';
import menu from '../../base';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  
  flex: {
    display: 'flex!important',
    flexWrap: 'wrap',
    justifyContent: 'center',
   
  }
 
});

export default function AdmTables() {
  const classes = useStyles();
  return (
   
    <>
    <Container style={{ width: '110%' }}>

      <Grid item container spacing={1} bgcolor="background.paper" >

        <Grid item xs className={classes.flex}>
        {menu.map((item, index) => (
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
        
        <Grid item xs>
        <CardTable 
        img={image1} 
        name='Привлечение водителя по статье КоАП РФ, субъектом которой является пешеход"' 
        text="lorem inpectus inprisum momento lorem inpectus inprisum momento lorem inpectus inprisum momento"/>
         </Grid>
         
         <Grid item xs>
             <CardTable 
        img={image1} 
        name='Привлечение водителя по статье КоАП РФ, субъектом которой является пешеход"' 
        text="lorem inpectus inprisum momento lorem inpectus inprisum momento lorem inpectus inprisum momento"/>
        </Grid>
        <Grid item xs>
         <CardTable 
        img={image1} 
        name='Привлечение водителя по статье КоАП РФ, субъектом которой является пешеход"' 
        text="lorem inpectus inprisum momento lorem inpectus inprisum momento lorem inpectus inprisum momento"/>
         </Grid>
         <Grid item xs>
         <CardTable 
        img={image1} 
        name='Привлечение водителя по статье КоАП РФ, субъектом которой является пешеход"' 
        text="lorem inpectus inprisum momento lorem inpectus inprisum momento lorem inpectus inprisum momento"/>
        </Grid>
        <Grid item xs>
         <CardTable 
        img={image1} 
        name='Привлечение водителя по статье КоАП РФ, субъектом которой является пешеход"' 
        text="lorem inpectus inprisum momento lorem inpectus inprisum momento lorem inpectus inprisum momento"/>
      </Grid> */}
      </Grid>
      
    </Container>
    </>
  );
}