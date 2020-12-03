import './App.css';
import PersistentDrawerLeft from './Components/Menu/PersistentDrawerLeft'
// import ImgMediaCard from './Components/StartPage/ImgMediaCard'
import StartPage from './Components/StartPage/StartPage'
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  const menu = [
    {
      link: '/adminpractic/APtable1',
      label: 'Привлечение к Адм. отв. лица, возраст которого менее 13 лет',
    },
    {
      link: '/adminpractic/APtable2',
      label: 'Таблица 2',
    }
    ]
  return (
    <div className="App">
      <Router>
      <Route path='/adminpractic'><PersistentDrawerLeft items={menu} /></Route>
      <Route path ='/' exact component={StartPage}/>
      </Router>
    </div>
  );
}

export default App;


