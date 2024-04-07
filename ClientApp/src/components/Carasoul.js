import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

// Importing images
import image1 from './images/Home/carasoul/image1.jpg';

export class Carasoul extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            items: [
                {
                    src: image1,
                    altText: 'Slide 1',
                    caption: 'Slide 1 Caption'
                },
                {
                    src: image1,
                    altText: 'Slide 2',
                    caption: 'Slide 2 Caption'
                },
                {
                    src: image1,
                    altText: 'Slide 3',
                    caption: 'Slide 3 Caption'
                }
            ]
        };
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
                    <img src={item.src} alt={item.altText} style={{ width: '100%', height : 'auto' }} />
                    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }
}

