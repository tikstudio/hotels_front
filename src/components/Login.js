import React, {Component} from 'react';
import {connect} from "react-redux";

class Login extends Component {
    render() {
        return (
            <form className="sign-in-htm">
                <div className="group">
                    <label htmlFor="email" className="label">Email</label>
                    <input
                        name="email" id="email" type="text" className="input"/>
                </div>
                <div className="group">
                    <label htmlFor="pass__first" className="label">Password</label>
                    <input
                        name="password" id="pass__first" type="password" className="input" data-type="password"/>
                </div>
                <div className="group">
                    <input id="check" type="checkbox" className="check" checked/>
                    <label htmlFor="check">
                        <span className="icon"></span>
                        Keep me Signed in
                    </label>
                </div>
                <div className="group">
                    <input type="submit" className="button" value="Sign In"/>
                </div>
                <div className="hr"></div>
                <div className="foot-lnk">
                    <a href="#forgot">Forgot Password?</a>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login);

export default Container