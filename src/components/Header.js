import React, {Component} from 'react';
import {Link} from "react-router-dom";
import data from "../data/header"
import Menu from "./Menu";


class Header extends Component {


    render() {
        return (
            <div className="wraper">
                <div className="header">
                    <div className="header__component">
                        <div className="header__component_1">
                            <div
                                className="header__block">
                                <div className="header__block__map">
                                    {data.map((val, i) => (
                                        <div key={val.id}
                                             className="header__block__map1">
                                            <div
                                                className="header__block__map_1">
                                                <Link to=""><img
                                                    alt=""
                                                    className="header__block__map_a"
                                                    src={`/images/home/${val.src}`}/></Link>
                                            </div>
                                            <div
                                                className="header__block__map_2">
                                                <Link
                                                    className="header__block__map_2a"
                                                    to="">{val.description}</Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div
                                className="header_block1">
                                <div
                                    className="header_block1_1">
                                    <div
                                        className="header_block1_13">
                                        <Link to="/acount"><img
                                            alt=""
                                            className="header_img2"
                                            src="/images/home/avatar.jpg"/></Link>
                                        <div
                                            className="header__account">
                                            <p className="header__font"><Link
                                                className="header__font_a"
                                                to="/acount">My
                                                Account</Link></p>
                                            <div className="header_height_5"></div>
                                            <h6 className="header_font_6">
                                                <Link className="header_font_width"
                                                      to="/acount">LOG
                                                    IN</Link></h6>
                                        </div>
                                    </div>
                                    <div
                                        className="header__margin">
                                        <div
                                            className="header__margin_middle">
                                            <Link
                                                className="header__margin_middle_left"
                                                to="">Add
                                                Your Review</Link>
                                        </div>
                                    </div>
                                    <div
                                        className="header__16">
                                        <div className="header__15_relative">
                                            <p className="header__15_p">
                                                4</p>
                                            <img alt="" className="header__float_left"
                                                 src="/images/home//iconmessage.png"/>
                                        </div>
                                        <div className="header__15_messages">
                                            <div className="header__triangle-up"></div>
                                            <div
                                                className="header_align_left">
                                                <div
                                                    className="header__height_70">
                                                    <img alt=""
                                                         className="header_position_absolute"
                                                         src="/images/home/sq08.jpg"/>
                                                    <div
                                                        className="header__options__section">
                                                        <div
                                                            className="header__height_10"></div>
                                                        <Link to="/">
                                                            <h6>Best Hotel Plugin</h6></Link>
                                                        <div
                                                            className="header__height_10"></div>
                                                        <Link to="">
                                                            <p className="headre_p_font_size_10">CHECK
                                                                FEATURES</p></Link>
                                                    </div>
                                                </div>
                                                <div
                                                    className="header__height_70">
                                                    <img alt=""
                                                         className="header_position_absolute"
                                                         src="/images/home/sq07.jpg"/>
                                                    <div
                                                        className="header__options__section">
                                                        <div
                                                            className="header__height_10"></div>
                                                        <Link to="/"><h6>Multi Purpose</h6></Link>
                                                        <div
                                                            className="headre_p_font_size_10"></div>
                                                        <Link to=""><p className="headre_p_font_size_10">A LOT
                                                            OF DEMOS</p></Link>
                                                    </div>
                                                </div>
                                                <div
                                                    className="header__height_70">
                                                    <img alt=""
                                                         className="header_position_absolute"
                                                         src="/images/home/sq06.jpg"/>
                                                    <div
                                                        className="header__options__section">
                                                        <div
                                                            className="header__height_10"></div>
                                                        <Link to=""><h6>No Code Required</h6></Link>
                                                        <div
                                                            className="header__height_10"></div>
                                                        <Link to="/"><p className="headre_p_font_size_10">VERY
                                                            EASY TO USE</p></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="header__17">
                                        <div className="header__17_1">
                                            <Link className="header__link__17" to="">My Bookings</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Menu/>
            </div>
        );
    }
}

export default Header;