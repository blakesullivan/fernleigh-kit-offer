import React from 'react';
import './card.css'

const Submit = ({ selectedOption }) => {
	return (
		<div className="pa4-l">
		  <form className="bg-light-gray mw7 center pa4 br2-ns ba b--black-10">
		    <fieldset className="cf bn ma0 pa0">
		      <legend className="pa0 f5 f4-ns mb3 black-80">Apply for selected option: {selectedOption}</legend>
		      <div className="cf">
		        <label className="clip" htmlFor="email-address">Email Address</label>
		        <input 
		        	className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-50 w-50-m w-40-l br2-ns br--left-ns" 
		        	placeholder="Your Name" 
		        	type="text" 
		        	name="full-name" 
		        	value=""
		        	id="full-name" />
		        <input 
		        	className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-50 w-50-m w-40-l" 
		        	placeholder="Your Email Address" 
		        	type="text" 
		        	name="email-address" 
		        	value=""
		        	id="email-address" />
		        <input 
		        	className="f6 f5-l button-reset FLButton fl pv3 tc bn bg-animate white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" 
		        	type="submit" 
		        	value="Submit" />
		      </div>
		    </fieldset>
		  </form>
		</div>
	);
}

export default Submit;