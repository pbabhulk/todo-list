import { helper } from '@ember/component/helper';

export function gte([value1, value2]) {
  return value1 >= value2;
}

const Gte = helper(gte);
export default Gte;
