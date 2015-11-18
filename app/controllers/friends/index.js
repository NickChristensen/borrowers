import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['sortBy', 'sortAscending'],
  sortBy: 'firstName',
  sortAscending: true,
  
  actions: {
    setSortBy(fieldName) {
      if(this.get('sortBy') === fieldName){
        this.toggleProperty('sortAscending');
      }
      else {
        this.set('sortAscending', true);
      }

      this.set('sortBy', fieldName);

      console.log('Sorting By: ', fieldName);
      console.log('Sorting Ascending: ', this.get('sortAscending'));
    }
  }
  
});
