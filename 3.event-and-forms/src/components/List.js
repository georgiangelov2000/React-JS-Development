import React from 'react';
import './List.css';

const List=(props)=>{
    return (
        <ul className="list"> 
        <h1>List</h1>
            {props.children}
        </ul>
    )
};

export default List;