import React, { Component } from 'react'

export class Pagination extends Component {
    state = {
        isEditable: false
    }
    render() {
        return (
            <div className="d-flex align-items-center my-5">
                <button className="btn btn-warning">Previous</button>
                <div className="d-flex flex-grow-1 text-center ">
                    {this.state.isEditable ? (
                        <input
                            type="number"
                            value="1"
                        />
                    ) : (
                            <p
                                style={{ userSelect: 'none', lineHeight: '1.1' , width: '100%'}}
                                title="Double Tap to Jump Page"
                                onDoubleClick={() => { this.setState({ isEditable: !this.state.isEditable }) }}
                            >
                                {1} of {100} <br />
                                <small>Double Tap to Edit</small>
                            </p>
                        )}
                </div>
                <button className="btn btn-warning ms-auto">Next</button>
            </div>
        )
    }
}

export default Pagination;
