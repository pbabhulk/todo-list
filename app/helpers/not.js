import { helper } from '@ember/component/helper';

export function not([value1]) {
  return !value1;
}

const Not = helper(not);
export default Not;
