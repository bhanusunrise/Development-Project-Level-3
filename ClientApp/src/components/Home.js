import React, { Component } from 'react';
import { Carasoul } from './Carasoul';
import ImageLeft from './ImageLeft'; // Change import statement

import image1 from './images/Home/carasoul/image1.webp';


export class Home extends Component {
    static displayName = Home.name;
    render() {
        return (
            <div>
                <Carasoul />
                <ImageLeft imageUrl={image1} />

            </div>
        );
    }
}

