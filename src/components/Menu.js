import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Mediamenu from "./Mediamenu";

class Menu extends Component {


    render() {

        return (
            <>
                <Mediamenu/>
                <div className="menu_position_relative ">
                    <div className="menu__background">
                        <div className="menu_relative">
                            <div className="menu_all_responsive">
                                <div className="menu_height"></div>
                                <Link to="/"><img
                                    alt=""
                                    src="/images/home/logo.png"/></Link>
                                <div
                                    className="menu_right">
                                    <div className="menu_right_table">
                                        <div
                                            className="menu__right__align_middle">
                                            <div className="menu__menu_container">
                                                <ul className="ul__1">
                                                    <li>
                                                        <Link to="/"
                                                              aria-current="page">Home</Link></li>
                                                    <li>
                                                        <Link to="/">Our
                                                            Rooms</Link>
                                                        <ul className="ul__2">
                                                            <li>
                                                                <Link className="ul__hot" to="/">Hotel
                                                                    Search</Link></li>
                                                            <li>
                                                                <Link className="ul__best" to="/">Room
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
                                                        <ul className="ul__2">
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
                                                        <ul className="ul__2">
                                                            <li>
                                                                <Link className="ul__best" to="/">About
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
                                                        <Link to="/">Pages</Link>
                                                        <ul className="ul__2">
                                                            <li>
                                                                <Link to="/">All
                                                                    Rooms</Link></li>
                                                            <li>
                                                                <Link className="ul__a" to="/">Single
                                                                    Room</Link>
                                                                <ul className="ul__3">
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
                                                                <Link to="/">Services</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/">Terms
                                                                    and Conditions</Link></li>
                                                            <li>
                                                                <Link className="ul__a" to="/">Our
                                                                    Shop</Link>
                                                                <ul className="ul__3">
                                                                    <li>
                                                                        <Link to="/">Archive</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="/">Single
                                                                            Product</Link></li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <Link className="ul__a" to="/">About
                                                                    Us</Link>
                                                                <ul className="ul__3">
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
                                                                <Link className="ul__a" to="/">Contacts</Link>
                                                                <ul>
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
                                                        <ul className="ul__2">
                                                            <li>
                                                                <Link to="/">Archive</Link>
                                                            </li>
                                                            <li>
                                                                <Link className="ul__a" to="/">Single
                                                                    Post</Link>
                                                                <ul className="ul__3">
                                                                    <li>
                                                                        <Link to="/">Right
                                                                            Sidebar</Link></li>
                                                                    <li>
                                                                        <Link to="/">Full
                                                                            Width</Link></li>
                                                                    <li>
                                                                        <Link className="ul__best" to="/">Left
                                                                            Sidebar</Link></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <Link to="/">Contact</Link>
                                                        <ul className="ul__2">
                                                            <li>
                                                                <Link to="/">Contact
                                                                    1</Link></li>
                                                            <li>
                                                                <Link className="ul__new" to="/">Contact
                                                                    2</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu_btn_li">
                                                        <Link to="/">BOOK
                                                            NOW</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='menu__footer'></div>
                            </div>
                            <div
                                className="menu__media">
                                <div className='menu__height_20'></div>
                                <Link className="menu__a_f"
                                      to=""><img alt=""
                                                 className="menu__img_f"
                                                 src="/images/home/logo.png"/></Link>
                                <div className="menu__height_10"></div>
                                <div className="menu_height_21"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Menu;