import { helper } from '@ember/component/helper';

export function and([value1, value2]) {
  return value1 && value2;
}

const And = helper(and);
export default And;
