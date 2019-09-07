import React from 'react';
import Ball from "./Ball";
import "./Lottery.css";

class Lottery extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nums: Array.from({length: this.props.numBalls, shake: false})};
        
        this.clickHandler = this.clickHandler.bind(this);
    }
    //Function to generate (numBalls) of random numbers <= (maxNum)
    generateNums() {
        // *Setting state here so be warey. Were using the previous state so we use the callback.
        this.setState(st => ({
            nums: st.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1)
        }));

        const that = this;

        setTimeout(function () {
            that.setState({ shake: false });
          }, 1000);
    }

    clickHandler() {
        this.state.shake = true;
        this.generateNums();
    }

    render() {

        // Sequence: For each random number in the nums array, we create a ball and assign its value to the current num

        return (
            <div className="Lottery">
                <h1>{this.props.title}</h1>
                <p>
                    {this.state.nums.map(n => {
                        return <Ball
                            num={n}
                            shake={this.state.shake}/>;
                    })}
                </p>
                <button disabled={this.state.shake} onClick={this.clickHandler}>Generate</button>
            </div>
        );
    }

}

export default Lottery;
