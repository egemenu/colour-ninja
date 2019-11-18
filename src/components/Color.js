import React from 'react';
import styled, {keyframes} from 'styled-components';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import rgb2hex from '../scripts/rgb-to-hex';
import idealTextColor from '../scripts/ideal-text-color';

class Color extends React.Component {
  constructor(props) {
    super(props)
    this.testElemRef = React.createRef();
    this.state = {
      color: '',
      copied: false,
    }
  }

  setColor = () => {
    let computed = window.getComputedStyle(this.testElemRef.current).getPropertyValue("background-color") 
    let hex = rgb2hex(computed)
    this.setState({color: hex})
  }

  hideColor = () => {
    this.setState({color: ''})
    this.setState({copied: false});
  }

  handleCopy = () => {
    this.setState({copied: true});
    setTimeout(() => {
      this.setState({copied: false})
    }, 500)
  }

  render() {

    const fadeIn = keyframes`
      from {
        transform: scale(.5);
        opacity: 0;
      }

      to {
        transform: scale(1);
        opacity: .5;
      }
    `;

    const Color = styled.li`
      height: calc(100vh - 256px);
      flex: 1;
      cursor: pointer;
      position: relative;
      &:not(:last-of-type) {
        margin-right: 4px; 
      }

      div {
        position: absolute;
        top: 50%; 
        left: 50%;
        transform:  translateX(-50%) translateY(-50%) rotate(-90deg);
        font-size: 36px;
        line-height: 36px;
        font-weight: 900;
        color: ${props => props.color};
        opacity: .5;
      }

      small {
        position: absolute;
        bottom: 16px;
        width: 100%;
        display: block;
        visibility: ${props => props.copied ? 'hidden' : 'visible'};
        animation: ${fadeIn} .5s ease-out;
        transition: visibility .5s ease-out;
        color: ${props => props.color};
        font-size: 12px;
        font-weight: 900;
        text-align:center;
      }
    `

    return (
      <CopyToClipboard text={this.state.color} onCopy={this.handleCopy}>
        <Color copied={!this.state.copied} color={idealTextColor(this.state.color)} ref={this.testElemRef} onMouseEnter={this.setColor} onMouseLeave={this.hideColor}>
          <div>
            {this.state.color} 
          </div>
          {this.state.copied ? <small>Copied!</small> : null}
        </Color>
      </CopyToClipboard>
    )
  }
}

export default Color;