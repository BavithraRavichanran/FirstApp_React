import React, { Component } from 'react'
import { directive } from '@babel/types';

class Message extends Component {
    constructor() {
        super()
        this.state = {
            msg: 'Welcome Jone'
        }
    }
    changeMsg(){
        this.setState({
            msg: 'Thank you'
        })
    }
    render() {
        return (
            < div><h1> {this.state.msg}</h1>
            <button onClick = {() => this.changeMsg()}>Subcribe </button> </ div>
        )
    }
}
export default Message;