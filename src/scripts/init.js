import React from 'react';
//import App from 'app';
import $ from 'jquery';


var App = React.createClass({
	render (){
		return (
			<h1>YO</h1>
		)
	}
});


React.render(
	<App />,
	$('body')[0]
);

