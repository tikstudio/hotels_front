import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Mediamenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: true,
        }
    }

    mediaClick = () => {
        const {menu} = this.state;
        this.setState({menu: !menu})
    };


    render() {
        let {menu} = this.state;
        return (

            <>
                <div className={`${!menu ? 'menu__button1' : 'menu__button'}`}>
                    {!menu ? <ul className="media_menu_nav_ul">
                        <li
                            className="media_menu_nav_li">
                            <Link to="/"
                                  aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to="/">Our
                                Rooms</Link>
                            <ul className="ul1">
                                <li>
                                    <Link to="/">Hotel
                                        Search</Link></li>
                                <li>
                                    <Link to="/">Room
                                        Gallery</Link></li>
                                <li>
                                    <Link to="/">Room
                                        Video</Link></li>
                                <li>
                                    <Link to="/">Room
                                        Default</Link></li>
                                <li>
                                    <Link to="/">Single
                                        Branch</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/">Shop</Link>
                            <ul className="ul1">
                                <li>
                                    <Link
                                        to="/">Archive</Link>
                                </li>
                                <li>
                                    <Link
                                        to="/">Single
                                        Product</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/">About
                                Us</Link>
                            <ul className="ul1">
                                <li>
                                    <Link to="/">About
                                        Us
                                        1</Link></li>
                                <li>
                                    <Link
                                        to="/">About
                                        Us
                                        2</Link></li>
                                <li>
                                    <Link
                                        to="/">About
                                        Us
                                        3</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/">Pages</Link>
                            <ul className="ul1">
                                <li>
                                    <Link
                                        to="/">All
                                        Rooms</Link></li>
                                <li>
                                    <Link to="/">Single
                                        Room</Link>
                                    <ul className="ul2">
                                        <li>
                                            <Link to="/">Room
                                                Gallery</Link></li>
                                        <li>
                                            <Link to="/">Room
                                                Video</Link></li>
                                        <li>
                                            <Link to="/">Room
                                                Default</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link
                                        to="/">Services</Link>
                                </li>
                                <li>
                                    <Link to="/">Terms
                                        and Conditions</Link></li>
                                <li>
                                    <Link to="/">Our
                                        Shop</Link>
                                    <ul className="ul2">
                                        <li>
                                            <Link to="/">Archive</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Single
                                                Product</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/">About
                                        Us</Link>
                                    <ul className="ul2">
                                        <li>
                                            <Link to="/">About
                                                Us 1</Link></li>
                                        <li>
                                            <Link to="/">About
                                                Us 2</Link></li>
                                        <li>
                                            <Link to="/">About
                                                Us 3</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/">Single
                                        Branch</Link></li>
                                <li>
                                    <Link to="/">Contacts</Link>
                                    <ul className="ul2">
                                        <li>
                                            <Link to="/">Contact
                                                1</Link></li>
                                        <li>
                                            <Link to="/">Contact
                                                2</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link
                                        to="/">Coming
                                        Soon</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/">News</Link>
                            <ul className="ul1">
                                <li>
                                    <Link
                                        to="/">Archive</Link>
                                </li>
                                <li>
                                    <Link to="/">Single
                                        Post</Link>
                                    <ul className="ul2">
                                        <li>
                                            <Link to="/">Right
                                                Sidebar</Link></li>
                                        <li>
                                            <Link to="/">Full
                                                Width</Link></li>
                                        <li>
                                            <Link to="/">Left
                                                Sidebar</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/">Contact</Link>
                            <ul className="ul1">
                                <li>
                                    <Link
                                        to="/">Contact
                                        1</Link></li>
                                <li>
                                    <Link to="/">Contact
                                        2</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link
                                to="/">BOOK
                                NOW</Link>
                        </li>
                    </ul> : null}
                </div>
                <button className="button__menu" onClick={this.mediaClick}>
                    <span className={`${menu ? '' : 'span1'}`}></span>
                    <span className={`${menu ? '' : 'span2'}`}></span>
                    <span className={`${menu ? '' : 'span3'}`}></span>
                </button>
            </>
        );
    }
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Mediamenu);

export default Container;