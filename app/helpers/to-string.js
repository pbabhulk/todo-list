import { helper } from '@ember/component/helper';

export function toString([value1]) {
  return Number(value1);
}

const toStrings = helper(toString);
export default toStrings;
