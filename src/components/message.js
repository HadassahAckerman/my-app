import React, { Component } from 'react'

export default class Message extends Component{
    user="koko";

    render(){
        return(
            <div className='message'>
                <h3>User:{this.user}</h3>
                <h2>Message:{this.props.txt}</h2>
            </div>
        )
    }
}