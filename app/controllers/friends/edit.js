import FriendsController from './base';

export default FriendsController.extend({
	actions: {
		cancel: function(params) {
			this.transitionToRoute('friends.show', this.get('model').get('id'))
		}
	}
});
