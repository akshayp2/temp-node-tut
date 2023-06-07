const _ = require('lodash');

const items=[1,2,[21,[3]]];
const ni= _.flattenDeep(items);

console.log(ni)