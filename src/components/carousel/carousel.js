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
                    dynamicHeight={true}
                >
                    <div>
                        <img src="images/carousel/img1.jpg" />
                    </div>
                    <div>
                        <img src="images/carousel/img2.jpg" />
                    </div>
                    <div>
                        <img src="images/carousel/img3.jpg" />
                    </div>
                    <div>
                        <img src="images/carousel/img4.jpg" />
                    </div>
                    <div>
                        <img src="images/carousel/img5.jpg" />
                    </div>
                    <div>
                        <img src="images/carousel/img6.jpg" />
                    </div>
                    <div>
                        <img src="images/carousel/img7.jpg" />
                    </div>
                    <div>
                        <img src="images/carousel/img8.jpg" />
                    </div>
                    
                </Carousel>
            </div>
            
        );
    }
};
 
export default AllsortsCarousel;