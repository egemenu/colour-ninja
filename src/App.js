import React from 'react';
import { createGlobalStyle } from 'styled-components';
import randomHexColor from './scripts/random-hex-color';
import randomInteger from './scripts/random-integer';

import Palette from './components/Palette';
import PaletteControl from './components/PaletteControl';
import Color from './components/Color';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      counter: 8,
      startColor: '#ba68c8',
      endColor: '#37D67A',
      displayStartColorPicker: false,
      displayEndColorPicker: false,
    }
  }
  
  addChild = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  removeChild = () => {
    if (this.state.counter > 3 ) {
      this.setState({ counter: this.state.counter - 1 })
    }
  }

  handleStartColor = (color) => {
    this.setState({startColor: color})
  }

  handleEndColor = (color) => {
    this.setState({endColor: color})
  }

  setRandomColors = () => {
    this.setState({startColor: randomHexColor()});
    this.setState({endColor: randomHexColor()});
    this.setState({counter: randomInteger(6, 12)});
  }

  componentDidMount() {
    this.setRandomColors();
  }

  render() {

    return (
      <div>
        <GlobalStyle />
        <Header 
          startColor={this.state.startColor} 
          endColor={this.state.endColor} 
          onSetRandomColors={this.setRandomColors}
        />
        <main>
          <div>
            <Palette 
              colorCounter={this.state.counter} 
              startColor={this.state.startColor} 
              endColor={this.state.endColor}
            >
              {(index) => <Color key={index} />}
            </Palette>
          </div>
          <PaletteControl 
            onAddChild={this.addChild}
            onRemoveChild={this.removeChild}
            onHandleStartColor={this.handleStartColor}
            onHandleEndColor={this.handleEndColor}
            startColor={this.state.startColor}
            endColor={this.state.endColor}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0 40px;

    @media only screen and (max-width: 768px) {
      padding: 0 20px;
    }
  }
`
  
export default App;
  