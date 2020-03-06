import React, {Component} from 'react';
import './App.css';
import { Component } from 'react';

class search extends Component{
    constructor(){
        super();
        this.state = {
            search: []
        }
    }
render(){

    return (
        <div>
            <div className='sideBar'>
                <form onSubmit={SearchIng}>
                <h3>Search by ingredients</h3>
                <input type='text'></input>
                <input className='button' type='submit'></input>
                </form> <form onSubmit={SearchName}>
                <h3>Search by name</h3>
                <input type='input'></input>
                <input className='button'  type='submit'></input>
                </form> <form onSubmit={SearchDish}>
                <h3>Search by dishtype</h3>
                <input type='input'></input>
                <input className='button'  type='submit'></input> 
                </form>
            </div>
          
            
        </div>
    );
    }
}

export default search;