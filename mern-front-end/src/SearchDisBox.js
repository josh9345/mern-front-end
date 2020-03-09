import React, { Component } from 'react';
import Search from './search'
import "./App.css"

class SearchDisBox extends Component {
    render(props){
        let search = this.props.value;
        let results= ''
    console.log(this.props.value)
        
            results= search.map(item =>{
            return  <div className = 'result'>
                <div><img src={item.image}></img></div>
                <div><h2>{item.title} </h2> <br/><h5>ingredients:  </h5>
                {item.ingredients.join(' , ')} <h5> DishTypes:  </h5>
                {item.dishTypes.join(' , ')}</div>
                </div>
            })
        

    return (
        <div className='Container'>
            <div>{results}</div>
        </div>
    );
    }
};

export default SearchDisBox;