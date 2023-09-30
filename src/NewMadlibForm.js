import React, { useState } from "react";

const NewMadlibForm = ({ addMadlib }) => {
    const INITIAL_STATE = {
        noun1: "",
        noun2: "",
        adjective: "",
        color: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name] : value,
        }))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        addMadlib(formData.noun1, formData.noun2, formData.adjective, formData.color);
        setFormData(INITIAL_STATE);
    }

    return (
        <div>
        <form onSubmit={handleSubmit}> 
            <label htmlFor="noun1"></label>
            <input 
                id="noun1"
                type="text"
                name="noun1"
                placeholder="Noun 1"
                value={formData.noun1}
                onChange={handleChange} 
            />
            <label htmlFor="noun2"></label>
            <input 
                id="noun2"
                type="text"
                name="noun2"
                placeholder="Noun 2"
                value={formData.noun2}
                onChange={handleChange} 
            />
            <label htmlFor="adjective"></label>
            <input 
                id="adjective"
                type="text"
                name="adjective"
                placeholder="Adjective"
                value={formData.adjective}
                onChange={handleChange} 
            />
            <label htmlFor="color"></label>
            <input 
                id="color"
                type="text"
                name="color"
                placeholder="Color"
                value={formData.color}
                onChange={handleChange} 
            />
            <button>Get Madlib</button>
            
        </form>
        </div>
    )
}

export default NewMadlibForm;