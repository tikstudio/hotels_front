import React, {Component} from 'react';
import Slider from "react-slick";
import data from '../data/praducts'


class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slider: false
        }
    }

    paging = (i) => {
        return (
            <img src={`/images/home/${data[i].src}`} className="carousel_button" alt=''/>
        );
    };



    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 2000,
            variableWidth: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            cssEase: "linear",
        };
        return (

                <Slider speed={500} {...settings} className='carousel' customPaging={this.paging}>
                    {data.map((val, i) => (
                        <div className='slider carousel_1' key={val.id}>
                            <img src={`/images/home/${val.src}`} alt=''/>
                        </div>
                    ))}
                </Slider>
        );
    }
}

export default Carousel;