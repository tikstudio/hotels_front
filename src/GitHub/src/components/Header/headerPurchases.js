import React, {Component} from 'react';
import {connect} from "react-redux";
import Img from '../../assets/images/img_95429.png'
import {del, finish} from "../../store/actions";


class HeaderPurchases extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dress:1
        }
    }

    Delete = (dress) => {
        this.props.del(dress)
    };

    Finish = () => {
        alert('Ваш заказ принят');
        this.props.finish()
    };

    render() {
        let {dress} = this.state;
        const {data} = this.props;
        let calc = eval(data.join('+'));
        return (
            <div className='korzina'>
                {data ? data.map((i,j) => (
                    <div className='div' key={j}>
                        <p  className='byP'>{`Dress-${dress++} ${i} P`}</p>
                        <img src={Img} width='30px' height='20px' alt='/' className='delImg'
                             onClick={() => this.Delete(i)}/>
                    </div>
                )): null}
                {calc ? <p className='calc'>{calc + ' P'}</p> : null}
                <span className='btnKorz' onClick={this.Finish}>To Order</span>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    data:state.data,
});

const mapDispatchToProps = {
        del,
        finish
};


const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HeaderPurchases);

export default Container;
