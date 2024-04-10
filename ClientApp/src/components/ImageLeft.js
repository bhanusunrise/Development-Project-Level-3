import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';

class ImageLeft extends Component {
    render() {
        const { imageUrl } = this.props;
        const borderRadius = '22% 59% 49% 21% / 46% 35% 50% 17%';

        return (
            <Card>
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

export default ImageLeft;


