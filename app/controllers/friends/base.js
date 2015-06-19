import Ember from 'ember';

export default Ember.Controller.extend({
	isValid: Ember.computed(
		'model.firstName',
		'model.lastName',
		'model.email',
		'model.twitter', function(){
			return !Ember.isEmpty(this.get('model.firstName')) &&
				!Ember.isEmpty(this.get('model.lastName')) &&
				!Ember.isEmpty(this.get('model.email')) &&
				!Ember.isEmpty(this.get('model.twitter'))
		}
	),
	actions: {
		save: function() {
			if(this.get('isValid')) {
				var controller = this
				this.get('model').save().then(function(friend) {
					controller.transitionToRoute('articles', friend)
				})
			} else {
				this.set('errorMessage', 'You have to fill all the fields')
			}
		}
	}
});
