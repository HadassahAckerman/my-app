import React, { Component } from "react";

export default class InputDate extends Component {

    InputRef = React.createRef();


    onChangeDate = () => {
        console.log(this.InputRef.current.value);
        let input_val = this.InputRef.current.value;
        this.props.changeDate(input_val);
    }



    render() {
        return (
            <div className="col-md-4 mx-auto d-flex">
                <input ref={this.InputRef} className="form-control" type="date" defaultValue="2024-01-01" />
                <button onClick={this.onChangeDate} className="btn btn-info">Change</button>


            </div>
        )
    }
}
