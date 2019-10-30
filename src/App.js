import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header'
import Cards from './Cards'
import './styles/App.scss';

export const UserContext = React.createContext();

function App() {
  const [characters, setChar] = useState([]);
  const [searchChar, setSearch] = useState('');
  const endpoint = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=39116970e992c72786721de7660c1382&hash=80277fb7832df2971052580abb35630e"
  useEffect(() => {
    axios.get(endpoint)
      .then(response => setChar(response.data.data.results))
  }, [])
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchChar === '') {
      axios.get(endpoint)
        .then(response => setChar(response.data.data.results))
    } else {
      axios.get(`${endpoint}&nameStartsWith=${searchChar}`)
        .then(response => setChar(response.data.data.results))
    }
  }
  return (
    <UserContext.Provider value={{ characters, searchChar, handleChange, handleSubmit }}>
      <div className="App">
        <Header />
        <Cards />
      </div>
    </UserContext.Provider>
  );
}

export default App;
