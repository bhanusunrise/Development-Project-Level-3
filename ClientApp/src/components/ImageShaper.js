import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';

class ImageShaper extends Component {
    render() {
        const { imageUrl, borderRadius } = this.props;

        return (
            <Card className="custom-card">
                <CardImg
                    top
                    src={imageUrl}
                    alt="Custom Image"
                    style={{ borderRadius: borderRadius }}
                />
            </Card>
        );
    }
}

export default ImageShaper;


