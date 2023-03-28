import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const OneHome = ({ match }) => {
    const [home, setHome] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios
        .get(`http://localhost:8000/homes/${id}`)
        .then((response) => {
            setHome(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [id]);

    return (
        <div>
        <h1>One Home</h1>
        <p>{id}</p>
        <p>Street: {home.street}</p>
        <img style={{width: "330px", height:"240px"}} src={home.image}/>
        </div>
    );
};

export default OneHome;
