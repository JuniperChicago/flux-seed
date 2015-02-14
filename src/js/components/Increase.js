var React = require('react');
var AppActions = require('../actions/AppActions');

var Increase = React.createClass({

	handleClick: function(event){
		console.log(event);
		AppActions.increaseItem(this.props.index);

	},
    
    render: function(){
        return <button className="button tiny" onClick={this.handleClick} >+</button>;
    }
});

module.exports = Increase;