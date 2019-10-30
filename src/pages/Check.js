import React, {Component} from 'react';
import {connect} from "react-redux";
import CheckFrom from "../helpers/CheckFrom"
import Findfilter from "../helpers/Findfilter"
import Pagination from "../components/Pagination";
import {parse} from "query-string";
import {searchServices} from "../store/action/services";
import Wrapper from "../components/Wrapper";
// import praducts from '../data/praducts';

// import _ from "lodash";


class Check extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: null,
        };
    }

    componentDidMount() {
        const page = parseInt(this.props.match.params.page) || 1;
        const data = parse(window.location.search);
        data.page = page;
        data.price = 0;
        this.props.searchServices(data)
    }


    // componentWillReceiveProps(nextProps) {
    //     const page = this.props.match.params.page;
    //     if (page !== nextProps.match.params.page) {
    //         document.body.scrollTo(0, 0)
    //     }
    // }

    modalClick = () => {
        let {modal} = this.state;
        this.setState({modal: !modal})
    };
    modalClick1 = () => {
        let {modal1} = this.state;
        this.setState({modal1: !modal1})
    };


    render() {
        // const page = parseInt(this.props.match.params.page) || 1;
        // console.log(praducts);

        // const productsArr = _.chunk(praducts, 1)[page - 1];

        // const limit = 1;
        // const start = limit * page - limit;
        // const end = start + limit;
        // const productsArr = praducts.slice(start, end);
        return (
            <Wrapper>
                <div className="about__x">
                    <div className="about__1">
                        <div className="about__clearfix">
                            <div className="about_container">
                                <div className="about_height_110"></div>
                                <div className="about_border_box">
                                    <h1 className="about__h1">ROOMS</h1>
                                </div>
                                <div className="about_height_110"></div>
                            </div>
                        </div>
                    </div>
                    <div className="about__2">
                        <div className="acount__float">
                            <div className="about__fluid">
                                <div className="">
                                    <div className="">
                                        <div className="about_wrapper">
                                            <div className="about_section">
                                                <div className="about__width_33">


                                                    <CheckFrom/>


                                                </div>
                                                <div className="about__width_60">
                                                    <div className="about__position_relative">
                                                        <div className="about__f_section">

                                                            {/*{productsArr ? productsArr.map((praducts) => (*/}
                                                            {/*    <Findfilter key={praducts.id} />*/}
                                                            {/*)) : null}*/}
                                                            <Findfilter/>
                                                            <Pagination/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>

        );
    }
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    searchServices
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Check);

export default Container;