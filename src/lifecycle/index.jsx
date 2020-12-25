import React, { Component } from 'react';

class WillRemove extends Component{
    componentDidUpdate(){
        console.log('Child: Mount Called');
    }
    componentWillUnmount(){
        console.log('Child: Unmount Called');
    }
    render(){
        return <p>I will remove soon</p>
    }
}

class Lifecycle extends Component {
    constructor(){ //01
        super();
        this.state={
            count: 0
        };
        console.log('Constructor Called');
        this.divRef = React.createRef()
        this.btnRef = React.createRef()
    }
    componentDidMount(){//03
        console.log('Component Did Mount Called');
        // console.log('Mounted', this.divRef);
        // console.log(this.divRef.current);
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('Component Did Update');
        console.log(snapshot);
    }
   
    static getDerivedStateFromProps(props, state){
        console.log('GetDeriveStateFromProps');
        // if(props.count !== state.count){
        //     return{
        //         count: props.count
        //     }
        // }
        // return null
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('Shuld Component Upadate Called');
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        const btn = this.btnRef.current
       return btn.offsetTop || null;
    }
    render() { //02
        console.log('Render Callled');
        // console.log('Ref', this.divRef);
        return (
            <div ref={this.divRef}>
                <h3>React Lifecycle Methods</h3>
                <p>Count: {this.state.count}</p>
                {this.state.count % 2 === 0 && <WillRemove/>}
                <button
                    onClick={()=> this.setState({count: this.state.count + 1})}
                    ref={this.btnRef}
                >Increment</button>
            </div>
        );
    }
}

export default Lifecycle;
