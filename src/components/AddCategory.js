import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) => {
        // console.log(e.target.value);
        // console.log(e);

        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit hecho');

        if (inputValue.trim().length > 2) {
            setCategories( queens => [inputValue, ...queens] );
            setinputValue('');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* <h1>{inputValue}</h1> */}
                <input
                    type ="text"
                    value={inputValue}
                    onChange = {handleInputChange}
                />
            </form>
        </>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
