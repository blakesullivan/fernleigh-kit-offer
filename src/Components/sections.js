import React from 'react';

const Sections = ({ workData, selectedOption }) => {
	if (selectedOption !== '')
	{
		const useData = workData.filter(opts => {
			return opts.title === selectedOption;
		})
		return (
			<div className="">
				{
					useData[0].options.map((opt,i) => {
						return (
							<div key={i} className="db center mw7 bg-white-90 br3 pa3 pa4-ns mb1 h8 ba b--black-10 mh5">
								<div className="tc">
									<img src={opt.image} alt={opt.title} className="db center w5 br2 br--top" />
									<h1 className="f4">{opt.title}</h1>
									<hr class="mw3 bb bw1 b--black-10" />
								</div>
								<div className="lh-copy measure center f5 black-70">
									{opt.description}
								</div>
							</div>
						);	
					})
					
				}			
			</div>
		);
	} else {
		console.log(selectedOption);
		return '';
	}
}

export default Sections;