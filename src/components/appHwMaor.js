import React, { Component } from "react";
import Message from "./message";
import Exchange from './exchange';
import Counter from './counter';
import Gallery from './gallery';
export default class AppHwMaor extends Component {
    render() {
        return (
            <div className="container row">
                <div className="col-6">
                    <Message msg="first 1" bg="red" />
                </div>
                <div className="col-6">
                    <Message msg="second 2" bg="rgb(0,255,255)" />
                </div>
                <Exchange />
                <Counter />
                <Gallery />
            </div>
        )
    }
}
