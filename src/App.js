import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Contact from './components/contact/contact';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/contact' element={ <Contact /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
