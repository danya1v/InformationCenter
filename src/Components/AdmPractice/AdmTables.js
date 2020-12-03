import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CardTable from '../Table/CardTable';
import image1 from '../StartPage/images/emblem.jpg';
import image2 from '../StartPage/images/information.jpg';



export default function AdmTables(props) {


  return (
   
    <>
    <Container style={{ width: '100%' }}>
      <Grid item container spacing={1} bgcolor="background.paper">
        <Grid item xs>
      <CardTable 
      link={'adminpractic/APtable1'}
      img={image2} 
      name={props.menu} 
      text="Краткая информация об НПА, применяющася в процессе службы в 
      ОВД"/>
      {/* {props.menu.map((item, index) => (
    console.log(item.title)
  ))} */}
      </Grid>
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
      </Grid>
      </Grid>
      
    </Container>
    </>
  );
}