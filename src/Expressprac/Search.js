import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

//   useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/items?user_name=${query}`);
        setResults(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    // if (query) {
    //   getData();
    // } else {
    //   setResults([]);
    // }
//   }, [query]);

  const handleClick =()=>{
    getData()
  }


  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleClick}>Submit</button>
      <div>
        {results.map((item) => (
          <div key={item._id}>
            <strong>{item.name}</strong> - {item.description} (Quantity: {item.quantity})
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
