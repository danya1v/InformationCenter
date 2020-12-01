import './App.css';
import PersistentDrawerLeft from './Components/Menu/PersistentDrawerLeft'
import ImgMediaCard from './Components/StartPage/ImgMediaCard'
import StartPage from './Components/StartPage/StartPage'
import {BrowserRouter as Router, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
      <Route path='/adminpractic' component={PersistentDrawerLeft}/>
      <Route path ='/' exact component={StartPage}/>
      </Router>
    </div>
  );
}

export default App;


