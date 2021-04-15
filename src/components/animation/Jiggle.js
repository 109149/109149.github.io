import React from "react";
import styled, { keyframes } from "styled-components";
import { useEffectSkipFirstRender } from "../../hooks";

const Jiggle = ({ children, jiggle = false, delay }) => {
  const spanRef = React.useRef();
  const timerRef = React.useRef();
  const [jiggling, setJiggling] = React.useState(jiggle);

  function animate() {
    if (!jiggling) {
      setJiggling(true);
    }
  }

  useEffectSkipFirstRender(() => {
    let timerID;
    if (jiggling) {
      spanRef.current.classList.add("jiggle");
      timerID = setTimeout(() => {
        spanRef.current.classList.remove("jiggle");
        setJiggling(false);
      }, 1000);
      timerRef.current = timerID;
    }
    return () => clearTimeout(timerID);
  }, [jiggling]);

  return (
    <>
      <Span ref={spanRef} onMouseEnter={animate} _delay={delay}>
        {children}
      </Span>
    </>
  );
};

const jiggle = keyframes`
  0% {
    transform: scale(1, 1);
  }
  10% {
    transform: scale(1.2, 0.8);
  }
  20% {
    transform: scale(1.4, 0.7);
  }
  50% {
    transform: scale(0.7, 1.4);
  }
  60% {
    transform: scale(1.3, 0.8);
  }
  70% {
    transform: scale(0.8, 1.3);
  }
  80% {
    transform: scale(1.2, 0.9);
  }
  90% {
    transform: scale(0.9, 1.2);
  }
  100% {
    transform: scale(1, 1);
  }
`;

const Span = styled.span`
  display: inline-block;
  text-align: center;
  height: 100%;
  font-weight: bold;
  transform: scale(1);

  &.jiggle {
    animation: 1s ${jiggle} ease ${({ _delay }) => (_delay ? _delay : 0)}ms;
    // animation-delay: ${({ _delay }) => (_delay ? _delay : 0)}ms;
  }
`;

export default Jiggle;
