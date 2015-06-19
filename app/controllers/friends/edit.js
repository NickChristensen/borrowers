import FriendsController from './base';

export default FriendsController.extend({
	actions: {
		cancel: function(params) {
			this.transitionToRoute('articles', this.get('model').get('id'))
		}
	}
});
