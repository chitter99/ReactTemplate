import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  render () {
    return (
      <div>
		  <h1>Hello World</h1>
		  <p>This is an example, created with the React Template.</p>
	  </div>
    );
  }
}

render(<App/>, document.getElementById('app'));