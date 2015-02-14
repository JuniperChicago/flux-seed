
// REQUIRED ////////////////////////////////////////////////////////////
var AppDispatcher   = require('../dispatchers/AppDispatcher');
//constants are used because all should be unique
var AppConstants    = require('../constants/AppConstants');

var EventEmitter    = require('events').EventEmitter;
var assign          = require('object-assign');


// EVENTS //////////////////////////////////////////////////////////////
var CHANGE_EVENT    = "change";


// PRIVATE OBJECTS /////////////////////////////////////////////////////
var _catalog = [
	{id: 1, title: 'widget #1', cost: 1}, 
	{id: 2, title: 'widget #2', cost: 2}, 
	{id: 3, title: 'widget #3', cost: 3}
];

var _cartItems = [];

// PRIVATE FUNCTIONS ///////////////////////////////////////////////////
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



// STORE SINGLETON + EVENT EMITTER
var AppStore = assign({}, EventEmitter.prototype, {
	
	// EMITTERS & LISTENERS ////////////////////////////////////////////
	emitChange: function(){
		console.log(_cartItems);
		this.emit(CHANGE_EVENT)
	},
	
	//listeners
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback)
	},

	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT, callback)
	},

	// PUBLIC FUNCTIONS ////////////////////////////////////////////////
	getCart: function(){
		return _cartItems
	},
	
	getCatalog: function(){
		return _catalog
	}

});


// DISPATCHER REGISTRATION /////////////////////////////////////////////
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










