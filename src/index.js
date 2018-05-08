import React from 'react'

export default class extends React.Component {
	render(){
		return (
			<div className='TestComponent'>
				Test component.
				<style jsx global>{`
					.TestComponent{
						color: #f00;
					}
				`}</style>
			</div>
		)
	}
}
