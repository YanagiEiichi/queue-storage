const QueueStorage = require('..');
const assert = require('assert');

let queue = new QueueStorage();
let array = [];

for (let i = 0; i < 20; i++) {
  array.push(i);
  queue.push(i);
}

array.reverse();

for (let i of queue) {
  assert.strictEqual(i, array.pop());
}

assert.strictEqual(array.length, 0);

process.exit(0);
