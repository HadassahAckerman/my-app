
import React, { Component } from 'react'

export default class ExchangeCalc extends Component {

    selectRef = React.createRef();
    inputRef = React.createRef();


    state = { currencyType:"USD", currencyAmount:0, result:0};

    currencies_ar = [
        { key: "USD", value: 3.7 },
        { key: "EURO", value: 3.84 },
        { key: "BAHT", value: 10 }
    ]

    exchangeCurrency = () => {
        let select_val = this.selectRef.current.value;
        let input_val=this.inputRef.current.value;
        this.setState({ currencyType: select_val });
        this.setState({ currencyAmount: input_val });
        this.setState({result:(select_val*input_val).toFixed(2)})

    }

    render() {

        return (
            <div className='container-fluid m-4'>
                <div className='container text-center  '>
                    <p>Enter the currency you want to exchange:</p>
                    <form>
                        <select onChange={this.exchangeCurrency} ref={this.selectRef} type="select">

                            {this.currencies_ar.map((currency, index) => (
                                <option key={index} value={currency.value}>
                                    {currency.key}
                                </option>
                            ))}
                        </select>
                        <p>Enter the amount you want:</p>
                        <input onInput={this.exchangeCurrency} ref={this.inputRef} type="number" />

                    </form>

                    <p>It will cost you {this.state.result} NIS</p>

                </div>

            </div>
        )
    }
}
