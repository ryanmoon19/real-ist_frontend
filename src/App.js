import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [homes, setHomes] = useState([])

  const getHomes = () => {
    axios.get('http://localhost:8000/homes')
    .then((response) => setHomes(response.data), 
    (err) => console.log(err))
    .catch((error) => console.log(error))
  }

  useEffect(()=>{
    getHomes()
  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
