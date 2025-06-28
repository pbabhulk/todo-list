import { helper } from '@ember/component/helper';

export default helper(function ([list, value]) {
  return list?.includes(value);
});
