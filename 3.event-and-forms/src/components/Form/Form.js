import React, { Component} from 'react';
import './Form.css';

export default class Form extends Component {
    constructor(props) {
        super(props);
    
        this.state = {name:'',password:'',bio:'',make:''};

        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        alert(this.state.value)
    }

    onChange(e){
        e.target.name
        this.setState({[e.target.name]:e.target.value});
    }

    render(){
        return (
            <form className="default-form" onSubmit={this.onSubmit}> 
            <h1>Event form</h1>
                Name: 
                <input 
                onChange={this.onChange}
                name="name"
                type="text" 
                value={this.state.name} />
                Password: 
                <input 
                onChange={this.onChange}
                type="password" 
                name="password"
                value={this.state.password} />
                Bio: 
                <textarea 
                onChange={this.onChange}
                name="bio"
                value={this.state.bio}
                />
                <select
                onChange={this.onChange}
                name="make"
                value={this.state.make}
                > 
                    <option value="volvo">Volvo</option>
                    <option value="audi">Audi</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
        );
    }
};