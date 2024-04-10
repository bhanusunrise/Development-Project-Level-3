import React, { Component } from 'react';
import { Carasoul } from './Carasoul';
import ImageLeft from './ImageLeft';
import image1 from './images/Home/carasoul/image1.webp';
import image2 from './images/Home/carasoul/image2.webp';
import image3 from './images/Home/carasoul/image3.webp';
import image4 from './images/Home/carasoul/image4.webp';
import SummeryDetails from './SummeryDetails';

const detailTopics = ["The Best Solution", "The Most Cost Effective Solution", "The Best Customer Care Service", "The Latest Technology"];
const detailContents = ["Our solution is best fit for your business because we created this system only for Hardware Businesses. Unlike other ERP solutions, you won't get any confusion with unnecessary features.",
    "You have the chance to try our system for 30 days free. After that you can subscribe us for one year or two years. All the packages are pocket friendly.",
    "Need support? Then contact us. We will respond you within one day. Also, we are available in Gmail, WhatsApp, Instagram and LinkedIN",
    "We used latest technology to enhance the performance and the security of the application. Also, we will give new updates for the system and you don't need to worry about it."];

export class Home extends Component {
    static displayName = Home.name;

    render() {
        const borderRadius = ['22% 59% 25% 36% / 49% 35% 50% 51%', '52% 50% 75% 26% / 65% 44% 57% 37%', '71% 29% 75% 39% / 65% 62% 36% 37% ', '36% 64% 61% 39% / 45% 47% 54% 55% '];

        return (
            <div>
                <Carasoul />
                <div className="container">
                    <div className="row details">
                        <div className="col-md-4">
                            <ImageLeft imageUrl={image1} borderRadius={borderRadius[0]} />
                        </div>
                        <div className="col-md-8 d-flex align-items-center">
                            <SummeryDetails title={detailTopics[0]} description={detailContents[0]} />
                        </div>
                    </div>
                    <div className="row details">
                        <div className="col-md-8 d-flex align-items-center">
                            <SummeryDetails title={detailTopics[1]} description={detailContents[1]} />
                        </div>
                        <div className="col-md-4">
                            <ImageLeft imageUrl={image2} borderRadius={borderRadius[1]} />
                        </div>
                    </div>
                    <div className="row details">
                        <div className="col-md-4">
                            <ImageLeft imageUrl={image3} borderRadius={borderRadius[2]} />
                        </div>
                        <div className="col-md-8 d-flex align-items-center">
                            <SummeryDetails title={detailTopics[2]} description={detailContents[2]} />
                        </div>                 
                    </div>
                    <div className="row details">
                        <div className="col-md-8 d-flex align-items-center">
                            <SummeryDetails title={detailTopics[3]} description={detailContents[3]} />
                        </div>
                        <div className="col-md-4">
                            <ImageLeft imageUrl={image4} borderRadius={borderRadius[3]} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



