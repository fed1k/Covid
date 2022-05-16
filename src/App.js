import './App.scss';
import { AiFillHome as Home, AiTwotoneSetting as Setting } from 'react-icons/ai';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <Home className="home-icon" />
        <p>Covid Watch</p>
        <Setting className="setting" />
      </nav>
    </div>
  );
}

export default App;
