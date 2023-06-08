
import React, { Component } from 'react'

export default class AddUntilFive extends Component {
    divStyle = {
        background: "yellow",
        padding: "16px"
    }

    counter = 0;
    // כל משתנה ריאקטיבי , אצור אותו בתוך סטייט
    // שבנוי בתוך הריאקט כבר
    state = { counter: 0 };
    // נגדיר פונקציה תמיד כפונקציית חץ שאנחנו
    // ממציאים אותה כדי שלא נצטרך להתעסק עם הביינד
    add1 = () => {
        // this.counter++;

        this.setState({ counter: this.state.counter + 1 })
        if (this.state.counter + 1 == 6) {
            this.setState({ counter: this.state.counter = 0 })
        }
    }


    reduce1 = () => {
        // this.counter--;

        this.setState({ counter: this.state.counter - 1 })
        if (this.state.counter - 1 == -1) {
            this.setState({ counter: this.state.counter = 5 })
        }
    }
    render() {
        // <div style="backgournd:skyblue">
        // <div style={{background:"skyblue",padding:"8px"}}>
        return (
            <div >
                <h2>Counter: {this.state.counter}</h2>
                <button onClick={this.add1}>Add 1</button>
                <button onClick={this.reduce1}>Reduce 1</button>
            </div>
        )
    }
}
