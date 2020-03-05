import React from 'react';
import Card from "./card";

class Selector extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			workData: props.workData,
			onOptionChange: props.onOptionChange
		}
	};



	render () {
		const { workData, onOptionChange } = this.state;
		return (
			<div className="dt dt--fixed">
				{
					workData.map((users, i) => {
					return (
							<div className="dtc tc pv4 pa1" key={i}>
								<Card
									title={workData[i].title}
									description={workData[i].description}
									options={workData[i].options}
									onOptionChange={onOptionChange}
								/>
							</div>
						);
					})
				}
			</div>
		);
	}
}

export default Selector;

/*
		<div class="dtc tc pv4 pa1">
				<Card title="Title 1" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
	      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
	      vero eos et accusam et justo duo dolores et ea rebum." options=""/>
			</div>
			<div class="dtc tc pv4 pa1">
				<Card title="Title 2" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
	      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
	      vero eos et accusam et justo duo dolores et ea rebum." options=""/>
			</div>
			<div class="dtc tc pv4 pa1">
				<Card title="Title 3" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
	      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
	      vero eos et accusam et justo duo dolores et ea rebum." options=""/>
			</div>
*/