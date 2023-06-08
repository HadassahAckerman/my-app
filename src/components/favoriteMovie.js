
import React, { Component } from 'react'

export default class FavoriteMovie extends Component {

    inputRef = React.createRef()


    state = { movie: "simpsons" };
    movies_ar = ["simpsons", "ninjaTurtles", "simba-TheKingLion", "iceAge"]
    chooseMovie = () => {
        let select_val = this.inputRef.current.value;
        this.setState({ movie: select_val });

    }

    render() {

        return (
            <div className='container-fluid m-4'>
                <div className='container text-center row '>
                    <div className='col-6'>
                        <h2>Choose your favorite movie:</h2>
                        <form>
                            <select onChange={this.chooseMovie} ref={this.inputRef} type="select">

                                {this.movies_ar.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </form>
                    </div>
                    <div className='col-3'>
                        <img src={"/images/" + this.state.movie + ".jpg"} width="250" height="150" className='border border-dark' />
                    </div>
                </div>
            </div>
        )
    }
}
