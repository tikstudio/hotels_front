import React, {Component} from 'react';
import {connect} from "react-redux";
import Header from "../components/Header"
import Footer from "../components/Footer";
import Login from "../components/Login"
import Registration from "../components/Registration"

class Acount extends Component {

    render() {

        return (
            <div className="account_bg_white">
                <Header/>
                <div className="acount__image">
                    <div className="acount__image_alpha_3">
                        <div className="acount__image_clearfix">
                            <div className="acount__image_height_110"></div>
                            <div className="acount__image_aligen">
                                <h1 className="acount__image_font_size_55">
                                    ACCOUNT</h1>
                            </div>
                            <div className="acount__image_height_110"></div>
                        </div>
                    </div>
                </div>


                <div className="login-wrap">
                    <div className="login-html">
                        <input id="tab-1" type="radio" name="tab" className="sign-up" checked/>
                        <label htmlFor="tab-1" className="tab">
                            Sign Up
                        </label>
                        <input id="tab-2" type="radio" name="tab" className="sign-in"/>
                        <label htmlFor="tab-2" className="tab">
                            Sign In
                        </label>
                        <div className="login-form">
                            <Login/>
                            <Registration/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Acount);

export default Container;