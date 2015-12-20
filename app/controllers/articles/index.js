import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['showReturned'],
	possibleStates: ['borrowed', 'returned'],
  
  showReturned: false,
  
  filteredResults: Ember.computed('showReturned', 'model.@each.state', function() {
    if( this.get('showReturned') ) {
      return this.get('model');
    } else {
      return this.get('model').filterBy('state', 'borrowed');
    }
  })
});
