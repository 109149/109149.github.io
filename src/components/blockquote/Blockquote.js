import React from "react";
import styled from "styled-components";
import { themes } from "../../constants";

const Blockquote = ({ children, width, left, borderColor }) => {
  return (
    <>
      <Wrapper
        _width={width}
        _left={left}
        _borderColor={borderColor}
        className="blockquote-wrapper"
      >
        <Div _width={width} _left={left} _borderColor={borderColor}>
          {children}
        </Div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid
    ${({ _borderColor }) => (_borderColor ? _borderColor : "#e74848")};
  border-radius: 20px;
  padding: 7px;
  width: 100%;
  height: 100%;
  position: relative;
  max-width: 300px;
`;

const Div = styled.div`
  &:before {
    content: "";
    position: absolute;
    width: ${({ _width }) => (_width ? _width - 13 : 187)}px;
    top: -10px;
    left: ${({ _left }) => (_left ? `${_left}px` : "50%")};
    border: 6px solid ${themes.vars.bgColorPrimary};
    transform: translateX(-45%);
    z-index: 2;
  }

  &:after {
    content: "";
    position: absolute;
    border: 2px solid
      ${({ _borderColor }) => (_borderColor ? _borderColor : "#e74848")};
    border-radius: 0 50px 0 0;
    width: ${({ _width }) => (_width ? _width : 200)}px;
    height: 30px;
    top: -32px;
    left: ${({ _left }) => (_left ? `${_left}px` : "50%")};
    transform: translateX(-45%);
    border-bottom: none;
    border-left: none;
    z-index: 3;
  }
`;

export default Blockquote;
