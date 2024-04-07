import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

// Importing images
import image1 from './images/Home/carasoul/image1.webp';
import image2 from './images/Home/carasoul/image2.webp';
import image3 from './images/Home/carasoul/image3.webp';
import image4 from './images/Home/carasoul/image4.webp';
import image5 from './images/Home/carasoul/image5.webp';

export class Carasoul extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            items: [
                {
                    src: image1,
                    altText: 'Slide 1'
                },
                {
                    src: image2,
                    altText: 'Slide 2'
                },
                {
                    src: image3,
                    altText: 'Slide 3'
                },
                {
                    src: image4,
                    altText: 'Slide 4'
                },
                {
                    src: image5,
                    altText: 'Slide 5'
                }
            ]
        };
    }

    componentDidMount() {
        this.interval = setInterval(this.next, 5000); // Set interval for auto sliding every 5000 ms (5 seconds)
    }

    componentWillUnmount() {
        clearInterval(this.interval); // Clear interval on component unmount to avoid memory leaks
    }

    next = () => {
        const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous = () => {
        const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex = (newIndex) => {
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex, items } = this.state;

        const slides = items.map((item, index) => {
            return (
                <CarouselItem
                    key={index}
                    onExiting={() => this.setState({ animating: true })}
                    onExited={() => this.setState({ animating: false })}
                >
                    <div className="position-relative">
                        <img src={item.src} alt={item.altText} style={{ width: '100%', height: 'auto', transition: 'opacity 0.5s ease !important' }} />
                        <div className="gradient-overlay top"></div>
                        <div className="gradient-overlay bottom"></div>
                        <div className="gradient-overlay left"></div>
                    </div>
                </CarouselItem>
            );
        });

        return (
            <Carousel fade
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                ride="carousel" // Added for fade animation
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}

