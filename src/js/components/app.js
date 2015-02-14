var React = require('react');
var Catalog = require('../components/Catalog');
var Cart = require('../components/Cart');

var APP = React.createClass({

    render: function(){
        return (<div>
        			<h1>Lets Shop</h1>
        			<Catalog />
        			<h1>Cart</h1>
        			<Cart />
        		</div>
        )
    }
});

module.exports = APP;