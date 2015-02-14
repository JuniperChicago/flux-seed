var React = require('react');
var AppStore = require('../stores/AppStore');
var RemoveFromCart = require('../components/RemoveFromCart');
var Increase = require('../components/Increase');
var Decrease = require('../components/Decrease');


function cartItems(){
	return {items: AppStore.getCart()}
}


var Cart = React.createClass({
	
	getInitialState: function(){
		return cartItems();
	},
	
	componentWillMount: function(){
		
		AppStore.addChangeListener(this._onChange);
	},

	_onChange: function(){
		
		this.setState(cartItems());
	},

	render: function(){
		
		var total = 0;
		var items = this.state.items.map(function(item, i){

			var subtotal = item.cost * item.qty;
			total += subtotal;
			
			return 	<tr key={i}>
						<td><RemoveFromCart index={i} /></td>
						<td>${item.title}</td>
						<td className="td-center">{item.qty}</td>
						<td>
							<Increase index={i} />
							<Decrease index={i} />
						</td>
						<td>${subtotal}</td>
					</tr>;
		})
		return 	<table className="table table-hover">
					<thead>
						<tr>
							<th></th>
							<th>title</th>
							<th>qty</th>
							<th></th>
							<th>subtotal</th>
						</tr>
					</thead>
					<tbody>
						{items}
					</tbody>
					<tfoot>
						<tr>
							<td colSpan="4" className="text-right">Total</td>
							<td>${total}</td>
						</tr>
					</tfoot>
				</table>;
	}
});

module.exports = Cart;
