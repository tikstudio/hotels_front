import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Mediamenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            media0: true,
        };
    }

    mediaClick = () => {
        let {media0}=this.state;
        // const {media} = this.props;
        this.setState({media0:!media0})
    };

    render() {
        let {media} = this.props;
        let {media0} = this.state;
        return (
            <div className={`${!media ? 'media_menu' :`${media0 ? 'media_menu_right_0' :'media_menu'}`} `}>
                    <img onClick={this.props.mediaClick}
                         alt=""
                         width="25"
                         className="media_menu_img"
                         src="/images/home/iconclosewhite1.svg"/>
                    <div className="media_menu_nav">
                        <div className="media_menu_nav_1">
                            <ul className="media_menu_nav_ul">
                                <li
                                    className="media_menu_nav_li">
                                    <Link to="/"
                                          aria-current="page">Home</Link>
                                </li>
                                <li>
                                    <Link to="/">Our
                                        Rooms</Link>
                                    <ul>
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
                                    <ul>
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
                                    <ul>
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
                                    <ul>
                                        <li>
                                            <Link
                                                to="/">All
                                                Rooms</Link></li>
                                        <li>
                                            <Link to="/">Single
                                                Room</Link>
                                            <ul>
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
                                            <ul>
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
                                            <ul>
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
                                    <ul>
                                        <li>
                                            <Link
                                                to="/">Archive</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Single
                                                Post</Link>
                                            <ul>
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
                                    <ul>
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
                            </ul>
                        </div>
                    </div>
            </div>

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