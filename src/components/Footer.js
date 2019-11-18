import React from 'react';
import styled from 'styled-components'

class Footer extends React.Component {
	render() {

		const Footer = styled.footer`
			margin-top: 32px;
			color: #333333;
			font-size: 12px;
			font-weight: 400;
			line-height: 24px;
			text-align: right;
			a {
				color: #333333;
				text-decoration: underline
			}
		`

		return (
			<Footer>Colour.Ninja is an <a href="https://github.com/egemenu/colour-ninja" target="_blank" rel="noopener noreferrer">open sourced</a> plain color transition tool.</Footer>
		)
	}
}

export default Footer;