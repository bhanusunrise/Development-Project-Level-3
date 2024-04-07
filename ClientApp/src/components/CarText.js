import React, { Component } from 'react';

export class CarText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            texts: [
                { header: '#1 in Sri Lanka', paragraph: 'We are the best ERP solution for your hardware system' },
                { header: 'Text 2 Header', paragraph: 'Text 2 Paragraph' },
                { header: 'Text 3 Header', paragraph: 'Text 3 Paragraph' },
                { header: 'Text 4 Header', paragraph: 'Text 4 Paragraph' },
                { header: 'Text 5 Header', paragraph: 'Text 5 Paragraph' }
            ],
            currentIndex: 0
        };
    }

    componentDidMount() {
        this.changeText();
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    changeText = () => {
        const { texts, currentIndex } = this.state;
        const nextIndex = (currentIndex + 1) % texts.length;
        this.setState({ currentIndex: nextIndex });

        // Change text every 5000 milliseconds
        this.timeout = setTimeout(this.changeText, 5000);
    };

    render() {
        const { texts, currentIndex } = this.state;
        const { header, paragraph } = texts[currentIndex];

        return (
            <div style={{ position: 'absolute', top: 300, left: 0, right: 0, backgroundColor: 'rgba(100, 100, 100, 0.3)', padding: '150px', zIndex: 100 }}>
                <h1 style={{ textAlign: 'center', color : 'white' }}>{header}</h1>
                <h4 style={{ textAlign: 'center', color : 'white' }}>{paragraph}</h4>
            </div>
        );
    }
}
