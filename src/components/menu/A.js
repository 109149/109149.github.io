import styled, { css } from "styled-components";
import { themes } from "../../constants";
import Input from "./Input";

const A = styled.div`
  --fg: ${themes.vars.bgColorPrimary};
  background: var(--fg);
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 60px;

  color: white;
  text-align: center;

  position: absolute;

  ${({ _animationEnabled }) =>
    _animationEnabled &&
    css`
      transition: all ease-out;
      transition-duration: calc(10ms + (100ms * ${({ _i }) => (_i ? _i : 1)}));
      transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
    `};

  ${Input}:checked ~ & {
    &:nth-child(${({ _i }) => (_i ? _i : 1) + 2}) {
      transform: translate3d(${({ _x }) => _x}px, ${({ _y }) => _y}px, 0);
    }
  }
`;

export default A;
