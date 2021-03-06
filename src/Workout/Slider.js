import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div
        className='slider-content'
        style={{
          margin: "0 auto",
          width: "80vw",
          height: "25vh"
        }}>
        <Slider {...settings}>
          <div>
            <div
              className='slider_box'
              style={{
                textAlign: "center",

                marginRight: "5px",
                marginLeft: "5px"
              }}>
              <h1 style={{ margin: "0", padding: "25px" }}>Chest</h1>
              <p>
                you probably don't want to spend a Monday afternoon—or several
                Mondays—trying them all. You just want to know the best
                exercises for building a muscular chest, no questions asked.
              </p>
              <a
                className='btn-left-radius'
                href='https://www.youtube.com/watch?v=BkS1-El_WlE'
                target='_blank'
                rel='noopener noreferrer'>
                HOME TRAINING
              </a>
              <a
                href='https://www.youtube.com/watch?v=mQMA88jJrFc'
                className='btn-right-radius'
                target='_blank'
                rel='noopener noreferrer'>
                GYM TRAINING
              </a>
            </div>
          </div>
          <div>
            <div
              className='slider_box'
              style={{
                textAlign: "center",

                marginRight: "5px",
                marginLeft: "5px"
              }}>
              <h1 style={{ margin: "0", padding: "25px" }}>Shoulder</h1>
              <p>
                you probably don't want to spend a Monday afternoon—or several
                Mondays—trying them all. You just want to know the best
                exercises for building a muscular chest, no questions asked.
              </p>
              <a
                className='btn-left-radius'
                href='https://www.youtube.com/watch?v=GXk1GgvhyF8'
                target='_blank'
                rel='noopener noreferrer'>
                HOME TRAINING
              </a>
              <a
                className='btn-right-radius'
                href='https://www.youtube.com/watch?v=6EqI5V8AUp8'
                target='_blank'
                rel='noopener noreferrer'>
                GYM TRAINING
              </a>
            </div>
          </div>
          <div>
            <div
              className='slider_box'
              style={{
                textAlign: "center",

                marginRight: "5px",
                marginLeft: "5px"
              }}>
              <h1 style={{ margin: "0", padding: "25px" }}>Arms</h1>
              <p>
                you probably don't want to spend a Monday afternoon—or several
                Mondays—trying them all. You just want to know the best
                exercises for building a muscular chest, no questions asked.
              </p>
              <a
                className='btn-left-radius'
                href='https://www.youtube.com/watch?v=z8_fSUc7MTw'
                target='_blank'
                rel='noopener noreferrer'>
                HOME TRAINING
              </a>
              <a
                className='btn-right-radius'
                href='https://www.youtube.com/watch?v=S5kOK3bxfro'
                target='_blank'
                rel='noopener noreferrer'>
                GYM TRAINING
              </a>
            </div>
          </div>
          <div>
            <div
              className='slider_box'
              style={{
                textAlign: "center",

                marginRight: "5px",
                marginLeft: "5px"
              }}>
              <h1 style={{ margin: "0", padding: "25px" }}>Back</h1>
              <p>
                you probably don't want to spend a Monday afternoon—or several
                Mondays—trying them all. You just want to know the best
                exercises for building a muscular chest, no questions asked.
              </p>
              <a
                className='btn-left-radius'
                href='https://www.youtube.com/watch?v=KFY3p3eMPkk'
                target='_blank'
                rel='noopener noreferrer'>
                HOME TRAINING
              </a>
              <a
                className='btn-right-radius'
                href='https://www.youtube.com/watch?v=lA7dbOmxs5I'
                target='_blank'
                rel='noopener noreferrer'>
                GYM TRAINING
              </a>
            </div>
          </div>
          <div>
            <div
              className='slider_box'
              style={{
                textAlign: "center",

                marginRight: "5px",
                marginLeft: "5px"
              }}>
              <h1 style={{ margin: "0", padding: "25px" }}>Abs</h1>
              <p>
                you probably don't want to spend a Monday afternoon—or several
                Mondays—trying them all. You just want to know the best
                exercises for building a muscular chest, no questions asked.
              </p>
              <a
                className='btn-left-radius'
                href='https://www.youtube.com/watch?v=3p8EBPVZ2Iw'
                target='_blank'
                rel='noopener noreferrer'>
                HOME TRAINING
              </a>
              <a
                className='btn-right-radius'
                href='https://www.youtube.com/watch?v=iQIrxBmgXmE'
                target='_blank'
                rel='noopener noreferrer'>
                GYM TRAINING
              </a>
            </div>
          </div>
          <div>
            <div
              className='slider_box'
              style={{
                textAlign: "center",

                marginRight: "5px",
                marginLeft: "5px"
              }}>
              <h1 style={{ margin: "0", padding: "25px" }}>Legs</h1>
              <p>
                you probably don't want to spend a Monday afternoon—or several
                Mondays—trying them all. You just want to know the best
                exercises for building a muscular chest, no questions asked.
              </p>
              <a
                className='btn-left-radius'
                href='https://www.youtube.com/watch?v=HIdxYCrqLQg'
                target='_blank'
                rel='noopener noreferrer'>
                HOME TRAINING
              </a>
              <a
                className='btn-right-radius'
                href='https://www.youtube.com/watch?v=RjexvOAsVtI'
                target='_blank'
                rel='noopener noreferrer'>
                GYM TRAINING
              </a>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
