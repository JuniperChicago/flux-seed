
var AppDispatcher   = require('../dispatchers/AppDispatcher');
var AppConstants    = require('../constants/AppConstants');
var EventEmitter    = require('events').EventEmitter;

var assign          = require('object-assign');



var CHANGE_EVENT    = "change";

var _catalog = [
	{id: 1, title: 'widget #1', cost: 1}, 
	{id: 2, title: 'widget #2', cost: 2}, 
	{id: 3, title: 'widget #3', cost: 3}
];

var _cartItems = [];

/**
	Store Functions

*/


function _removeItem(index){
	_cartItems[index].inCart = false;
	_cartItems.splice(index, 1);
};

function _increaseItem(index){
	_cartItems[index].qty++;
};

function _decreaseItem(index){
	if (_cartItems[index].qty > 1) {
		_cartItems[index].qty--;
	} else {
		_removeItem[index];
	}
};

function _addItem(item){
	if (!item.inCart) {
		item['qty'] = 1;
		item['inCart'] = true;
		_cartItems.push(item);
	} else {
		_cartItems.forEach(function(cartItem, i){
			if(cartItem.id === item.id){
				_increaseItem(i);
			}
		});
	}
};


/**

*/

var AppStore = assign({}, EventEmitter.prototype, {
	
	emitChange: function(){
		console.log(_cartItems);
		this.emit(CHANGE_EVENT)
	},
	
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback)
	},

	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT, callback)
	},

	getCart: function(){
		return _cartItems
	},
	
	getCatalog: function(){
		return _catalog
	}

});
	/**
		Registers callbacks with dispatcher


	*/
AppDispatcher.register(function(action){

	switch(action.actionType){
		
		//I should not need the payload.action... only action...
		case AppConstants.ADD_ITEM:
		_addItem(action.item);
		AppStore.emitChange();
		break;

		case AppConstants.REMOVE_ITEM:
		_removeItem(action.index);
		AppStore.emitChange();
		break;

		case AppConstants.INCREASE_ITEM:
		_increaseItem(action.index);
		AppStore.emitChange();
		break;

		case AppConstants.DECREASE_ITEM:
		_decreaseItem(action.index);
		AppStore.emitChange();
		break;

		// default:
		// // no op
	}
});


module.exports = AppStore;










