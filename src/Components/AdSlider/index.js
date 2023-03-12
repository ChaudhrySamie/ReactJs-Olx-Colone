import React from 'react';
import { Carousel } from 'antd';


const contentStyle = {
    height: '200px',
    color: '#fff',
    textAlign: 'center',
    background: '#364d79',
    width: "100%",
    marginTop: "30px"
};
const AdSlider = () => (
    <div className="container">
        <Carousel autoplay>
            <div className='slider'>
                <img style={contentStyle} src="https://firebasestorage.googleapis.com/v0/b/olx-react-e935c.appspot.com/o/images%2Fslider-banner.webp?alt=media&token=490903d4-8a6e-43ed-8cf9-4e85246eda42" />
            </div>
            <div className='slider'>
                <img style={contentStyle} src="https://firebasestorage.googleapis.com/v0/b/olx-react-e935c.appspot.com/o/images%2F316218151-800x600.webp?alt=media&token=19b0dfbd-642e-4998-9ae1-fcdbe08ee7fd" />
            </div>
            <div className='slider'>
                <img style={contentStyle} src="https://firebasestorage.googleapis.com/v0/b/olx-react-e935c.appspot.com/o/images%2F316217943-800x600.webp?alt=media&token=8374b6e0-0c05-4868-97c5-a0022c369b60" />
            </div>

        </Carousel>
    </div>
);

export default AdSlider