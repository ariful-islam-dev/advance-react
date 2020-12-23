import React, { Component } from 'react'
import Dumb from './dumb';


const messages = [
    'Tempor adipisicing quis sint id sint in officia esse.',
    'Veniam eu anim exercitation dolore voluptate tempor nulla labore officia.',
    'Ut exercitation aute incididunt in do ex.',
    'Cillum voluptate ea occaecat irure fugiat.',
    'Esse qui culpa lorem magna.',
    'Officia Lorem nulla lobore exercitation nulla lorem mollit ipsum dolore',
];


class Smart extends Component {
    state = {
        msg: messages[0],
    };
    componentDidMount(){
        setInterval(()=>{
            const randomIndex = Math.floor(Math.random()*messages.length);
            this.setState({
                msg: messages[randomIndex]
            });
        }, 1*1000)
    }
    render() {
        return (
            <div>
                <h3>I am Smart</h3>
                <Dumb msg={this.state.msg}/>
            </div>
        )
    }
}

export default Smart
