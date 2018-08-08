import React from 'react'

export default class ExampleComponent extends React.Component {
	static defaultProps = {
		name: `Component`
	}
	render() {
		return (
			<div className='ExampleComponent'>
				Example {this.props.name}.
			</div>
		)
	}
}