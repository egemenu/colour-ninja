import React from 'react';
import styled from 'styled-components';
import { SketchPicker } from 'react-color';

class PaletteControl extends React.Component {
	state = {
		displayStartColorPicker: false,
		displayEndColorPicker: false
	}

	handleStartColorChange = (color) => {
		this.props.onHandleStartColor(color.hex);
	}

	handleEndColorChange = (color) => {
		this.props.onHandleEndColor(color.hex);
	}

	toggleStartColorPicker = () => {
		this.setState({displayStartColorPicker: !this.state.displayStartColorPicker});
	}

	toggleEndColorPicker = () => {
		this.setState({displayEndColorPicker: !this.state.displayEndColorPicker});
	}

	render() {

		const Button = styled.button`
			flex: 1;
			height: 48px;
			border: none;
			background: #333333;
			color: #fff;
			font-size: 24px;
			font-weight: 900;
			cursor: pointer;
			touch-action: manipulation;
		`

		const PaletteControlHolder = styled.div`
			display: flex;
			margin-top: 16px;
			align-items: center;
			> *:not(:last-child) {
				margin-right: 8px;
			}
		`

		const ColorPickerHolder = styled.div`
			position: relative;
		`

		const ColorPicker = styled.div`
			width: 40px;
			height: 40px;
			background: ${props => props.color || '#fff'};
			border: 4px solid #333333;
			cursor: pointer;
			.skecth-picker {
				bottom: 100%;
				left: 0;
			}
		`

		const PickerPopover = styled.div`
			position: absolute;
			z-index: 2;
			bottom: 100%;
			${props => props.align || 'left'}: 0;
		`

		const PickerCover = styled.div`
			position: fixed;
			top: 0px;
			left: 0px;
			bottom: 0px;
			right: 0px;
		`

		return (
			<PaletteControlHolder>
				<ColorPickerHolder>
					<ColorPicker color={this.props.startColor} onClick={this.toggleStartColorPicker} />
					{ this.state.displayStartColorPicker ?
						<PickerPopover align="left">
							<PickerCover onClick={ this.toggleStartColorPicker }/>
							<SketchPicker color={ this.props.startColor } onChange={ this.handleStartColorChange } />
						</PickerPopover> : null
					}
				</ColorPickerHolder>

				<Button onClick={this.props.onAddChild}>+</Button>
				<Button onClick={this.props.onRemoveChild}>-</Button>
				
				<ColorPickerHolder>
					<ColorPicker color={this.props.endColor} onClick={this.toggleEndColorPicker} />
					{ this.state.displayEndColorPicker ?
						<PickerPopover align="right">
							<PickerCover onClick={ this.toggleEndColorPicker } />
							<SketchPicker color={this.props.endColor} onChange={ this.handleEndColorChange } />
						</PickerPopover> : null
					}
				</ColorPickerHolder>
			</PaletteControlHolder>
		)
	}
}

export default PaletteControl;