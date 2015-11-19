import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['sortBy', 'sortAscending'],
  sortBy: 'firstName',
  sortAscending: false,
  
  actions: {
    setSortBy(fieldName) {
      if(this.get('sortBy') === fieldName){
        this.toggleProperty('sortAscending');
      }
      else {
        this.set('sortAscending', true);
      }

      this.set('sortBy', fieldName);
    }
  }
  
});
