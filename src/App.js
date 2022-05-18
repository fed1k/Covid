import './App.scss';
import React, { useEffect } from 'react';
import { AiFillHome as Home, AiTwotoneSetting as Setting } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import thunkFunction from './redux/fetchRequest';
import icon from './Loading_icon.gif';
// import Countries from './components/countries';
// import store from './redux/store';
// import { myaction } from './redux/reducer';
// import fetchData from './redux/fetchRequest';
// import dispatchRequestToStore from './redux/dispatchDataToStore';
// import store from './redux/store';

function App() {
  // const myArray = [];
  const dispatch = useDispatch();
  const data = useSelector((state) => state.country.countries);
  useEffect(() => {
    dispatch(thunkFunction());
  }, []);

  const searcher = (e) => {
    const allElements = document.querySelectorAll('.countries h1');
    if (e.target.value) {
      allElements.forEach((i) => {
        // console.log(i.textContent)
        // if (e.target.value.includes(i.textContent)) {
        // const myElemen = i.parentElement;
        // myElemen.style.display = 'block';
        // if (i.textContent === e.target.value) {
        const result = i.textContent.toLowerCase().includes(e.target.value.toLowerCase());
        if (result) {
          const parent = i.parentElement;
          parent.style.display = 'block';
        } else {
          const parent = i.parentElement;
          parent.style.display = 'none';
        }
        // }
        // }
        //   const myElemen = i.parentElement;
        //   myElemen.style.display = 'none';
        // }
      });
    } else {
      allElements.forEach((i) => {
        const papa = i.parentElement;
        papa.style.display = 'block';
      });
    }
  };
  // Array.from(data);
  // const arrayedData = data.dates;
  // Array.from(arrayedData);
  // Array.from(data);
  // console.log(myEntry);
  // const myEntry = Object.entries(data);
  // const myArray = [];
  // console.log(data);
  // const myArray = [...data];
  return (
    <div className="App">
      <nav className="navbar">
        <Home className="home-icon" />
        <p>Covid Watch</p>
        <Setting className="setting" />
      </nav>
      <form>
        <input type="search" name="search" id="search" placeholder="Search..." onChange={(e) => searcher(e)} />
      </form>
      <div className="cards-main-container">
        {data ? Object.entries(data).map((i) => (
          <div className="countries" key={i[1].name}>
            <h1>{i[1].name}</h1>
            <p>
              {i[1].date}
              {' '}
              confirmed cases:
              {' '}
              {i[1].today_confirmed}
            </p>
          </div>
        ))
          : <img src={icon} alt="loading" />}
      </div>
    </div>
  );
}

export default App;
