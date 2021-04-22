//import React, { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";


const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show=useSelector(state=>state.showCounter);

  const incrementHandler = () => {
    dispatch({
      type: "increment",
    });
  };

  const increaseHandler=()=>{
      dispatch({
          type: "increase",
          value:5
      })
  }

  const decrementHandler = () => {
    dispatch({
      type: "decrement",
    });
  };

  const toggleCounterHandler = () => {
      dispatch({
          type: "toggle"
      })
  };

  return (
    <main>
      <h1>Redux Counter</h1>
      {show && <div>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increase by 5 </button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

/*
class Counter extends Component {
    incrementHandler(){
        this.props.increment();
    }

    decrementHandler(){
        this.props.decrement();
    }
    toggleCounterHandler(){

    }
  render() {
    return (
      <main>
        <h1>Redux Counter</h1>
        <div>{this.props.counter}</div>
        <button onClick={this.incrementHandler.bind(this)}>Increment</button>
        <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps =state=>{
    return {
        counter: state.counter
    }
}

const mapDispatchToProps= dispatch =>{
    return {
        increment:()=>dispatch({
            type:'increment'
        }),
        decrement:()=>dispatch({
            type:'decrement'
        })
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Counter);
*/