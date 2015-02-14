var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatchers/AppDispatcher');

/**
	These actions are the only functions the view components,
	or React components, have access to. These actions are
	intermediate handles that are understood by the dispatcher
	and linked to registered stores.

*/




// These actions serve as handles for those registered in the dispatcjer 
// by the store

var AppActions = {

	/**
	 * @param  {string} item
	 */
	addItem: function(item) {
		console.log(item);
		AppDispatcher.dispatch({
			actionType: AppConstants.ADD_ITEM,
			item: item
		})
	},
	
	/**
	 * @param  {string} index
	 */
	removeItem: function(index) {
		AppDispatcher.dispatch({
			actionType: AppConstants.REMOVE_ITEM,
			index: index
		})
	},
	/**
	 * @param  {string} index
	 */
	decreaseItem: function(index) {
		AppDispatcher.dispatch({
			actionType: AppConstants.DECREASE_ITEM,
			index: index
		})
	},
	/**
	 * @param  {string} index
	 */
	increaseItem: function(index) {
		AppDispatcher.dispatch({
			actionType: AppConstants.INCREASE_ITEM,
			index: index
		})
	}

};

module.exports = AppActions;