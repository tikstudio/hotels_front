import React, {Component} from 'react';
import {connect} from "react-redux";
import InputRange from "react-input-range";
import {searchServices, services} from "../store/action/services";
import {withRouter} from "react-router-dom";
import {parse} from 'query-string'

class Services extends Component {
    constructor(props) {
        const params = parse(window.location.search);
        params.services = params.services ? params.services.split(',') : [];
        super(props);
        this.state = {
            modal: false,
            modal1: false,
            value: 300,
            ...params
        };
    }


    componentDidMount() {
        this.props.services()
    }

    modalClick = () => {
        let {modal} = this.state;
        this.setState({modal: !modal})
    };

    handelService = async (ev) => {
        let {services} = this.state;
        // let {value} = this.state;
        if (ev.target.checked) {
            services.push(ev.target.value)
        } else {
            services = services.filter(s => s !== ev.target.value)
        }
        this.setState({services});
        this.props.history.push('?services=' + services.join(','))
    };


    render() {
        const {data} = this.props;
        const {modal} = this.state;

        return (
            <>
                <div className="about__service">
                    <div className="about__service_height_20"></div>
                    <div className="about__service_grey"></div>
                    <div className="about__service_position">
                        <InputRange
                            maxValue={600}
                            minValue={0}
                            value={this.state.value}
                            onChange={value => this.setState({value})}
                        />
                    </div>
                    <div className="about__service_height_5"></div>
                    <div className="about__service_grey"></div>
                </div>
                <div className="about__node_f">
                    <div className="about__node_position">
                        <h3>Services :</h3>
                        <img onClick={this.modalClick}
                             className={`${!modal ? 'active1' : 'active2'} about__node_active`}
                             alt="" width="12"
                             src="/images/home/icon-down-arrow-grey.svg"/>
                    </div>
                </div>
                {modal ? (
                    <div className="about__node_map">
                        {data.servis.map((service) => (
                            <p key={service.id}
                               className="about__node_map_p">
                                <input className="about__node_map_input"
                                       name="nd_booking_service_id_520" type="checkbox"
                                       value={service.id} onChange={this.handelService}/>
                                {service.name}
                            </p>
                        ))}
                    </div>
                ) : null}
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.services.data
});

const mapDispatchToProps = {
    searchServices,
    services
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Services);

export default withRouter(Container);