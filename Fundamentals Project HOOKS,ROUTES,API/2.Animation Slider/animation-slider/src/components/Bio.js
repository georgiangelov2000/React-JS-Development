import React, {Component} from 'react';
import Characters from './Characters';

class Bio extends Component {
    constructor(){
        super();
        this.state={
            id:1,
            curChar:{
                url:''
            }
        }
    }

    componentDidMount(){
        fetch('http://localhost:9999/character/'+this.state.id).then(data=>{
            return data.json();
        }).then(parsedData=>{
            this.setState({curChar:parsedData})
        })
    }

    render(){
        return(
        <div>
        <fieldset> 
            <Characters params={({url:this.state.curChar.url})} />
            <p>{this.state.curChar.bio}</p>
        </fieldset>
        </div>
        )
    }
}
export default Bio