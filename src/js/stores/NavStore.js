
var AppDispatcher   = require('../dispatchers/AppDispatcher');
var AppConstants    = require('../constants/AppConstants');
var EventEmitter    = require('events').EventEmitter;

var assign          = require('object-assign');

var CHANGE_EVENT    = "change";

var _currentPage = "/";


/**

*/

var NavStore = assign({}, EventEmitter.prototype, {
	
	emitChange: function(){
        this.emit(CHANGE_EVENT)
	},
	
	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback)
	},

	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT, callback)
	},

	getCurrentPage: function(){
		return _currentPage;
	},
	
	getSitemap: function(){
		return _sitemap;
	}

});
	/**
		Registers callbacks with dispatcher

	*/
AppDispatcher.register(function(action){

	switch(action.actionType){
		
	}
});


module.exports = NavStore;










