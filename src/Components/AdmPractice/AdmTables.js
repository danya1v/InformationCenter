import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import OneTable from '../Table/OneTable';
import image1 from '../StartPage/images/emblem.jpg';
import image2 from '../StartPage/images/information.jpg';



export default function AdmTables() {
  return (
    <>
    <Container style={{ width: '100%' }}>
      <Grid item container spacing={1} bgcolor="background.paper">
        <Grid item xs>
      <OneTable 
      link={'adminpractic/APtable1'}
      img={image2} 
      name="Привлечение к административной отвественности лица, возраст которого превышает 100 лет" 
      text="Краткая информация об НПА, применяющася в процессе службы в 
      ОВД"/>
      </Grid>
      <Grid item xs>
        <OneTable 
         link ='adminpractic/APtable1' 
        img={image1} 
        name='Привлечение к административной отвестенности лица, возраст которого мнее 13 лет' 
        text="Ошибки по таблицам АдмПрактики для исправления"/>
        </Grid>
        <Grid item xs>
        <OneTable 
        img={image1} 
        name='Привлечение водителя по статье КоАП РФ, субъектом которой является пешеход"' 
        text="lorem inpectus inprisum momento lorem inpectus inprisum momento lorem inpectus inprisum momento"/>
         </Grid>
         <Grid item xs>
             <OneTable 
        img={image1} 
        name='Привлечение водителя по статье КоАП РФ, субъектом которой является пешеход"' 
        text="lorem inpectus inprisum momento lorem inpectus inprisum momento lorem inpectus inprisum momento"/>
        </Grid>
        <Grid item xs>
         <OneTable 
        img={image1} 
        name='Привлечение водителя по статье КоАП РФ, субъектом которой является пешеход"' 
        text="lorem inpectus inprisum momento lorem inpectus inprisum momento lorem inpectus inprisum momento"/>
         </Grid>
         <Grid item xs>
         <OneTable 
        img={image1} 
        name='Привлечение водителя по статье КоАП РФ, субъектом которой является пешеход"' 
        text="lorem inpectus inprisum momento lorem inpectus inprisum momento lorem inpectus inprisum momento"/>
        </Grid>
        <Grid item xs>
         <OneTable 
        img={image1} 
        name='Привлечение водителя по статье КоАП РФ, субъектом которой является пешеход"' 
        text="lorem inpectus inprisum momento lorem inpectus inprisum momento lorem inpectus inprisum momento"/>
      </Grid>
      </Grid>
      
    </Container>
    </>
  );
}