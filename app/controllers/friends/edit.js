import FriendsController from './base';

export default FriendsController.extend({
	actions: {
		cancel: function() {
			this.transitionToRoute('articles', this.get('model').get('id'));
		}
	}
});
