import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.scss';

class AllsortsCarousel extends Component {
    render() {
        return (
            <div className="carousel-wrapper">
                <Carousel 
                    showThumbs={false} 
                    autoPlay={true} 
                    infiniteLoop={true} 
                    interval={3500}
                    transitionTime={900}
                >
                    <div>
                        <img src="images/board.jpg" />
                    </div>
                    <div>
                        <img src="images/longboard.jpg" />
                    </div>
                    <div>
                        <img src="images/board.jpg" />
                    </div>
                </Carousel>
            </div>
            
        );
    }
};
 
export default AllsortsCarousel;