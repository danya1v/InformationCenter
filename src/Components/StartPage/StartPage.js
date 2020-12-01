import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import TopMenu from './AppBar';
import ImgMediaCard from './ImgMediaCard';
import image1 from './images/emblem.jpg';
import image2 from './images/information.jpg';



export default function StartPage() {
  return (
    <>
    <TopMenu/>
    <Container style={{ width: '100%' }}>
      <Box display="flex" alignItems="center" flexDirection="row" p={0}  mt={13}  bgcolor="background.paper">
        
      <ImgMediaCard 
     
      img={image2} 
      name="Информционно-правовая база" 
      text="Краткая информация об НПА, применяющася в процессе службы в 
      ОВД"/>
        <ImgMediaCard 
         link ='adminpractic' 
        img={image1} 
        name='Подсистема "АдмПрактика"' 
        text="Ошибки по таблицам АдмПрактики для исправления"/>
        <ImgMediaCard 
        img={image1} 
        name='Подсистема "что-то Практика"' 
        text="lorem inpectus inprisum momento lorem inpectus inprisum momento lorem inpectus inprisum momento"/>
      </Box>
      
    </Container>
    </>
  );
}


