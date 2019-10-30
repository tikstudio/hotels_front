import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {stringify as qs} from "query-string";
import DayPickerInput from "react-day-picker/DayPickerInput";
import DayPicker from "react-day-picker/DayPickerInput";
import moment from "moment";

class MainFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkIn: undefined,
            checkOut: undefined,
            guests: 1
        };
    }

    handleChange = (ev) => {
        this.setState({[ev.target.name]: ev.target.value})
    };

    handleDayChange = (day) => {
        this.setState({checkIn: day});
        // const d1 = new Date(day);
        // d1.setDate(d1.getDate() + 1);
        // this.setState({checkOut: d1});
    };

    handleDayChange1 = (day1) => {
        this.setState({checkOut: day1});
    };

    handleSubmit = (ev) => {
        ev.preventDefault();
        const {checkIn, checkOut, guests} = this.state;
        const query = qs({
            start: moment(checkIn).format('YYYY-MM-DD'),
            end: moment(checkOut).format('YYYY-MM-DD'),
            guests,
        });
        this.props.history.push(`/find?${query}`)
    };

    add = () => {
        this.setState({guests: this.state.guests + 1})
    };

    remove = () => {
        const guests = this.state.guests === 1 ? 1 : this.state.guests - 1;
        this.setState({guests})
    };

    render() {
        const {checkIn, checkOut, guests} = this.state;

        return (
            <>
                <form onSubmit={this.handleSubmit} action="/check" method="get" className="main__sev_from">
                    <div
                        className="main__sev_from_white">
                        <div
                            className='main__sev_from_float_left'>
                            <div
                                className="main__sev_from_align_center">
                                {checkIn &&
                                <p>CHECK-IN</p>}
                                {!checkIn && <p>CHECK-IN</p>}
                                <DayPickerInput onDayChange={this.handleDayChange}
                                                selectedDays={checkIn}
                                                onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div
                            className='main__sev_from_float_left'>
                            <div
                                className="main__sev_from_align_center">
                                {checkOut &&
                                <p>CHECK-OUT</p>}
                                {!checkOut && <p>CHECK-OUT</p>}
                                <DayPicker onDayChange={this.handleDayChange1}
                                           selectedDays={checkOut}
                                           onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div
                            className="main__from_border_box">
                            <div
                                className="main__from__center">
                                <div
                                    className="">
                                    <h6 className="main__from__iphone">
                                        GUESTS</h6>
                                    <div
                                        className="main__from__height_15"></div>
                                    <div
                                        className="main__from__flex ">
                                        <div
                                            className="main__from__right">
                                            <h2 className="main__from__weight_bold">
                                                {guests}</h2>
                                        </div>
                                        <div
                                            className="main__from__left_10">
                                            <div
                                                className="main__from__height_7"></div>
                                            <div className="main__from_ing_section"
                                                 onClick={this.add}>
                                                <img
                                                    className="main__from__cursor_pointer"
                                                    alt=""
                                                    width="12"
                                                    src="/images/home/icon-down-arrow-grey.svg"/>
                                            </div>
                                            <div
                                                className="main__from__height_11"></div>
                                            <div className="main__from_ing_section_1"
                                                 onClick={this.remove}>
                                                <img
                                                    className="main__from__cursor_pointer_1"
                                                    alt="" width="12"
                                                    src="/images/home/icon-down-arrow-grey.svg"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main__display_none">
                        <button className="main__percentage">CHECK AVAILABILITY</button>
                    </div>
                </form>
            </>
        );
    }
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = {

};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainFrom);

export default withRouter(Container);