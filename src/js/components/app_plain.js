var React = require('react');
var AppActions = require('../actions/AppActions');

var APP = React.createClass({

	handleClick: function(event){
		console.log(event);
		AppActions.addItem('this is the item');

	},
    
    render: function(){
        return <h1 onClick={this.handleClick} >My Flux App 5</h1>;
    }
});

module.exports = APP;