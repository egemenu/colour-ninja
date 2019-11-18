import React from 'react';
import styled from 'styled-components';
import createNthStyles from '../scripts/create-nth-styles';

class Palette extends React.Component {
  render() {

    const Palette = styled.ul`
      display: flex;
      padding: 0;
      margin: 0;
      list-style: none;
      > * {
        ${props => createNthStyles(props.startColor, props.endColor, props.count)};
      }
    `

    let colors = [];

    for (let i = 0; i < this.props.colorCounter; i++) {
      colors.push(this.props.children(i));
    }

    return (
      <Palette
        count={this.props.colorCounter}
        startColor={this.props.startColor}
        endColor={this.props.endColor}>
        {colors}
      </Palette>
    )
  }
}

export default Palette;