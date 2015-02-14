var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatchers/AppDispatcher');


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