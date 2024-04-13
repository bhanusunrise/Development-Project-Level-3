import React, { Component } from 'react';
import ImageShaper from './ImageShaper';
import image1 from './images/Home/carasoul/image1.webp';
import image2 from './images/Home/carasoul/image2.webp';
import image3 from './images/Home/carasoul/image3.webp';
import image4 from './images/Home/carasoul/image4.webp';
import image5 from './images/Home/carasoul/image5.webp';
import SummeryDetails from './SummeryDetails';
import PriceList from './PriceList';
import ContactSection from './ContactSection';
import RegistrationContent from './RegistrationContent';
import Footer from './Footer';

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
                <div className="container-fluid" id="welcome-section">  
                <div className="container" id="intro">
                    <div className="row details">
                        <div className="col-md-4">
                            <ImageShaper imageUrl={image1} borderRadius={borderRadius[0]} />
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
                            <ImageShaper imageUrl={image2} borderRadius={borderRadius[1]} />
                        </div>
                    </div>
                    <div className="row details">
                        <div className="col-md-4">
                            <ImageShaper imageUrl={image3} borderRadius={borderRadius[2]} />
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
                            <ImageShaper imageUrl={image4} borderRadius={borderRadius[3]} />
                        </div>
                    </div>
                </div>
            </div>
                <div className="container-fluid" id="about-menu">
                    <div className="container">
                        <div className="row">
                            <div className="d-flex align-items-center text-center">
                                <div className="row">
                                    <div className="col-md-1"></div>                                              
                                    <div className="col-md-10"><SummeryDetails title="About Us" description="We, Bhanu Sunrise Solutions is the best emerging young software development company in Sri Lanka. Apart from Ampanna.com we offer Web Hosting and Web Development Services too." /></div>
                                    <div className="col-md-1"></div>
                                </div>                          
                                </div>
                        </div>
                    </div>               
                </div>
                

                <div className="container-fluid" id="pricing-menu">
                    <div className="container">
                        <div className="row">
                            <div className="d-flex align-items-center text-center">
                                    <PriceList />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid" id="contact-menu">
                    <div className="container">
                        <div className="row">
                            <div className="d-flex align-items-center text-center">
                                <ContactSection />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid" id="login-menu">
                    <div className="container">
                        <div className="row">                           
                            <div className="col-md-6">
                                    <ImageShaper imageUrl={image5} borderRadius={borderRadius[0]} />
                                </div>
                            <div className= "col-md-6 reg-bg">
                                    <RegistrationContent />
                                </div>
                            
                        </div>
                    </div>
                </div>
                <div className="container-fluid" id="footer">
                    <Footer/>
                </div>
            </div>
        );
    }
}



