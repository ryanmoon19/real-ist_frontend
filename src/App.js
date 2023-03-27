import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Create from './components/Create';
import Update from './components/Update';

function App() {
  const [homes, setHomes] = useState([])
  let [newListing, setNewListing] = useState([])
  const [updated, setUpdated] = useState(false);

  const getHomes = () => {
    axios.get('http://localhost:8000/homes')
    .then((response) => setHomes(response.data), 
    (err) => console.log(err))
    .catch((error) => console.log(error))
  }

  //create
  const handleCreate = (newListing) => {
    axios
    .post('http://localhost:8000/homes', newListing)
    .then((response) => {
        getHomes();
    });
}
  //Delete
  const handleDelete = (event) => {
    axios.delete(`http://localhost:8000/homes/${event.target.value}`)
    .then((response) =>{
        getHomes()
    })
  };

  //Update
  const handleUpdate = (editHome) => {
    axios
            .put(`http://localhost:8000/homes/${editHome.id}`, 
              editHome
            )
            .then((response) => {
              getHomes();
        })
        .catch((error) => {
        console.error(error);
        });
  }

  useEffect(()=>{
    getHomes()
  }, [])

  useEffect(() => {
    getHomes();
}, [updated]);

  return (
    <div className="App">
      <h1>Real-ist</h1>
      < Create handleCreate={handleCreate} />
      <div className="Home">
        {homes.map((home)=> {
          return (
            <div className="person">
              <h2>a home</h2>
              <p>Street: {home.houseNum} {home.street}</p>
              <p>State: {home.state}</p>
              <p>Zip: {home.zip}</p>
              <p>Price: {home.price}</p>
              <p>Bedroom: {home.bedroom} Bath: {home.bathroom}</p>
              <p>Size: {home.squareFeet} sqft</p>
              <img src={home.image}/>
              <p>{home.description}</p>
              <button onClick={handleDelete} value={home.id}>DELETE</button>
              <Update handleUpdate={handleUpdate} home={home}/>
            </div>
          )
        })}

      </div>
    </div>
  );
}

export default App;
