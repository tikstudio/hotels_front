import React, {Component} from 'react';
import Logo from '../../assets/images/logo.png'
import Korz from '../../assets/images/recycle_bin_PNG2.png'
import Profile from '../../assets/images/1024px-Circle-icons-profile.svg.png'
import HeaderPurchases from './headerPurchases'
import {Link} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuMen:'none',
            menuWomen: 'none',
            menuKids:'none',
            block:false
        }
    }

    Hover = () => {
      this.setState({menuMen:'flex'})
    };

    MouseOut = () => {
        this.setState({menuMen:'none'})
    };

    HoverW = () => {
        this.setState({menuWomen:'flex'})
    };

    MouseOutW = () => {
       this.setState({menuWomen:'none'})
    };

    HoverK = () => {
      this.setState({menuKids:'flex'})
    };

    MouseOutK = () => {
        this.setState({menuKids:'none'})
    };

    open = () => {
        let {block} = this.state;
        this.setState({block:!block})
    };

    render() {
        const {menuMen,menuWomen,menuKids,block} = this.state;
        return (
            <header className='header'>
                <img src={Logo} alt='/' width='60px' height='60px'/>
                <div className='headerComponent1'>
                    <div className='div_main' onMouseOver={this.Hover} onMouseOut={this.MouseOut}>
                        <p className='divMain_p'>Mens</p>
                    </div>
                    <div className='div_main' onMouseOver={this.HoverW} onMouseOut={this.MouseOutW}>
                        <p className='divMain_p'>Womens</p>
                    </div>
                    <div className='div_main' onMouseOver={this.HoverK} onMouseOut={this.MouseOutK}>
                        <p className='divMain_p' >Kids</p>
                    </div>
                </div>
                <div className='headerComponent2'>
                    <Link to='/registration'><img src={Profile} alt='/' width='60px' className='profileImg' style={{cursor:'pointer'}}/></Link>
                    <img src={Korz} alt='/' width='60px' height='60px' onClick={this.open}
                    style={{cursor:'pointer'}}
                    />
                </div>
                <div className='menuHoverMen' style={{display:menuMen}} onMouseOver={this.Hover}
                     onMouseOut={this.MouseOut}>
                    <p className='menuLink'>T-Shirts</p>
                    <p className='menuLink'>Casual Shirts</p>
                    <p className='menuLink'>Formal Shirts</p>
                    <p className='menuLink'>Sweatshirts</p>
                    <p className='menuLink'>Jackets</p>
                </div>
                <div className='menuHoverWomen' style={{display:menuWomen}} onMouseOver={this.HoverW}
                     onMouseOut={this.MouseOutW}>
                    <p className='menuLink'>Dress Materials</p>
                    <p className='menuLink'>Ethnic Dresses</p>
                    <p className='menuLink'>Lehenga Cholis</p>
                    <p className='menuLink'>Sweatshirts</p>
                    <p className='menuLink'>Dress Materials</p>
                </div>
                <div className='menuHoverKids' style={{display:menuKids}} onMouseOver={this.HoverK}
                     onMouseOut={this.MouseOutK}>
                    <p className='menuLink'>T-Shirts</p>
                    <p className='menuLink'>Shirts</p>
                    <p className='menuLink'>Shorts</p>
                    <p className='menuLink'>Jeans</p>
                    <p className='menuLink'>Trousers</p>
                </div>
                {block ? <HeaderPurchases/> : null}
            </header>
        );
    }
}

export default Header;
