import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		save: function() {
			if (!Ember.isEmpty(this.get('model.description'))){
				return true
			} else {
				this.set('errorMessage', 'You need at least a description')
				return false
			}
		}
	}
});
