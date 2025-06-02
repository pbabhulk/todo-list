import { helper } from '@ember/component/helper';

export function eq([value1, value2]) {
  return value1 === value2;
}

const Eq = helper(eq);
export default Eq;
