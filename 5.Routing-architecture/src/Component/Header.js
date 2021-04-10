import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render(){
        return(
            <header>
                <h1>Site Logo</h1>
               <nav> 
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
               </nav>
            </header>
        )
    }
}