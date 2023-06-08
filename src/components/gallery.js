
import React, { Component } from 'react'

export default class Gallery extends Component {

    img_arr = ["1", "2", "3", "4"]

    // כל משתנה ריאקטיבי , אצור אותו בתוך סטייט
    // שבנוי בתוך הריאקט כבר
    state = { counter: 1 };
    // נגדיר פונקציה תמיד כפונקציית חץ שאנחנו
    // ממציאים אותה כדי שלא נצטרך להתעסק עם הביינד
    nextImg = () => {

        this.setState({ counter: this.state.counter + 1 })

        if (this.state.counter + 1 > 4) {
            this.setState({ counter: this.state.counter = 1 });
        }
    }


    backImg = () => {

        this.setState({ counter: this.state.counter - 1 })

        if (this.state.counter - 1 == 0) {
            this.setState({ counter: this.state.counter = 4 });
        }
    }
    render() {

        return (
            <div >
                <h2>Gallery</h2>
                
                <img src={"/images/" + this.state.counter+".jpg"} width="270"  height="150"/>
                {/* <img src={"/images/" + this.img_arr[this.state.counter]+".jpg"} width="270"  height="150"/> */}
                <br/>
                <button onClick={this.nextImg}>Next {this.state.user}</button>
                <button onClick={this.backImg}>Back {this.state.user}</button>
            </div>
        )
    }
}
