import { helper } from '@ember/component/helper';

export function or([value1, value2]) {
  return value1 || value2;
}

const Or = helper(or);
export default Or;
