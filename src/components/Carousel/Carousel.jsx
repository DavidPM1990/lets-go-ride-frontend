import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Carousel() {
    return (
        <MDBCarousel showIndicators fade>
            <MDBCarouselItem
                className='w-25 d-block'
                itemId={1}
                src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
                alt='imagen'
            >

            </MDBCarouselItem>

            <MDBCarouselItem
                className='w-25 d-block'
                itemId={2}
                src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
                alt='...'
            >

            </MDBCarouselItem>

            <MDBCarouselItem
                className='w-25 d-block'
                itemId={3}
                src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
                alt='...'
            >

            </MDBCarouselItem>
        </MDBCarousel>
    );
}