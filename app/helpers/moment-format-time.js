import { helper } from '@ember/component/helper';
import moment from 'moment';


export function momentFormatTime([value1]) {
  return moment(value1).format('hh:mm A');
}

const momentFormatTime1 = helper(momentFormatTime);
export default momentFormatTime1;
