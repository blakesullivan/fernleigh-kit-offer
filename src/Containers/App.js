import React from 'react';
import './App.css';
import Selector from "../Components/selector";
import Sections from "../Components/sections";
import Submit from "../Components/submit";
import { data } from "../data";

class App extends React.Component {
  constructor () {
  	super();
  	this.state = {
  		selectedOption: '',
  		workData: data
  	}
  }

  onOptionChange = (option) => {
    console.log(option);
    this.setState({selectedOption: option});
  }

  render () {
    return (
      <div className="App bgimage">
      	<Selector workData={this.state.workData} onOptionChange={this.onOptionChange}/>
        <Sections workData={this.state.workData} selectedOption={this.state.selectedOption} />
        <Submit workData={this.state.workData} selectedOption={this.state.selectedOption} />
      </div>
    );
  }
}

export default App;