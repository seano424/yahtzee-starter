import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const { score } = this.props
    const disabled = score !== undefined
    return (
      <tr className={`RuleRow ${disabled ? 'RuleRow-disabled' : 'RuleRow-active'}`} onClick={disabled ? null : this.props.doScore}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score}</td>
      </tr>
    )
  }
}

export default RuleRow;