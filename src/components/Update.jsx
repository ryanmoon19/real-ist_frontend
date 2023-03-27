import React, {useState} from 'react';

const Update = (props) => {

    const [formData, setFormData] = useState({...props.home}); 

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleUpdate(formData)
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="houseNum">House Number: </label>
            <input type="text" name="houseNum" value={formData.houseNum} onChange={handleChange} />
            <br />
            <br />
            <label htmlFor="street">Street: </label>
            <input type="text" name="street" value={formData.street} onChange={handleChange} />
            <br />
            <br />
            <label htmlFor="city">City:</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} />
            <br />
            <br />
            <label htmlFor="state">State:</label>
            <input type="text" name="state" value={formData.state} onChange={handleChange} />
            <br />
            <br />
            <label htmlFor="zip">Zip:</label>
            <input type="number" name="zip" value={formData.zip} onChange={handleChange} />
            <br />
            <br />
            <label htmlFor="price">Price:</label>
            <input type="number" name="price" value={formData.price} onChange={handleChange} />
            <br />
            <br />
            <label htmlFor="bedroom"># of Bedrooms:</label>
            <input type="number" name="bedroom" value={formData.bedroom} onChange={handleChange} />
            <br />
            <br />
            <label htmlFor="bathroom"># of Bathrooms:</label>
            <input type="number" name="bathroom" value={formData.bathroom} onChange={handleChange} />
            <br />
            <br />
            <label htmlFor="description">Description:</label>
            <input type="text" name="description" value={formData.description} onChange={handleChange} />
            <br />
            <br />
            <label htmlFor="squareFeet">Square Feet:</label>
            <input type="number" name="squareFeet" value={formData.squareFeet} onChange={handleChange} />
            <br />
            <br />
            <label htmlFor="image">Image:</label>
            <input type="text" name="image" value={formData.image} onChange={handleChange} />
            <br />
            <br />
            <input type="submit" value="Update" />
        </form>
        </>
    )
}

export default Update