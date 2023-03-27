import React, { useState } from 'react';
//question about the image portion
const Create = (props) => {
    let emptyListing = {
        houseNum: '',
        street: '',
        city: '',
        state: '',
        zip: Number,
        price: Number,
        bedroom: Number,
        bathroom: Number,
        description: '',
        squareFeet : Number,
        image : ''
    }

    const [listing, setListing] = useState(emptyListing)

    const handleChange = (event) => {
        setListing({...listing, [event.target.name]: event.target.value})
    }

    const handleSubmit=(event) => {
        event.preventDefault()
        props.handleCreate(listing)
    };



    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="houseNum">House Number: </label>
            <input type="text" name="houseNum" onChange = {handleChange}/>
            <br />
            <br />
            <label htmlFor="street">Street: </label>
            <input type="text" name="street" onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor="city">City:</label>
            <input type="text" name="city" onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor="state">State:</label>
            <input type="text" name="state" onChange={handleChange}/>
            <br/>
            <br/>
            <label htmlFor="zip">Zip:</label>
            <input type="number" name="zip" onChange={handleChange} />
            <br/>
            <br/>
            <label htmlFor="price">Price:</label>
            <input type="number" name="price" onChange={handleChange} />
            <br/>
            <br/>
            <label htmlFor="bedroom"># of Bedrooms:</label>
            <input type="number" name="bedroom" onChange={handleChange} />
            <br/>
            <br/>
            <label htmlFor="bathroom"># of Bathrooms:</label>
            <input type="number" name="bathroom" onChange={handleChange} />
            <br/>
            <br/>
            <label htmlFor="description">Description:</label>
            <input type="text" name="description" onChange={handleChange} />
            <br/>
            <br/>
            <label htmlFor="squareFeet">Square Feet:</label>
            <input type="number" name="squareFeet" onChange={handleChange} />
            <br/>
            <br/>
            <label htmlFor="image">Image:</label>
            <input type="text" name="image" onChange={handleChange} />
            <br/>
            <br/>
            <input type="submit" onChange={handleChange}/>
        </form>
    </>
      );
    }
export default Create;