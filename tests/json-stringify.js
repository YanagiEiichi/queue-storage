const QueueStorage = require('..');
const assert = require('assert');

let queue = new QueueStorage();
let array = [];

for (let i = 0; i < 20; i++) {
  array.push(i);
  queue.push(i);
}

assert.strictEqual(JSON.stringify(queue), JSON.stringify(array));

process.exit(0);
