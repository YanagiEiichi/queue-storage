const QueueStorage = require('..');
const assert = require('assert');

let queue = new QueueStorage({ limit: 10 });

for (let i = 0; i < 20; i++) {
  queue.push(i);
}

assert.strictEqual(queue.front, 19);
assert.strictEqual(queue.back, 10);

for (let i = 0; i < 10; i++) {
  assert.strictEqual(queue.pop(), i + 10);
}

process.exit(0);
