import Ember from 'ember';
import { formatDate } from '../utils/date-helpers';

export function formattedDate(params/*, hash*/) {
  return formatDate(params[0], params[1]);
}

export default Ember.HTMLBars.makeBoundHelper(formattedDate);
