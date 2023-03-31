import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import Update from './Update'
import Create from './Create';



const Home = () =>{
    const [homes, setHomes] = useState([])
    let [newListing, setNewListing] = useState([])
    const [updated, setUpdated] = useState(false);

    const {id} =useParams()
    
        const getHomes = () => {
        axios.get('https://real-ist-backend-tz4r.onrender.com/homes/all')
        .then((response) => setHomes(response.data), 
        (err) => console.log(err))
        .catch((error) => console.log(error))
        }

        const getOneHome = (id) => {
            return axios.get(`https://real-ist-backend-tz4r.onrender.com/homes/${id}`)
                .then((response)=>{
                    return response.data
                })
                .catch((error)=>{
                    console.log(error);
                })
        }
    
        //create
        const handleCreate = (newListing) => {
        axios
        .post('https://real-ist-backend-tz4r.onrender.com/homes', newListing)
        .then((response) => {
            getHomes();
        });
    }
        //Delete
        const handleDelete = (event) => {
        axios.delete(`https://real-ist-backend-tz4r.onrender.com/homes/${event.target.value}`)
        .then((response) =>{
            getHomes()
        })
        };
    
        //Update
        const handleUpdate = (editHome) => {
        axios
                .put(`https://real-ist-backend-tz4r.onrender.com/homes/${editHome.id}`, 
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


    return(
        <>
                  {/* < Create handleCreate={handleCreate} /> */}
            <div className="grid grid-cols-fluid gap-6 mt-5">
                {homes.map((home)=> {
                return (
                    <div>
                    {/* <h2>a home</h2>
                    <p>Street: {home.houseNum} {home.street}</p>
                    <p>State: {home.state}</p>
                    <p>Zip: {home.zip}</p>
                    <p>Price: {home.price}</p>
                    <p>Bedroom: {home.bedroom} Bath: {home.bathroom}</p>
                    <p>Size: {home.squareFeet} sqft</p> */}
                        <div>
                            <Link to={`/oneHome/${home.id}`} onClick={() => getOneHome(home.id)}>
                                <img className='ml-auto mr-auto' style={{width: "330px", height:"240px"}} src={home.image}/>
                            </Link>
                        </div>
                    {/* <p>{home.description}</p>
                    <button onClick={handleDelete} value={home.id}>DELETE</button>
                    <Update handleUpdate={handleUpdate} home={home}/> */}
                    </div>
                )
                })}
            </div>
        </>
    )

}

export default Home