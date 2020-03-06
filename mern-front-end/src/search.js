import React from 'react';
import './App.css';

const search = () => {
    return (
        <div>
            <form className='sideBar'>
                <h3>Search by ingredients</h3>
                <input type='input'></input>
                <input type='submit'></input>
                <h3>Search by name</h3>
                <input type='input'></input>
                <input type='submit'></input>
                <h3>Search by dishtype</h3>
                <input type='input'></input>
                <input type='submit'></input>
            </form>
            
        </div>
    );
};

export default search;