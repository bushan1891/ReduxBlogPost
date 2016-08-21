import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';

const Greeting = () => {
	return <div>Codeing is Awesome ! < /div>
}

   export default (
		<Route path="/" component ={App}>
      <Route path="greet" component ={Greeting} />
      <Route path="greet2" component ={Greeting} />
      <Route path="greet3" component ={Greeting} />
		</Route>
  )

//   / home
//  /greet
// /greet2
// /greet3


// nested Route childeren are passed to the parent component as this.props.children  in order to display nested routes the parent should render it in the render function by adding

// {this.props.children}
