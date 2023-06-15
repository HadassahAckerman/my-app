import React, { Component } from "react";


export default class CoinItem extends Component {
    render() {
        let item = this.props.item;
        return (
            <div className="col-md-4 border p-2">
                <img src={`https://files.coinmarketcap.com/static/widget/coins_legacy/64x64/${item.id}.png`} alt={item.name} className="w-25 me-2 float-end" onError={(e) => e.target.src = `https://files.coinmarketcap.com/static/widget/coins_legacy/64x64/bitcoin.png`} />
                <div className="float-end badge bg-danger">{item.cat}</div>
                <h4>{item.name}</h4>
                <div > value: {(item.price_usd).toLocaleString(2)}</div>

            </div>
        )
    }

}