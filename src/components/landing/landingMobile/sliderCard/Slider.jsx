import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderCard from "./SliderCard";

const Div = styled.div`
  width: 375px;
`;

const CardWrapper = styled.div`
  margin: 0 10px;
`;

const SliderSlick = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    initialSlide: 1.6,
    slidesToShow: 1.4,
    slidesToScroll: 1.4,
  };
  return (
    <Div>
      <Slider {...settings}>
        <CardWrapper>
          <SliderCard />
        </CardWrapper>
        <CardWrapper>
          <SliderCard />
        </CardWrapper>
        <CardWrapper>
          <SliderCard />
        </CardWrapper>
        <CardWrapper>
          <SliderCard />
        </CardWrapper>
      </Slider>
    </Div>
  );
};

export default SliderSlick;
