import React, {Component} from 'react';
import {connect} from "react-redux";
import {registrationRequest} from "../store/action/account"


class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            f_name: '',
            l_nmae: ''
        }
    }

    handleChange = (ev) => {
        this.setState({[ev.target.name]: ev.target.value})
    };

    validate = () => {
        let {emailError, passwordError, f_nameError, l_nameError} = this.state;
        const {email, password, f_name, l_name} = this.state;
        if (!this.state.email) {
            emailError = "invalid email"
        }
        if (!email.includes('@')) {
            emailError = "invalid email"
        }

        if (password.length < 5) {
            passwordError = "invalid password"
        }
        if (!f_name) {
            f_nameError = "invalid f_name"
        }
        if (!l_name) {
            l_nameError = "invalid l_name"
        }
        if (emailError || passwordError || f_nameError || l_nameError) {
            this.setState({emailError, passwordError, f_nameError, l_nameError});
            return false;
        }
        return true
    };


    handleSubmit = (ev) => {
        ev.preventDefault();
        this.validate();
        this.props.registrationRequest(this.state)
    };


    render() {
        const {email, password, f_name, l_name} = this.state;


        return (
            <form method='POST' onSubmit={this.handleSubmit} className="sign-up-htm">
                <div className="group">
                    <label htmlFor="email" className="label">Email</label>
                    <input
                        value={email}
                        onChange={this.handleChange}
                        name="email" id="email1" type="emil" className="input"/>
                    <div className="valid">{this.state.emailError}</div>
                </div>
                <div className="group">
                    <label htmlFor="pass__first" className="label">Password</label>
                    <input
                        value={password}
                        onChange={this.handleChange}
                        name="password" id="pass__first1" type="password" className="input" data-type="password"/>
                    <div className="valid">{this.state.passwordError}</div>
                </div>
                <div className="group">
                    <label htmlFor="pass__third" className="label">f_name</label>
                    <input
                        value={f_name}
                        onChange={this.handleChange}
                        id="pass__third2" name="f_name" type="text" className="input"/>
                    <div className="valid">{this.state.f_nameError}</div>
                </div>
                <div className="group">
                    <label htmlFor="pass__third" className="label">l_name</label>
                    <input
                        value={l_name}
                        onChange={this.handleChange}
                        id="pass__third3" name="l_name" type="text" className="input"/>
                    <div className="valid">{this.state.l_nameError}</div>
                </div>
                <div className="group">
                    <input type="submit" className="button" value="Sign Up"/>
                </div>
                <div className="hr"></div>
                <div className="foot-lnk">
                    <label htmlFor="tab-1">Already Member?</label>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    registrationRequest
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Registration);

export default Container