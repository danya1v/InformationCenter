import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import TopMenu from './AppBar';
import ImgMediaCard from './ImgMediaCard';
import image1 from './images/emblem.jpg';
import image2 from './images/information.jpg';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  
  flex: {
    display: 'flex!important',
    flexWrap: 'wrap',
    justifyContent: 'center',
    
   
  },
  
 
});

export default function StartPage() {
  const classes = useStyles();
  return (
    <>
    <TopMenu/>
    <Container style={{ width: '100%' }}>
      <Grid item container spacing={1} bgcolor="background.paper">
      <Grid item xs className={classes.flex} >
     
      <ImgMediaCard 
      img={image2} 
      name="Информционно-правовая база" 
      text="Краткая информация об НПА, применяющася в процессе службы в 
      ОВД"/>
        <ImgMediaCard 
       
         link ='adminpractic' 
        img={image1} 
        name='Подсистема Административная Практика' 
        text="Ошибки по таблицам АдмПрактики для исправления"/>
        <ImgMediaCard 
        link ='driver'
        img={image1} 
        name='Подсистема Водитель' 
        text="Ошибки по таблицам Водитель для исправления"/>
        <ImgMediaCard 
        link ='transport'
        img={image1} 
        name='Подсистема Транспорт' 
        text="lorem inpectus inprisum momento lorem inpectus inprisum momento lorem inpectus inprisum momento"/>
      </Grid>
      </Grid>
    </Container>
    </>
  );
}


