const QueueStorage = require('..');
const assert = require('assert');

let queue = new QueueStorage({ limit: 10, overflow: 'IGNORE' });

for (let i = 0; i < 20; i++) {
  queue.push(i);
}

assert.strictEqual(queue.front, 9);
assert.strictEqual(queue.back, 0);

for (let i = 0; i < 10; i++) {
  assert.strictEqual(queue.pop(), i);
}

process.exit(0);
