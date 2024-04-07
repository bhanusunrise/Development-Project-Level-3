import React, { Component } from 'react';

export class CarText extends Component {


    render() {
        return (
            <div style={{ position: 'absolute', top: 100, left: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '10px' }}>
                <h2 style={{ textAlign: 'center' }}>Above Carousel Component</h2>
                <p style={{ textAlign: 'center' }}>This component is positioned above the carousel.</p>
            </div>
        );
    }
}