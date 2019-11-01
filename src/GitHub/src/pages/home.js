import React, {Component} from 'react';
import Header from "../components/Header/Header";
import Section from "../components/sections/section";
import Footer from "../components/Footer/footer";

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Section/>
                <Footer/>
            </div>
        );
    }
}

export default Home;
