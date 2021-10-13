import './App.css';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Home from './Pages/Home' 
import Contexts from './store/Contexts'
import Watch from './Pages/watchPage' 
function App() {
  return (
    <div className="App">
      <Contexts>
        <Router>
            <Route path='/' exact component={Home}/>
            <Route path='/watch' component={Watch}/>
        </Router>
      </Contexts>
    </div>
  );
}

export default App;
