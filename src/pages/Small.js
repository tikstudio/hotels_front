import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import DayPickerInput from "react-day-picker/DayPickerInput";
import DayPicker from "react-day-picker/DayPickerInput";
import Carousel from "../helpers/Carousel";
import Wrapper from "../components/Wrapper";


class Small extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {start, end} = this.props;

        return (
            <Wrapper>
                <div className="single_white">
                    <div className="single_background">
                        <div className="single_gradient_5">
                            <div className="single_border_box">
                                <div className="single_height_335"></div>
                                {/*<div id="nd_booking_single_cpt_1_header_image_tab"*/}
                                {/*     className="nd_booking_width_66_percentage nd_booking_width_100_percentage_responsive nd_booking_padding_15 nd_booking_box_sizing_border_box nd_booking_float_left">*/}
                                {/*    <div className="nd_booking_section nd_booking_height_10"></div>*/}
                                {/*    <div className="nd_booking_section nd_booking_position_relative">*/}
                                {/*    <ul className="nd_booking_list_style_none nd_booking_padding_0 nd_booking_margin_0 nd_booking_text_align_center_responsive">*/}
                                {/*        <li className="nd_booking_display_inline_block nd_booking_margin_right_40 nd_booking_width_100_percentage_all_iphone nd_booking_margin_0_all_iphone">*/}
                                {/*            <a className="nd_options_color_white nd_booking_font_size_12 nd_booking_letter_spacing_2 nd_booking_text_transform_uppercase nd_booking_padding_bottom_5 nd_booking_border_bottom_2_solid_white"*/}
                                {/*               href="#nd_booking_single_cpt_1_description">Description</a></li>*/}
                                {/*        <li className="nd_booking_display_inline_block nd_booking_margin_right_40 nd_booking_width_100_percentage_all_iphone nd_booking_margin_0_all_iphone">*/}
                                {/*            <a className="nd_options_color_white nd_booking_font_size_12 nd_booking_letter_spacing_2 nd_booking_text_transform_uppercase"*/}
                                {/*               href="#nd_booking_single_cpt_1_services"><span*/}
                                {/*                className="nd_booking_single_cpt1_service_label_tab">room </span>Services</a>*/}
                                {/*        </li>*/}
                                {/*        <li className="nd_booking_display_inline_block nd_booking_margin_right_40 nd_booking_width_100_percentage_all_iphone nd_booking_margin_0_all_iphone">*/}
                                {/*            <a className="nd_options_color_white nd_booking_font_size_12 nd_booking_letter_spacing_2 nd_booking_text_transform_uppercase"*/}
                                {/*               href="#nd_booking_single_cpt_1_packages">Around The Hotel</a></li>*/}
                                {/*        <li className="nd_booking_display_inline_block nd_booking_margin_right_40 nd_booking_width_100_percentage_all_iphone nd_booking_margin_0_all_iphone">*/}
                                {/*            <a className="nd_options_color_white nd_booking_font_size_12 nd_booking_letter_spacing_2 nd_booking_text_transform_uppercase"*/}
                                {/*               href="#nd_booking_single_cpt_1_similar_rooms">Similar rooms</a></li>*/}
                                {/*    </ul>*/}
                                {/*    </div>*/}
                                {/*    <div className="nd_booking_section nd_booking_height_20"></div>*/}
                                {/*</div>*/}
                                {/*<div id="nd_booking_single_cpt_1_header_image_price"*/}
                                {/*     className="nd_booking_width_33_percentage nd_booking_width_100_percentage_responsive nd_booking_float_left nd_booking_padding_15 nd_booking_box_sizing_border_box">*/}
                                {/*    <div*/}
                                {/*        className="nd_booking_section nd_booking_box_sizing_border_box nd_booking_text_align_center">*/}
                                {/*        <div className="nd_booking_display_inline_block ">*/}
                                {/*            <div className="nd_booking_float_left nd_booking_text_align_right">*/}
                                {/*                <h2 className="nd_options_color_white nd_booking_font_size_50">30</h2>*/}
                                {/*            </div>*/}
                                {/*            <div*/}
                                {/*                className="nd_booking_float_right nd_booking_text_align_left nd_booking_margin_left_10">*/}
                                {/*                <h5 className="nd_options_second_font nd_options_color_white nd_booking_margin_top_7 nd_booking_font_size_14">$</h5>*/}
                                {/*                <div className="nd_booking_section nd_booking_height_5"></div>*/}
                                {/*                <h3 className="nd_options_second_font nd_options_color_white nd_booking_font_size_14 nd_booking_letter_spacing_2">/*/}
                                {/*                    PER NIGHT</h3>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                    <div className="single_margin_auto">
                        <div className="single_height_20"></div>
                        <div className="single_float_left">
                            <div className="single_section">
                                <div className="single__padding">
                                    <h2 className="single_font_size_40">Small Room</h2>
                                    <div className="single__height_10"></div>
                                    <div className="single_booking_section">
                                        <p className="single__spacing_2"><span
                                            className="single_transform_uppercase">Hotel Rome</span>
                                        </p><img alt=""
                                                 className="single__img_15"
                                                 src="/images/home/icon-star-full-grey.svg"/><img
                                        alt=""
                                        className="single__img_15"
                                        src="/images/home/icon-star-full-grey.svg"/><img
                                        alt=""
                                        className="single__img_15"
                                        src="/images/home/icon-star-full-grey.svg"/>
                                    </div>
                                </div>
                                <div className="single__width_60">


                                    <div className="single_slider">
                                        <Carousel/>
                                    </div>


                                    <div className="single__padding_15">
                                        <div className="single__padding__0">
                                            <div className="single_height_50"></div>
                                            <div className="single_booking_section">
                                                <div className="single_align_center">
                                                    <img alt="" className="single__img_40"
                                                         src="/images/home/icon-user-grey.svg"/>
                                                    <div className="single_height_5"></div>
                                                    <p className="single__p">1 GUESTS</p>
                                                </div>
                                                <div className="single_align_center">
                                                    <img alt="" className="single__img_40"
                                                         src="/images/home/icon-plan-grey.svg"/>
                                                    <div className="single_height_5"></div>
                                                    <p className="single__p">15 ft</p>
                                                </div>
                                                <div className="single_align_center">
                                                    <img alt="" className="single__img_40"
                                                         src="images/home/icon-bed-grey.svg"/>
                                                    <div className="single_height_5"></div>
                                                    <p className="single__p">30 $ / PER NIGHT</p>
                                                </div>
                                                <div className="single_align_center">
                                                    <img alt="" className="single__img_40"
                                                         src="images/home/icon-calendar-grey.svg"/>
                                                    <div className="single_height_5"></div>
                                                    <p className="single__p">WEEK PRICE</p>
                                                </div>
                                            </div>
                                            <div className="single_height_30"></div>
                                            <div className="single_bg_grey"></div>
                                            <div className="single_height_40"></div>
                                            <div className="single__fluid">
                                                <div className="single_wrapper">
                                                    <div>Lorem ipsum dolor sit amet, consectetur
                                                        adipiscing elit. Integer vel molestie nisl. Duis
                                                        ac mi leo. Mauris at convallis erat. Aliquam
                                                        interdum semper luctus. Aenean ex tellus,
                                                        gravida ut rutrum dignissim, malesuada vitae
                                                        nulla. Sed viverra, nisl dapibus lobortis
                                                        porttitor, risus risus dictum risus, sed rhoncus
                                                        orci urna dignissim leo. Cras id nunc nulla.
                                                        Aliquam a tortor fermentum, finibus elit ac,
                                                        dictum purus. Nulla mollis ex interdum commodo
                                                        luctus. In hac habitasse platea dictumst.
                                                        Quisque vel rutrum ipsum. Praesent at imperdiet
                                                        diam. Ut vel vulputate massa. Duis condimentum
                                                        tincidunt tristique. Donec sollicitudin
                                                        efficitur venenatis. Integer ex lectus, lobortis
                                                        nec cursus ac, suscipit ut magna.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single_height_50"></div>
                                            <div className="single_bg_grey"></div>
                                            <div className="single_float_section">
                                                <div className="single_booking_height_40"></div>
                                                <div className="single_float_section_1">
                                                    <h2 className="single__h2"><span>room</span> Services</h2>
                                                </div>
                                                <div className="single_height_20_1"></div>
                                                <div className="single_padding_10_0">
                                                    <div className="single_display_table">
                                                        <img alt=""
                                                             className="single_align_middle_img"
                                                             src="/images/home/icon141.png"/>
                                                        <p className="single_align_middle_p">Swimming Pool</p>
                                                    </div>
                                                </div>
                                                <div
                                                    className="single_padding_10_0">
                                                    <div className="single_display_table">
                                                        <img alt=""
                                                             className="single_align_middle_img"
                                                             src="/images/home/icon18.png"/>
                                                        <p className="single_align_middle_p">Television</p>
                                                    </div>
                                                </div>
                                                <div
                                                    className="single_padding_10_0">
                                                    <div className="single_display_table">
                                                        <img alt=""
                                                             className="single_align_middle_img"
                                                             src="/images/home/icon14.png"/>
                                                        <p className="single_align_middle_p">No Smoking</p>
                                                    </div>
                                                </div>
                                                <div
                                                    className="single_padding_10_0">
                                                    <div className="single_display_table">
                                                        <img alt=""
                                                             className="single_align_middle_img"
                                                             src="/images/home/icon10.png"/>
                                                        <p className="single_align_middle_p">Private Bathroom</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single__padding__0_15">
                                            <div className="single__50_height"></div>
                                            <div className="single_booking_bg_grey"></div>
                                            <div className="single__40_height"></div>
                                            <div className="single__nd_booking_section"><h2>Around The Hotel</h2></div>
                                            <div className="single__30_height"></div>
                                        </div>
                                        <div className="single__box_sizing">
                                            <div className="single__padding_010">
                                                <div className="single__position">
                                                    <img alt="" className="single_section__img"
                                                         src="images/home/blov003.jpg"/>
                                                    <div className="single_section__div">
                                                        <div className="single__bottom_20">
                                                            <Link to="">
                                                                <h4 className="single_white_h4">Lounge Bar</h4>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single__padding_010">
                                                <div className="single__position">
                                                    <img alt="" className="single_section__img"
                                                         src="/images/home/blov001.jpg"/>
                                                    <div className="single_section__div">
                                                        <div className="single__bottom_20">
                                                            <Link to="">
                                                                <h4 className="single_white_h4">Restaurants</h4>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single__padding_010">
                                                <div className="single__position">
                                                    <img alt="" className="single_section__img"
                                                         src="/images/home/blov002.jpg"/>
                                                    <div className="single_section__div">
                                                        <div className="single__bottom_20">
                                                            <Link to="">
                                                                <h4 className="single_white_h4">Wellness</h4>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single__width_33">
                                    <form className="single__form_100">
                                        <div className="single__form_width">
                                            <div className="single__form_padding">
                                                <div className='single__111_height'>
                                                    <div className="single__text_align">
                                                        {start &&
                                                        <p>CHECK-IN</p>}
                                                        {!start && <p>CHECK-IN</p>}
                                                        <DayPickerInput onDayChange={this.handleDayChange}
                                                                        value={start}
                                                                        onChange={this.handleChange}/>
                                                    </div>
                                                </div>
                                                <div className='single__111_height'>
                                                    <div className="single__text_align">
                                                        {end &&
                                                        <p>CHECK-OUT</p>}
                                                        {!end && <p>CHECK-OUT</p>}
                                                        <DayPicker onDayChange={this.handleDayChange1}
                                                                   value={end}
                                                                   onChange={this.handleChange}/>
                                                    </div>
                                                </div>
                                                <div className="single__width_50">
                                                    <div className="single__width_100">
                                                        <div className="single__align_center">
                                                            <h6 className="single__color_f">GUESTS</h6>
                                                            <div className="single__color_15"></div>
                                                            <div className="single_inline_flex ">
                                                                <div className="single_align_right">
                                                                    <h2 className="single_yellow_important">1</h2>
                                                                </div>
                                                                <div className="single_float_right">
                                                                    <div className="single_height_7"></div>
                                                                    <div className="single_height_7_section">
                                                                        <img
                                                                            className="single__transform"
                                                                            alt=""
                                                                            src="/images/home/icon-down-arrow-white.svg"/>
                                                                    </div>
                                                                    <div className="single_height_11"></div>
                                                                    <div className="single_height_10_section">
                                                                        <img
                                                                            className="single__transform_no"
                                                                            alt=""
                                                                            src="/images/home/icon-down-arrow-white.svg"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single__padding__top0">
                                                    <div className="single__background_color">
                                                        <div className="single__guests">
                                                            <h6 className="single__color_fff">NIGHTS</h6>
                                                            <div className="single_booking_height_15"></div>
                                                            <div className="single_display_inline_flex">
                                                                <div className="single_text_align_right">
                                                                    <h2 className="single__color_yellow">1</h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/*<input type="hidden" name="nd_booking_archive_form_id"*/}
                                                    {/*       id="nd_booking_archive_form_id" value="96-96"/>*/}
                                                    {/*<input type="hidden" name="nd_booking_form_booking_arrive_advs"*/}
                                                    {/*       value="1"/>*/}
                                                    {/*<input type="hidden" name="nd_booking_form_booking_arrive_sr"*/}
                                                    {/*       value="1"/>*/}
                                                </div>
                                                <div className="single__border_box">
                                                    <div className="single_booking_float"></div>
                                                    <input
                                                        className="single__input_s"
                                                        type="submit" value="BOOK NOW"/>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="single_book_height_40"></div>
                                    <div className="single_book_section">
                                        <div className="single_width_100_percentage">
                                            <div className="single__padding_0020">
                                                <div className="single_position_relative">
                                                    <img alt=""
                                                         className="single_booking_top_0"
                                                         src="/images/home/room01-150x150.jpg"/>
                                                    <div className="single__padding_left_s">
                                                        <div className="single__padding_left_5"></div>
                                                        <h4 className="single__title">Small Room</h4>
                                                        <div className="single__title_height_10"></div>
                                                        <p className="single__p_7e">From 30 $ per night</p>
                                                        <div className="single__title_height_10"></div>
                                                        <div className="single__div_7e">
                                                            <Link to="/" className="single__ba">BOOK NOW</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single_width_100_percentage">
                                            <div className="single__padding_0020">
                                                <div className="single_position_relative">
                                                    <img alt="" className="single_booking_top_0"
                                                         src="/images/home/room02-150x150.jpg"/>
                                                    <div className="single__padding_left_s">
                                                        <div className="single__padding_left_5"></div>
                                                        <h4 className="single__title">Room with View</h4>
                                                        <div className="single__title_height_10"></div>
                                                        <p className="single__p_7e">From 120 $ per night</p>
                                                        <div className="single__title_height_10"></div>
                                                        <div className="single__div_7e">
                                                            <Link to="/" className="single__ba">BOOK NOW</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single_width_100_percentage">
                                            <div className="single__padding_0020">
                                                <div className="single_position_relative">
                                                    <img alt=""
                                                         className="single_booking_top_0"
                                                         src="/images/home/room03-150x150.jpg"/>
                                                    <div className="single__padding_left_s">
                                                        <div className="single__padding_left_5"></div>
                                                        <h4 className="single__title">Apartment</h4>
                                                        <div className="single__title_height_10"></div>
                                                        <p className="single__p_7e">From 80 $ per night</p>
                                                        <div className="single__title_height_10"></div>
                                                        <div className="single__div_7e">
                                                            <Link to="/" className="single__ba">BOOK NOW</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single_book_height_20"></div>
                                    <div className="single_sidebar_widget"><h3
                                        className="single_book_height_h3">Search</h3>
                                        <form className="single_book_form">
                                            <div>
                                                <label className="single_book_form_text">Search for :</label>
                                                <input type="text" placeholder="Keyword ..." name="s"
                                                       className="single_book_form_text_input"/>
                                                <input type="submit" className="single_book_form_submit_input"
                                                       value="Search"/>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="single_sidebar_widget1"><h3
                                        className="single_book_title_h3">Categories</h3>
                                        <ul className="single_book_title__ul">
                                            <li className="single_book_title__ul_li"><Link
                                                to="/">Around
                                                Us</Link>
                                            </li>
                                            <li className="single_book_title__ul_li"><Link
                                                to="/">Luxury
                                                Hotel</Link>
                                            </li>
                                            <li className="single_book_title__ul_li"><Link
                                                to="/">News</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="single_sidebar_widget2"><h3 className="single_book_title_h32">Our
                                        Branches</h3>
                                        <div className="">
                                            <div className="single__div_relative">
                                                <div className="single__div_absolute">
                                                    <div className="single__div_absolute_style">
                                                        <div className="single__div__style_relative">
                                                            <img alt=""
                                                                 className="single__div__style_img"
                                                                 src="/images/home/square-02-150x150.jpg"/>
                                                            <div className="single__div__style_div">
                                                                <div className="single__div__height_5"></div>
                                                                <div className="single__div__height_7"></div>
                                                                <Link to="/">
                                                                    <h4>Hotel Rome</h4></Link>
                                                                <div className="single__div__height_10"></div>
                                                                <p className="single__div_p">Rome ( Italy )</p>
                                                                <div className="single__div__height_10"></div>
                                                                <div className="single__nicdark_body">
                                                                    <img alt=""
                                                                         className="single__nicdark_body_select"
                                                                         src="/images/home/icon-star-full-grey.svg"/><img
                                                                    alt=""
                                                                    className="single__nicdark_body_select"
                                                                    src="/images/home/icon-star-full-grey.svg"/><img
                                                                    alt=""
                                                                    className="single__nicdark_body_select"
                                                                    src="/images/home/icon-star-full-grey.svg"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single__div_absolute">
                                                    <div className="single__div_absolute_style">
                                                        <div className="single__div__style_relative">
                                                            <img alt=""
                                                                 className="single__div__style_img"
                                                                 src="/images/home/square-07-150x150.jpg"/>
                                                            <div className="single__div__style_div">
                                                                <div className="single__div__height_5"></div>
                                                                <div className="single__div__height_7"></div>
                                                                <Link to="/">
                                                                    <h4>Hotel Berlin</h4></Link>
                                                                <div className="single__div__height_10"></div>
                                                                <p className="single__div_p">Berlin ( Germany )</p>
                                                                <div className="single__div__height_10"></div>
                                                                <div className="single__nicdark_body">
                                                                    <img alt=""
                                                                         className="single__nicdark_body_select"
                                                                         src="/images/home/icon-star-full-grey.svg"/><img
                                                                    alt=""
                                                                    className="single__nicdark_body_select"
                                                                    src="/images/home/icon-star-full-grey.svg"/><img
                                                                    alt=""
                                                                    className="single__nicdark_body_select"
                                                                    src="/images/home/icon-star-full-grey.svg"/><img
                                                                    alt=""
                                                                    className="single__nicdark_body_select"
                                                                    src="/images/home/icon-star-full-grey.svg"/>
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
                    </div>
                    <div className="single__nd_booking_height_50"></div>
                    <div className="single_top_2_solid_grey">
                        <div className="single__nd_booking_height_51"></div>
                        <div className="single_sizing_border_box">
                            <div className="single__padding_155">
                                <h2 className="single__break_word">Similar <span
                                    className="single__span">rooms</span></h2>
                                <div className="single__break_w">
                                    <span className="single__break_span"></span>
                                </div>
                            </div>
                            <div className="single__left_33">
                                <div className="single__left_33_box">
                                    <div className="single__left_solid_grey">
                                        <div className="single__position_relative">
                                            <img alt="" className="single__position_img"
                                                 src="/images/home/room03.jpg"/>
                                            <div className="single__position_fill">
                                                <div className="single__position_bottom_20">
                                                    <p className="single__color_white">Hotel
                                                        London</p><img alt=""
                                                                       className="single__img_10"
                                                                       src="/images/home/icon-star-full-white.svg"/><img
                                                    alt="" className="single__img_10"
                                                    src="/images/home/icon-star-full-white.svg"/><img
                                                    alt="" className="single__img_10"
                                                    src="/images/home/icon-star-full-white.svg"/><img
                                                    alt="" className="single__img_10"
                                                    src="/images/home/icon-star-full-white.svg"/><img
                                                    alt="" className="single__img_10"
                                                    src="/images/home/icon-star-full-white.svg"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single__position_absolute">
                                            <Link to="/">
                                                <h2>Apartment</h2></Link>
                                            <div className="single__end_height_10"></div>
                                            <div className="single__end__section">
                                                <div className="single__end_display_table">
                                                    <img alt=""
                                                         className="single__end_img"
                                                         src="/images/home/icon-user-grey.svg"/>
                                                    <p className="single__end_p">5
                                                        GUESTS</p>
                                                    <img alt=""
                                                         className="single__end_img1"
                                                         src="/images/home/icon-plan-grey.svg"/>
                                                    <p className="single__end_p">70
                                                        ft</p>
                                                </div>
                                            </div>
                                            <div className="single_end_height_20"></div>
                                            <p className="single_end_p">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Integer vel molestie
                                                nisl.
                                                Duis ac mi leo.</p>
                                            <div className="single_end_height_20"></div>
                                            <Link
                                                to="/"
                                                className="single_end_padding_15_30_important">BOOK <span
                                                className="single_end_padding_15_30_span">NOW</span> FROM 80 $</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single__left_33">
                                <div className="single__left_33_box">
                                    <div className="single__left_solid_grey">
                                        <div className="single__position_relative">
                                            <img alt="" className="single__position_img"
                                                 src="/images/home/room04.jpg"/>
                                            <div className="single__position_fill">
                                                <div className="single__position_bottom_20">
                                                    <p className="single__color_white">Hotel
                                                        New York</p><img alt=""
                                                                         className="single__img_10"
                                                                         src="/images/home/icon-star-full-white.svg"/><img
                                                    alt="" className="single__img_10"
                                                    src="/images/home/icon-star-full-white.svg"/><img
                                                    alt="" className="single__img_10"
                                                    src="/images/home/icon-star-full-white.svg"/><img
                                                    alt="" className="single__img_10"
                                                    src="/images/home/icon-star-full-white.svg"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single__position_absolute">
                                            <Link to="/">
                                                <h2>Luxury Room</h2></Link>
                                            <div className="single__end_height_10"></div>
                                            <div className="single__end__section">
                                                <div className="single__end_display_table">
                                                    <img alt=""
                                                         className="single__end_img"
                                                         src="/images/home/icon-user-grey.svg"/>
                                                    <p className="single__end_p">2 GUESTS</p>
                                                    <img alt=""
                                                         className="single__end_img1"
                                                         src="/images/home/icon-plan-grey.svg"/>
                                                    <p className="single__end_p">50 ft</p>
                                                </div>
                                            </div>
                                            <div className="single_end_height_20"></div>
                                            <p className="single_end_p">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Integer vel molestie
                                                nisl.
                                                Duis ac mi leo.</p>
                                            <div className="single_end_height_20"></div>
                                            <Link
                                                to="/"
                                                className="single_end_padding_15_30_important">BOOK <span
                                                className="single_end_padding_15_30_span">NOW</span> FROM 100 $</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single__left_33">
                                <div className="single__left_33_box">
                                    <div className="single__left_solid_grey">
                                        <div className="single__position_relative">
                                            <img alt="" className="single__position_img"
                                                 src="/images/home/room02.jpg"/>
                                            <div className="single__position_fill">
                                                <div className="single__position_bottom_20">
                                                    <p className="single__color_white">Hotel
                                                        London</p><img alt=""
                                                                       className="single__img_10"
                                                                       src="/images/home/icon-star-full-white.svg"/><img
                                                    alt="" className="single__img_10"
                                                    src="/images/home/icon-star-full-white.svg"/><img
                                                    alt="" className="single__img_10"
                                                    src="/images/home/icon-star-full-white.svg"/><img
                                                    alt="" className="single__img_10"
                                                    src="/images/home/icon-star-full-white.svg"/><img
                                                    alt="" className="single__img_10"
                                                    src="/images/home/icon-star-full-white.svg"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single__position_absolute">
                                            <Link to="/">
                                                <h2>Room with View</h2></Link>
                                            <div className="single__end_height_10"></div>
                                            <div className="single__end__section">
                                                <div className="single__end_display_table">
                                                    <img alt=""
                                                         className="single__end_img"
                                                         src="/images/home/icon-user-grey.svg"/>
                                                    <p className="single__end_p">4 GUESTS</p>
                                                    <img alt=""
                                                         className="single__end_img1"
                                                         src="/images/home/icon-plan-grey.svg"/>
                                                    <p className="single__end_p">40 ft</p>
                                                </div>
                                            </div>
                                            <div className="single_end_height_20"></div>
                                            <p className="single_end_p">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit. Integer vel molestie
                                                nisl.
                                                Duis ac mi leo.</p>
                                            <div className="single_end_height_20"></div>
                                            <Link
                                                to="/"
                                                className="single_end_padding_15_30_important">BOOK <span
                                                className="single_end_padding_15_30_span">NOW</span> FROM 120 $</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single__nd_booking_height_51"></div>
                    </div>
                </div>
            </Wrapper>
        );
    }
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Small);

export default Container;