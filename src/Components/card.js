import React from 'react';
import './card.css';

const Card = ({ title, description, options, onOptionChange }) => {
	return (
		<div className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4 shadow-hover ">
		  <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">{title}</h1>
		  <div className="pa1 bt b--black-10 h5 bg-black-30">
		    <p className="f6 f5-ns lh-copy measure near-white">
		    	{description}		    	
		    </p>
		    <div className="l5">
			    <ul className="tl f6 f5-ns near-white">
			    {
			    	options.map((opts, i) => {
			    		return (<li key={i}>{opts.title}</li>);
			    	})
			    }
			    </ul>
		    </div>
		  </div>
		  <div className="pa1 bg-black-30">
		  	<button 
		  		className="f6 f5-l tc bn pv3 FLButton bg-animate white pointer w-100 w-25-m w-20-l br2-ns" 
		  		onClick={() => onOptionChange(title) }>
		  			Select Plan
		  		</button>
		  </div>
		</div>
	);
}

export default Card;