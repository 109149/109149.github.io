import React from "react";
import SVG from "./SVG";

const Stackoverflow = ({ width, height, fill }) => {
  return (
    <>
      <SVG
        version="1.1"
        _width={width}
        _height={height}
        _fill={fill}
        viewBox="0 0 104.31989 123.808"
        id="svg70"
      >
        <g
          fill="none"
          fillRule="evenodd"
          id="g68"
          transform="translate(0,-0.192)"
        >
          <polygon
            fill="#bbbbbb"
            points="99,124 0,124 0,80 11,80 11,113 88,113 88,80 99,80 "
            id="polygon64"
          />
          <path
            fill="#f58025"
            fillRule="nonzero"
            d="m 22.987891,76.73 54.025,11.355 2.271,-10.8 -54.025,-11.36 z m 7.149,-25.869 50.046,23.308 4.662,-10.009 -50.047,-23.308 z m 13.848,-24.553 42.428,35.331 7.066,-8.485 -42.428,-35.33 z m 27.387,-26.116 -8.86,6.59 32.948,44.3 8.859999,-6.589 z M 22,102 H 77 V 91 H 22 Z"
            id="path66"
          />
        </g>
      </SVG>
    </>
  );
};

export default Stackoverflow;
