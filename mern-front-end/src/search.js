import React, {Component} from 'react';
import './App.css';
import SearchDisBox from './SearchDisBox'
import Displaybox from './DisplayBox'

class search extends Component{
    constructor(){
        super();
        this.state = {
            search: []
        }
    }
render(){
    let baseURL= "https://josh-recipe-api.herokuapp.com/recipes"
    let SearchIng = (e)=>{
        e.preventDefault();
        fetch(baseURL +`/ingredients/${e.target[0].value}`)
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
            this.setState({
                search: res
            })
        })
        .then((res)=>{
            console.log(this.state.search)
        })
}
let SearchName = (e)=>{
    e.preventDefault();
    fetch(baseURL +`/name/${e.target[0].value}`)
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        this.setState({
            search: res
        })
    })
    .then((res)=>{
        console.log(this.state.search)
    })
}
let SearchDish = (e)=>{
    e.preventDefault();
    fetch(baseURL +`/dishType/${e.target[0].value}`)
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        this.setState({
            search: res
        })
    })
    .then((res)=>{
        console.log(this.state.search)
    })
}

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
            <Displaybox />
             <div className='quote'><q >best recipe website around </q><br/>-Josh</div>
            <SearchDisBox value={this.state.search}/>
           
          
            
        </div>
    );
    }
}

export default search;