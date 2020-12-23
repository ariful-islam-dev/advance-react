import React, { PureComponent } from 'react'

export class PurComponent extends PureComponent {
    render() {
        return (
            <div>
                <h3>I am {this.props.name}</h3>
            </div>
        )
    }
}

export default PurComponent
