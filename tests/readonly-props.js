const QueueStorage = require('..');

const assert = require('assert');

let queue = new QueueStorage();

for (let key of [ 'front', 'back', 'size' ]) {
  assert.throws(() => {
    'use strict';
    queue[key] = 233;
  });
}

process.exit(0);
