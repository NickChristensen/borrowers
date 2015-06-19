import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		delete: function(id){
			var route = this
			this.store.find('friend', id).then(function(friend){
				friend.destroyRecord().then(function(){
					route.transitionTo('friends.index')
				})
				return false
			})

		}
	}
})
