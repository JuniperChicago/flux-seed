var React = require('react');
var AppActions = require('../actions/AppActions');

var AddToCart = React.createClass({

	handleClick: function(event){
		console.log(event);
		AppActions.addItem(this.props.item);

	},
    
    render: function(){
        return <button className="button tiny" onClick={this.handleClick} >Add to cart</button>;
    }
});

module.exports = AddToCart;