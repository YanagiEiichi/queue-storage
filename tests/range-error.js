'use strict';

const QueueStorage = require('..');

const assert = require('assert');

assert.throws(() => {
  new QueueStorage({ limit: -1 });
});

assert.throws(() => {
  new QueueStorage({ overflow: 'HEHE' });
});

process.exit(0);
