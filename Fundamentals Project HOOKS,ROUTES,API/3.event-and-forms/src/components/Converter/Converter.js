import React, { Component } from "react";
import CurrencyDisplay from "./CurrencyDisplay";
import './Convert.css';

const conversionTable = {
    eur:1,
    usd:1.16
}

function convert(value,from,to){
  return  value / conversionTable[from] *conversionTable[to]
}


export default class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = { eur: 0, usd: 0 };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    
    if(e.target.value===''){
      return ;
    }
    const value=Number(e.target.value);

    this.setState({
        eur: convert(value,e.target.name,'eur'),
        usd: convert(value,e.target.name,'usd')
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    /*
    const euroModel={
      onChange:this.onChange,
      value:this.state.eur,
      name:'eur'
    };
    const usdModel={
      onChange:this.onChange,
      value:this.state.eur,
      name:''
    }
    */
    return (
      <form className="myForm" onSubmit={this.onSubmit}>
        <h3>Converter</h3>
        EURO:
        <CurrencyDisplay
          name="eur"
          onChange={this.onChange}
          value={this.state.eur}
        />
        USD:
        <CurrencyDisplay
          onChange={this.onChange}
          value={this.state.usd}
          name="usd"
        />
      </form>
    );
  }
}
