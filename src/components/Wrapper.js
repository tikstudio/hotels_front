import React, {Component} from 'react';
import Footer from "./Footer";
import Header from "./Header";

class Wrapper extends Component {
    render() {
        return (
            <>
                <Header/>
                {this.props.children}
                <Footer/>
            </>
        );
    }
}

export default Wrapper;