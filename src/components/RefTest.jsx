import React from 'react'

const RefTest = React.forwardRef((_, ref) => {
    return (
        <div ref={ref} className="jumbotron bg-secondary p-5 my-5">
            <h1 className="text-light">Learn React JS Advence Fetures for Class base component from Stack Learner</h1>
        </div>
    )
})

export default RefTest;
