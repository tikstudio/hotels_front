import React, {Component} from 'react';
import {connect} from "react-redux";
import praducts from '../data/praducts';
import _ from "lodash";
import { Link, withRouter } from "react-router-dom";

class Pagination extends Component {

    render() {
        const pages = Math.ceil(praducts.length / 2);
        const page = parseInt(this.props.match.params.page) || 1;
        // console.log(page);
        return (
            <div className="about__margin_top_20">
                <div className="about__map_pagination">
                    {_.range(1, pages + 1).map((i) => (
                        <div key={i} className="about__map_pagination_block">
                            <Link className={`${page === i ? 'active' : ''} about__map_pagination_white`}
                                // to={`${i}`}
                                  to='/'
                            >
                                {i}
                            </Link>
                        </div>
                    ))}
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
)(Pagination);

export default withRouter(Container);