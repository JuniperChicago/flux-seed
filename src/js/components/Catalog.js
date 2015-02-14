var React = require('react');
var AppStore = require('../stores/AppStore');
var AddToCart = require('../components/AddToCart');



function getCatalog(){
	return {items: AppStore.getCatalog()}
}


var Catalog = React.createClass({
	
	getInitialState: function(){
		return getCatalog();
	},

	render: function(){
		var items = this.state.items.map(function(item){
			return 	<tr>
						<td>{item.title}</td>
						<td>${item.cost}</td>
						<td><AddToCart item={item}/></td>
					</tr>;
		})
		return 	<table className="table table-hover">
					<thead>
						<tr>
							<th>title</th>
							<th>cost</th>
							<th>action</th>
						</tr>
					</thead>
					<tbody>
						{items}
					</tbody>
				</table>;
	}
});

module.exports = Catalog;
