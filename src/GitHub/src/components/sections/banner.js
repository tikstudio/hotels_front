import React, {Component} from 'react';
import Img1 from '../../assets/images/1.jpg'
import Img2 from '../../assets/images/2.jpg'
import Img3 from '../../assets/images/3.jpg'
import Img4 from '../../assets/images/baner.jpg'
import Img5 from '../../assets/images/4.jpg'
import Img6 from '../../assets/images/8.jpg'
import Img7 from '../../assets/images/6.jpg'
import Img8 from '../../assets/images/5.jpg'



class Banner extends Component {
    render() {
        return (
            <>
            <section className='section1'>
                <div className='leftFotos'>
                    <img src={Img1} alt='/' width='310px' height='190px'/>
                    <img src={Img2} alt='/' width='310px' height='190px'/>
                    <img src={Img3} alt='/' width='310px' height='190px'/>
                </div>
                <div className='centerFoto'>
                    <img src={Img4} alt='/' width='450px' height='450px'/>
                </div>
                <div className='rightFoto'>
                    <img src={Img5} alt='/' width='310px' height='190px'/>
                    <img src={Img6} alt='/' width='310px' height='190px'/>
                    <img src={Img7} alt='/' width='310px' height='190px'/>
                </div>
            </section>
            <div className='sectionBanner'>
            <img alt='/' src={Img8} width='1000px' height='190px'/>
            </div>
            </>
        );
    }
}

export default Banner;
