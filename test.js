const sort = require('./index.js');
const assert = require('assert');
var test=[{a:{b:2,c:"Z",d:true}},{a:{b:2,c:"A",d:false}},{a:{b:9,c:"Q",d:true}},{a:{b:7,c:"EE",d:false}},
                {a:{b:7,c:"EE",d:true}},{a:{b:1,c:"A",d:true}},{a:{b:1,c:"B",d:false}}];
assert.deepStrictEqual(sort(test, ['a.b', 'a.c', 'a.d'], ['desc', 'asc', 'desc']),
[ {a:{b:9,c:'Q',d:true}},
  {a:{b:7,c:'EE',d:true}},
  {a:{b:7,c:'EE',d:false}},
  {a:{b:2,c:'A',d:false}},
  {a:{b:2,c:'Z',d:true}},
  {a:{b:1,c:'A',d:true}},
  {a:{b:1,c:'B',d:false}} ], 'Test failed: "sort(test, [\'a.b\', \'a.c\', \'a.d\'], [\'desc\', \'asc\', \'desc\'])"');
