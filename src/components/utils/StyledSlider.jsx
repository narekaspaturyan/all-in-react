import React, { useState } from "react";
import styled, { css } from "styled-components";
import colors from "../../config/colors";

const SliderWrapper = styled.div`
  width: ${({ width }) => (width ? width : "400px")};
  &:focus {
    outline: none;
  }
`;

const trackH = "0.4em";
const thumbD = "1.5em";
const trackC = colors.light_Grey;
const filllC = colors.blue_Grey;

const track = css`
  box-sizing: border-box;
  border: none;
  height: 4px;
  background: ${trackC};
  border-radius: 8px;
`;

const trackFill = css`
  ${track};
  height: 6px;
  background-color: transparent;
  background-image: linear-gradient(${filllC}, ${filllC}),
    linear-gradient(${trackC}, ${trackC});
  background-size: var(--sx) 6px, calc(100% - var(--sx)) 4px;
  background-position: left center, right center;
  background-repeat: no-repeat;
`;

const fill = css`
  height: ${trackH};
  background: ${filllC};
  border-radius: 4px;
`;

const thumb = css`
  box-sizing: border-box;
  border: none;
  width: ${thumbD};
  height: ${thumbD};
  border-radius: 50%;
  background: #76d549;
  border: solid 6px black;
  cursor: pointer;
  box-shadow: 0px 0px 5px rgba(66, 97, 255, 0.5);
  &:focus {
    outline: none;
  }
`;

const Input = styled.input`
  &,
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  &:focus {
    outline: none;
  }

  /* &:focus::-webkit-slider-thumb {
    outline: -webkit-focus-ring-color auto 5px;
  }

  &:focus::-moz-range-thumb {
    outline: -webkit-focus-ring-color auto 5px;
  }

  &:focus::-ms-thumb {
    outline: -webkit-focus-ring-color auto 5px;
  } */

  --range: calc(var(--max) - var(--min));
  --ratio: calc((var(--val) - var(--min)) / var(--range));
  --sx: calc(0.5 * ${thumbD} + var(--ratio) * (100% - ${thumbD}));

  margin: 0;
  padding: 0;
  height: ${thumbD};
  background: transparent;
  font: 1em/1 arial, sans-serif;

  &::-webkit-slider-runnable-track {
    ${trackFill};
  }

  &::-moz-range-track {
    ${track};
  }

  &::-ms-track {
    ${track};
  }

  &::-moz-range-progress {
    ${fill};
  }

  &::-ms-fill-lower {
    ${fill};
  }

  &::-webkit-slider-thumb {
    margin-top: calc(0.5 * (${trackH} - ${thumbD}));
    ${thumb};
  }

  &::-moz-range-thumb {
    ${thumb};
  }

  &::-ms-thumb {
    margin-top: 0;
    ${thumb};
  }

  &::-ms-tooltip {
    display: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }
`;

function StyledSlider({ width, value, setValue }) {
  return (
    <SliderWrapper width={width}>
      <div className="App">
        <Input
          onInput={(e) => setValue(e.target.value)}
          type="range"
          style={{
            width: "100%",
            "--min": 1,
            "--max": 100,
            "--val": value,
          }}
        />
      </div>
    </SliderWrapper>
  );
}

export default StyledSlider;

// import React from "react";
// import styled from "styled-components";
// import ReactSlider from "react-slider";

// const SliderWrapper = styled.div`
//   width: ${({ width }) => (width ? width : "400px")};
// `;

// const Slider = styled(ReactSlider)`
//   width: 100%;
//   height: 6px;
// `;

// const StyledThumb = styled.div`
//   height: 25px;
//   width: 25px;
//   text-align: center;
//   border-radius: 50%;
//   cursor: grab;
//   margin-top: -7px;
//   /* Green */

//   background: #76d549;
//   /* Dark blue */

//   border: 6px solid #1f182b;
//   box-sizing: border-box;
//   /* 1 */

//   box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.05);
//   border-radius: 28px;
//   &:focus {
//     outline: none;
//   }
// `;

// const Thumb = (props, state) => <StyledThumb {...props}>{}</StyledThumb>;

// const StyledTrack = styled.div`
//   top: 0;
//   bottom: 0;
//   background: ${(props) =>
//     props.index === 2 ? "#F7F7F7" : props.index === 1 ? "#1F182B" : "#F7F7F7"};
//   border-radius: 999px;
// `;

// const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

// function StyledSlider({ width, value, onChange }) {
//   return (
//     <SliderWrapper width={width}>
//       <Slider
//         defaultValue={[0, 55]}
//         value={value}
//         onChange={onChange}
//         renderTrack={Track}
//         renderThumb={Thumb}
//       />
//     </SliderWrapper>
//   );
// }

// export default StyledSlider;
