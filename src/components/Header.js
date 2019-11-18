import React from 'react';
import styled from 'styled-components';

class Header extends React.Component {

	handleRandomColors = () => {
		this.props.onSetRandomColors();
	}

	render() {

		const Header = styled.header`
			display: flex;
			justify-content: space-between;
			align-items: center;
		`

		const MainTitle = styled.h1`
			margin: 0;
			padding: 0;
			a {
				display: inline-block;
				font-weight: 900;
				font-size: 24px;
				line-height: 96px;
				letter-spacing: 1px;
				text-decoration: none;
				background: -webkit-linear-gradient(45deg, ${props => props.startColor || '#333333'}, ${props => props.endColor || '#333333'} 90%);
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
		`

		const RandomButton = styled.button`
			font-size: 12px;
			font-weight: 900;
			color: #333333;
			border: 0;
			background: none;
			cursor: pointer;
		`

		return (
			<Header>
				<MainTitle startColor={this.props.startColor} endColor={this.props.endColor}>
					<a href="https://colour.ninja">Colour.Ninja</a>
				</MainTitle>
				<RandomButton onClick={this.handleRandomColors}>Random</RandomButton>
			</Header>
		)
	}
}

export default Header;