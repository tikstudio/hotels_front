import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import data from "../data/praducts";

class Findfilter extends Component {

  render() {
    return (
        <div className="about__f__content">
          {data.map((val, i) => (
              <div key={val.id} className="about__map_percentage">
                <div className="about__map_padding">
                  <div className="about__map_solid_grey">
                    <div className="about__map_position">
                      <img alt="" className="about__map_img"
                           src={`/images/home/${val.src}`}/>
                      <div className="about__map_div">
                        <div className="about__map_bottom_20">
                          <p className="about__map_color_white">{val.description}</p>
                          <img alt="" className="about__map_right_5"
                               src={`/images/home/${val.images[0].src}`}/><img
                            alt=""
                            className="about__map_right_5"
                            src={`/images/home/${val.images[1].src}`}/><img
                            alt=""
                            className="about__map_right_5"
                            src={`/images/home/${val.images[2].src}`}/>
                        </div>
                      </div>
                    </div>
                    <div className="about__map_float">
                      <Link className="about__map_a" to="/">
                        <h2 className="about__map_h2">{val.h2}</h2></Link>
                      <div className="about__map__height_10"></div>
                      <div className="about__map__section">
                        <div className="about__map_display_table">
                          <img alt=""
                               className="about__map_align_middle"
                               src={`/images/home/${val.imag[0].src}`}/>
                          <p className="about__map_align_p">{val.imag[0].description}</p>
                          <img alt=""
                               className="about__map_align_middle1"
                               src={`/images/home/${val.imag[1].src}`}/>
                          <p className="about__map_align_p">{val.imag[1].description}</p>
                        </div>
                      </div>
                      <div className="about__map_display_table_20"></div>
                      <p className="about__map_display_table_p">{val.short_description}</p>
                      <div className="about__map_display_table_20"></div>
                      <form className="about__map_form_2">
                        <input
                            className="about__map_form_input"
                            type="submit"
                            value="BOOK NOW FOR 30 $"/>
                      </form>
                      <div className="about__map_display_table_20"></div>
                      <div className="about__map_solid_grey"></div>
                      <div className="about__map_display_table_20"></div>
                      <Link title="Swimming Pool"
                            to=''
                            className="about__map__left_img"><img
                          alt="Swimming Pool"
                          className="about__map__img_right_15"
                          src={`/images/home/${val.link[0].src}`}/></Link>
                      <Link title="Television"
                            to=''
                            className="about__map__left_img"><img
                          alt="Television"
                          className="about__map__img_right_15"
                          src={`/images/home/${val.link[1].src}`}/></Link>
                      <Link title="No Smoking"
                            to=''
                            className="about__map__left_img"><img
                          alt="No Smoking"
                          className="about__map__img_right_15"
                          src={`/images/home/${val.link[2].src}`}/></Link>
                      <Link title="Private Bathroom"
                            to=''
                            className="about__map__left_img"><img
                          alt="Private Bathroom"
                          className="about__map__img_right_15"
                          src={`/images/home/${val.link[3].src}`}/></Link>
                      <Link to="/single" className="about__map__left_link">
                        <span className="about_map_letter_spacing_2">FULL INFO</span>
                        <img alt="" className="about__map_margin_left_5"
                             src="/images/home/icon-right-arrow-grey.svg"/>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
    );
  }
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Findfilter);

export default Container;