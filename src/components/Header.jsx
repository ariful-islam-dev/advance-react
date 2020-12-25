import React, { Component } from 'react'
import  newsCategory  from '../news'

export class Header extends Component {
    state = {
        searchTerm: ''
    }
    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }
    handleKeyPress = () => {

    }
    render() {
        const { category , changeCategory} = this.props;
        return (
            <div className="my-4">
                <h1 className="mb-4" style={{ fontWeight: '300' }}>
                    Block Buster HeadLines
                </h1>
                <input
                    type="search"
                    className="form-control"
                    placeholder="Type Anything & Press Enter To Search"
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <div className="my-4">
                    {newsCategory && Object.keys(newsCategory).map((item, index) => {
                        if(category === newsCategory[item]){
                            return <button key={index} onClick={()=>changeCategory(newsCategory[item])} className="btn btn-sm btn-warning mr-3 mb-2">
                                {`#${newsCategory[item]}`}
                            </button>
                        }else{

                            return <button onClick={()=>this.props.changeCategory(newsCategory[item])} key={index} className="btn btn-sm btn-light mr-3 mb-2">
                                {`#${newsCategory[item]}`}
                            </button>
                        }

                    })}
                </div>
            </div>
        )
    }
}

export default Header
