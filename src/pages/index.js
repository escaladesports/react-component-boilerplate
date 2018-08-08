import React, { Fragment } from 'react'
import Example from '../components/example'

export default class HomePage extends React.Component {
	render() {
		return (
			<Fragment>
				<div>Home Page</div>
				<Example />
			</Fragment>
		)
	}
}