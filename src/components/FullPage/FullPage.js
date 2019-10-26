import React, {Component} from 'react';
import './FullPage.css'

class FullPage extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className={`full-page ${this.props.className || ''}`}>
                {children}
            </div>
        )
    }
}

export default FullPage