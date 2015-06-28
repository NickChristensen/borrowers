import FriendsController from './base';

export default FriendsController.extend({
	actions: {
		cancel: function() {
			this.transitionToRoute('friends');
		}
	}
});
