import {BrowserRouter as Router,Routes,Route, BrowserRouter} from  'react-router-dom'
import Navigation from './components/Navigation';
import Accueille from './components/Accueille';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
          <Routes>
            <Route path='/' exact element={<Accueille/>}/>
            <Route path='/Contact' exact element={<Contact/>}/>
          </Routes>
      </Router>
      
    </div>
  );
}

export default App;
