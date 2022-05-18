import './App.scss';
import React, { useEffect } from 'react';
import { AiFillHome as HomeIcon, AiTwotoneSetting as Setting } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { Route, Routes, Link } from 'react-router-dom';
import thunkFunction from './redux/fetchRequest';
import Country from './components/Country';
import Home from './components/Home';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(thunkFunction());
  }, []);

  return (
    <div className="App">
      <div id="App">
        <nav className="navbar">
          <Link to="/"><HomeIcon className="home-icon" /></Link>
          <p>Covid Watch</p>
          <Setting className="setting" />
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:country" element={<Country />} />
        </Routes>
        <footer>
          <h3>Here is footer finally</h3>
        </footer>
      </div>
    </div>
  );
}

export default App;
