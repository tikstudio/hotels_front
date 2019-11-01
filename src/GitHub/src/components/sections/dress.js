import React, {Component} from 'react';
import Img1 from '../../assets/images/cloth/412V6B5Fo4L._SY445_QL70_.jpg';
import Img2 from '../../assets/images/cloth/72013-s1.jpg';
import Img3 from '../../assets/images/cloth/20214964.jpg';
import Img4 from '../../assets/images/cloth/1593698491-1.jpg';
import Img5 from '../../assets/images/cloth/20161020173839_11735.jpg';
import Img6 from '../../assets/images/cloth/20161128183701.1146.452.jpg';
import Img7 from '../../assets/images/cloth/15508050862952591638_thumbnail_405x552.jpg';
import Img8 from '../../assets/images/cloth/download.jpg';
import Img9 from '../../assets/images/cloth/fully-promoted-australia-flex-and-move-mechanical-shirt-square-5cd8cec260407.jpg';
import Img10 from '../../assets/images/cloth/images.jpg';
import Img11 from '../../assets/images/cloth/s-l300 (4)-500x500.jpg';
import Img12 from '../../assets/images/cloth/Slim-fit-dress-shirts-Men-100-cotton.jpg_350x350.jpg';
import {connect} from "react-redux";
import {save} from "../../store/actions";



class Dress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images:[Img1, Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9,Img10,Img11,Img12],
            Price:[2000,3000,2500,2400,2300,9000,1500,3650,8600,3000,2000,2450]
        }
    }


    ByDress = (price) => {
        this.props.save(price)
    };

    render() {
        const {images,Price} = this.state;
        return (
            <div className='container'>
                <section className='section2'>
                    {images.map((i,j) => (
                        <div className='dressBlock' key={j}>
                            <img src={i} alt='/' width='150px' height='200px'/>
                            <p className='price'>{Price[j] + ' P'}</p>
                            <span className='ByBtn' onClick={() => this.ByDress(Price[j])}>Buy Now</span>
                        </div>
                    ))}
                </section>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
    save,
};


const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dress);

export default Container;



