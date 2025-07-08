import { helper } from '@ember/component/helper';
import moment from 'moment';


export function momentFormatDate([value1]) {
  return moment(value1).format('YYYY-MM-DD');
}

const momentFormatDate1 = helper(momentFormatDate);
export default momentFormatDate1;
