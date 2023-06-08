
import React, { Component } from 'react'

export default class FavoriteColor extends Component {
    divStyle = {
        background: "yellow",
        padding: "16px"
    }
    inputRef = React.createRef()

    
    state = { color: " "};
    colors_ar = ["red", "orange", "green", "blue"]
    changeColor = () => {
        let select_val = this.inputRef.current.value;
        this.setState({color:select_val});

    }

    render() {

        return (
            <div style={{ color: this.state.color }}>
                <h2>Enter favorite color: {this.state.color}</h2>
                <form>
                    <select  onChange={this.changeColor} ref={this.inputRef} type="select">
                        <option value="">--Select--</option>
                        {this.colors_ar.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </form>

            </div>
        )
    }
}
