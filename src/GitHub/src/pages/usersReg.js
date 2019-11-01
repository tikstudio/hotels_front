import React, {Component} from 'react';
import {saveUsers} from "../store/actions";
import {connect} from "react-redux";
import img1 from '../assets/images/tropical-beach-background-30.jpg';
import validator from 'validator';

class UsersReg extends Component {
    constructor(props) {
        super(props);
        this.state = {
                name:'',
                email: '',
                password:'',
                number:'',
                x:false,
                y:false,
                k:false,
        }
    }

    HandleChange = (ev) => {
        let email = ev.target.value;
        if(validator.isEmail(email)){
            this.setState({email,x:false});
        }else {
            this.setState({x:true})
        }
    };

    HandleChange2 = (ev) => {
        let name = ev.target.value;
        if(validator.isAlpha(name)){
            this.setState({name,y:false})
        }else {
            this.setState({y:true})
        }
    };

    HandleChange3 = (ev) => {
        let password = ev.target.value;
        this.setState({password})
    };

    HandleChange4 = (ev) => {
        let number = ev.target.value;
        if(validator.isNumeric(number)){
            this.setState({number,k:false})
        }else {
            this.setState({k:true})
        }
    };

    Save_U = () => {
      const {name,email,password,number} = this.state;
      if(name  && email && password && number){
          this.props.saveUsers({
              name,
              email,
              password,
              number
          });
          this.setState({name:'',email:'',password:'',number:''})
      }else {
          console.log('error')
      }


    };
    render() {
        const {x,y,k,name,email,number,password} = this.state;
        return (
            <div className='userRegBlock'>
                <img src={img1} width='100%' height='100%' alt='/' className='background_img'/>
                <form className='regForm'>
                    <input type='text' name='name' placeholder='Enter Your Name' onChange={this.HandleChange2}
                           style={y ? {border:'1px solid red'} : null} value={name}/>
                    <input type='email' name='email' placeholder='Enter Your Email' onChange={this.HandleChange}
                           style={x ? {border:'1px solid red'} : null} value={email}/>
                    <input type='password' name='password' placeholder='Enter Your Password' onChange={this.HandleChange3}
                           value={password}/>
                    <input type='number' name='phone' placeholder='Enter Your Phone' onChange={this.HandleChange4}
                           style={k ? {border:'1px solid red'} : null} value={number}/>
                    <span className='save_btn' onClick={this.Save_U}>SAVE USER</span>
                </form>
            </div>
        );
    }
}



const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    saveUsers,

};


const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UsersReg);

export default Container;

