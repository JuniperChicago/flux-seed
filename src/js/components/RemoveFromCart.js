var React = require('react');
var AppActions = require('../actions/AppActions');

var RemoveFromCart = React.createClass({

	handleClick: function(event){
		console.log(event);
		AppActions.removeItem(this.props.index);
	},
    
    render: function(){
        return <button  className="button tiny" onClick={this.handleClick} >x</button>;
    }
});

module.exports = RemoveFromCart;