
var keyMirror = require('keymirror');


// Version Not using KeyMirror

// module.exports = {
// 	ADD_ITEM: 'ADD_ITEM',
// 	REMOVE_ITEM: 'REMOVE_ITEM:',
// 	INCREASE_ITEM: 'INCREASE_ITEM',
// 	DECREASE_ITEM: 'DECREASE_ITEM'
// };

module.exports = keyMirror({
	ADD_ITEM: null,
	REMOVE_ITEM: null,
	INCREASE_ITEM: null,
	DECREASE_ITEM: null
});