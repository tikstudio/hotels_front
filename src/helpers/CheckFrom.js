import React, {Component} from 'react';
import {connect} from "react-redux";
import {parse, stringify as qs} from "query-string";
import DayPickerInput from "react-day-picker/DayPickerInput";
import DayPicker from "react-day-picker/DayPickerInput";
import Services from "../helpers/Services"




class CheckFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        const {start, end, guests} = parse(window.location.search);
        this.setState({
            start: new Date(start),
            end: new Date(end),
            guests
        });
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        const {start, end, guests} = this.state;
        const query = qs({start, end, guests});
        this.props.history.push(`/find?${query}`)

    };

    add=()=>{
        this.setState({guests: parseInt(this.state.guests)+1})
    };

    remove = () => {
        const guests = this.state.guests === 1 ? 1 : parseInt(this.state.guests) - 1;
        this.setState({guests})
    };


    render() {
        const {start, end, guests} = this.state;

        return (
            <>
                <form onChange={this.handleSubmit} className="about__form">
                    <div className="about__form_box">
                        <div className="about__form_1">
                            <div className='about__form_f'>
                                <div className="about__form__sizing">
                                    {start &&
                                    <p>CHECK-IN</p>}
                                    {!start && <p>CHECK-IN</p>}
                                    <DayPickerInput onDayChange={this.handleDayChange}
                                                    value={start}
                                                    onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className='about__form_f'>
                                <div className="about__form__sizing">
                                    {end &&
                                    <p>CHECK-OUT</p>}
                                    {!end && <p>CHECK-OUT</p>}
                                    <DayPicker onDayChange={this.handleDayChange1}
                                               value={end}
                                               onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="about__from_padding">
                                <div className="about__from_height">
                                    <div className="about__form_align">
                                        <h6 className="about__form_white">GUESTS</h6>
                                        <div className="about__form_height_15"></div>
                                        <div className="about__form_inline_flex ">
                                            <div className="about__form__align_right">
                                                <h2 className="about__form_h2">{guests || 1}</h2>
                                            </div>
                                            <div className="about__form_center">
                                                <div className="about__form_height_7"></div>
                                                <div className="about__form_section" onClick={this.add}>
                                                    <img className="about__form_smoll__t" alt=""
                                                         src="/images/home/icon-down-arrow-white.svg"/>
                                                </div>
                                                <div className="about__form_height_10"></div>
                                                <div className="about__form_section1" onClick={this.remove}>
                                                    <img className="about__form__t1" alt=""
                                                         src="/images/home/icon-down-arrow-white.svg"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="about__form_m">
                                <div className="about__form_border_box">
                                    <div className="about__form_left">
                                        <h6 className="about__form_h6">NIGHTS</h6>
                                        <div className="about__form_height_15"></div>
                                        <div className="about__form_flex">
                                            <div className="about__form_flex_right">
                                                <h2 className="about__form_yellow_important">1</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <Services/>
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
)(CheckFrom);

export default Container;