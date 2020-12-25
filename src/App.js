import './App.css';
import MainFrame from './Components/MainFrame/MainFrame'
// import ImgMediaCard from './Components/StartPage/ImgMediaCard'
import StartPage from './Components/StartPage/StartPage'
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      <Router>
      <Route path='/adminpractic'><MainFrame  /></Route>
      <Route path='/driver'><MainFrame  /></Route>
      <Route path='/transport'><MainFrame  /></Route>

      <Route path ='/' exact component={StartPage}/>
      </Router>
    </div>
  );
}


export default App;


