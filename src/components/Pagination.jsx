import React, { Component } from 'react'

export class Pagination extends Component {
    state = {
        isEditable: false
    }
    render() {
        const { currentPage, totalPage, next, prev, isPrevious, isNext, hanglePageChange, goToPage } = this.props;
        return (
            <div className="d-flex align-items-center my-5">
                <button className="btn btn-warning" disabled={!isPrevious} onClick={() => { prev() }}>Previous</button>
                <div className="d-flex flex-grow-1 text-center ">
                    {this.state.isEditable ? (
                        <input
                            style={{ width: '100%' }}
                            type="number"
                            value={currentPage}
                            onChange={(e) => hanglePageChange(e.target.value)}
                            onKeyPress={e => {
                                if (e.key === 'Enter') {
                                    goToPage()
                                    this.setState({ isEditable: false })
                                }
                            }}
                        />
                    ) : (
                            <p
                                style={{ userSelect: 'none', lineHeight: '1.1', width: '100%' }}
                                title="Double Tap to Jump Page"
                                onDoubleClick={() => { this.setState({ isEditable: !this.state.isEditable }) }}
                            >
                                {currentPage} of {totalPage} <br />
                                <small>Double Tap to Edit</small>
                            </p>
                        )}
                </div>
                <button className="btn btn-warning ms-auto" disabled={!isNext} onClick={() => { next() }}>Next</button>
            </div>
        )
    }
}

export default Pagination;
