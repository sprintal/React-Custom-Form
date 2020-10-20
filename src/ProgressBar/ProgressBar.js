import React, { Component } from 'react';

export default class ProgressBar extends Component {
    render() {
        return (
            <div
                style={{
                    width: this.props.width,
                    height: this.props.height || 10,
                }}
            >
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor:
                            this.props.backgroundColor ||
                            'rgba(2, 239, 193, 0.3)',
                        borderRadius: [0, 5, 5, 0],
                    }}
                ></div>
                <div
                    style={{
                        width: this.props.percent + '%',
                        backgroundColor: 'black',
                    }}
                ></div>
            </div>
        );
    }
}
