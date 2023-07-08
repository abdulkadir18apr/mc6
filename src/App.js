import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { ResturantDetails } from './pages/ResturantDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:resturantId" element={<ResturantDetails/>}/>

      </Routes>

    </div>
  );
}

export default App;
