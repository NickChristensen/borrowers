import Ember from 'ember';


export function sortClass([thisColumn, sortBy, sortAscending]) {
  if(thisColumn === sortBy){
    if(sortAscending){
      return 'sort-asc';
    } else {
      return 'sort-desc';
    }
  }
}

export default Ember.HTMLBars.makeBoundHelper(sortClass);
