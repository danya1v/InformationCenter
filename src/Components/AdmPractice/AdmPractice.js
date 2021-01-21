import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CardTable from '../Table/CardTable';
import admpractic from '../../admpractic';
import voditel from '../../voditel';
import auto from '../../auto';
import PersistentDrawerLeft from '../Menu/leftMenu';
import {HashRouter as Router, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  
  flex: {
    display: 'flex!important',
    flexWrap: 'wrap',
    justifyContent: 'center',
   
  }
 
});

export default function AdmPractice(props) {
  // const [vTable, setVTable] = useState(props.table);
  const vTable = props.table;
  

  const classes = useStyles();
    
  return (
   
    <>
    <Route component = {PersistentDrawerLeft} />
    {console.log(props.name)}
    <Container style={{ width: '110%' }}>
    {/* {props.table = 2 ? console.log(2): console.log('no')} */}
          <Grid item container spacing={1} bgcolor="background.paper" >
    
        <Grid item xs className={classes.flex}>
          
          {vTable === 1 ? (admpractic.map((item, index) => (
          <Link key={item.label} to = {item.link} style={{width:'345px', textDecoration: 'none' }} >
          <CardTable 
          key={item.label}
          img={item.img} 
          name={item.label} 
          text={item.text}
        >
          
          </CardTable>
         
         </Link>
        ))) : vTable === 2 ? (voditel.map((item, index) => (
          <Link key={item.label} to = {item.link} style={{width:'345px', textDecoration: 'none' }} >
          <CardTable 
          key={item.label}
          img={item.img} 
          name={item.label} 
          text={item.text}
        >
          
          </CardTable>
         
         </Link>
        ))) : (auto.map((item, index) => (
          <Link key={item.label} to = {item.link} style={{width:'345px', textDecoration: 'none' }} >
          <CardTable 
          key={item.label}
          img={item.img} 
          name={item.label} 
          text={item.text}
        >
          
          </CardTable>
         
         </Link>
        )))}
       
      
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