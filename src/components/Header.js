import React from 'react';
import styled from 'styled-components';
import { RefreshCcw } from '@styled-icons/feather/RefreshCcw';



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

		const RefreshIcon = styled(RefreshCcw)`
			color: #333;
			cursor: pointer;
			transition: transform .3s ease;
			&:hover {
				color: #555;
				transform: rotate(360deg);
			}
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

		return (
			<Header>
				<MainTitle startColor={this.props.startColor} endColor={this.props.endColor}>
					<a href="https://colour.ninja">Colour.Ninja</a>
				</MainTitle>
				<RefreshIcon size="30" title="Atom Link" onClick={this.handleRandomColors} />
			</Header>
		)
	}
}

export default Header;