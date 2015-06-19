import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.createRecord('article', {
			friend: this.modelFor('friends/show')
		})
	},
	actions: {
		save: function() {
			var route = this
			var model = this.modelFor('articles/new')

			model.save().then(function(){
				route.transitionTo('articles')
			})
		},
		cancel: function() {
			this.transitionTo('articles')
		}
	}
});