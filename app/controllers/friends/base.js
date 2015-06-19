import Ember from 'ember';

export default Ember.Controller.extend({
	hasFirstName: Ember.computed.notEmpty('model.firstName'),
	hasLastName: Ember.computed.notEmpty('model.lastName'),
	hasEmail: Ember.computed.notEmpty('model.email'),
	hasTwitter: Ember.computed.notEmpty('model.twitter'),
	isValid: Ember.computed.and(
		'hasFirstName',
		'hasLastName',
		'hasEmail',
		'hasTwitter'
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
