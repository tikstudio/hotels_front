import React, {Component} from 'react';
import Banner from "./banner";
import Dress from "./dress";

class Section extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <Dress/>
            </div>
        );
    }
}

export default Section;
