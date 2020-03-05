import React from 'react';

const Card = ({ title, description, options, onOptionChange }) => {
	return (
		<div className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4 shadow-hover">
		  <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">{title}</h1>
		  <div className="pa1 bt b--black-10 h5">
		    <p className="f6 f5-ns lh-copy measure">
		    	{description}		    	
		    </p>
		    <ul className="tl">
		    {
		    	options.map((opts, i) => {
		    		return (<li key={i}>{opts.title}</li>);
		    	})
		    }
		    </ul>
		  </div>
		  <div className="pa1">
		  	<button className="b pa1 pointer" onClick={() => onOptionChange(title) }>Select Plan</button>
		  </div>
		</div>
	);
}

export default Card;