import React, {Component} from 'react';
import {connect} from "react-redux";
import Wrapper from "../components/Wrapper";
import {registrationRequest} from "../store/action/account";

class Acount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            f_name: ''
        }
    }

    handleChange = (ev) => {
        this.setState({[ev.target.name]: ev.target.value})
    };

    validate = () => {
        let {emailError, passwordError, nameError, f_nameError} = this.state;
        const {email, password, name, f_name} = this.state;
        if (!this.state.email) {
            emailError = "invalid email"
        }
        if (!email.includes('@')) {
            emailError = "invalid email"
        }

        if (password.length < 5) {
            passwordError = "invalid password"
        }
        if (!name) {
            nameError = "invalid name"
        }
        if (!f_name) {
            f_nameError = "invalid f_name"
        }
        if (emailError || passwordError || nameError || f_nameError) {
            this.setState({emailError, passwordError, nameError, f_nameError});
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
        const {email, password, name, f_name} = this.state;
        return (
           <Wrapper>
               <div className="account_bg_white">
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
                   <div className="registration__wrap">
                       <form method="post" onSubmit={this.handleSubmit} className="sign_up_htm">
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
                               <label htmlFor="pass__third" className="label">name</label>
                               <input
                                   value={name}
                                   onChange={this.handleChange}
                                   id="pass__third2" name="name" type="text" className="input"/>
                               <div className="valid">{this.state.nameError}</div>
                           </div>
                           <div className="group">
                               <label htmlFor="pass__third" className="label">f_name</label>
                               <input
                                   value={f_name}
                                   onChange={this.handleChange}
                                   id="pass__third3" name="f_name" type="text" className="input"/>
                               <div className="valid">{this.state.f_nameError}</div>
                           </div>
                           <div className="group">
                               <input type="submit" className="button" value="Sign Up"/>
                           </div>
                       </form>
                   </div>
               </div>
           </Wrapper>
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
)(Acount);

export default Container;