import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "five"],
  };

  render() {
    const {
      numberWords,
      locked,
      handleClick,
      val,
      idx,
      isRolling,
    } = this.props;
    
    const numberDie = numberWords[val - 1];
    const dieLocked = locked && "Die-locked";
    const rollingDie = isRolling && "Die-rolling";

    return (
      <i
        className={`Die fas fa-dice-${numberDie} ${dieLocked} ${rollingDie}`}
        onClick={() => handleClick(idx)}
      ></i>
    );
  }
}

// Die-locked

export default Die;
