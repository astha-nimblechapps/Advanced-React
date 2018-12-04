import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Dot = styled.div`
  background: ${props => props.theme.black};
  color: white;
  border-radius: 50%;
  padding: 0.5rem;
  line-height: 2.5rem;
  min-width: 3.5rem;
  margin-left: 1rem;
  font-weight: 100;
  font-feature-settings: "tnum";
  font-variant-numeric: tabular-nums;
  text-align: center;
`;

const AnimatedStyles = styled.span`
  position: relative;
  .count {
    display: block;
    position: relative;
    transition: all 0.4s;
    backface-visibility: hidden;
  }
  .count-enter {
    transform: scale(4) rotateX(0.5turn);
  }
  .count-enter-active {
    transform: rotateX(0);
  }
  .count-exit {
    top: 0;
    position: absolute;
    transform: rotateX(0);
  }
  .count-exit-active {
    transform: scale(4) rotateX(0.5turn);
  }
`;

const CartCount = props => (
  <AnimatedStyles>
    <TransitionGroup>
      <CSSTransition
        unmountOnExit
        className="count"
        classNames="count"
        key={props.count}
        timeout={{ enter: 400, exit: 400 }}
      >
        <Dot>{props.count}</Dot>
      </CSSTransition>
    </TransitionGroup>
  </AnimatedStyles>
);

export default CartCount;
