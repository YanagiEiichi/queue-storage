const QueueStorage = require('..');
const assert = require('assert');

let queue = new QueueStorage();

assert.strictEqual(queue.front, null);
assert.strictEqual(queue.back, null);
assert.strictEqual(queue.size, 0);

queue.push(1);

assert.strictEqual(queue.front, 1);
assert.strictEqual(queue.back, 1);
assert.strictEqual(queue.size, 1);

queue.push(2);

assert.strictEqual(queue.front, 2);
assert.strictEqual(queue.back, 1);
assert.strictEqual(queue.size, 2);

queue.push(3);

assert.strictEqual(queue.front, 3);
assert.strictEqual(queue.back, 1);
assert.strictEqual(queue.size, 3);

assert.strictEqual(queue.pop(), 1);

assert.strictEqual(queue.front, 3);
assert.strictEqual(queue.back, 2);
assert.strictEqual(queue.size, 2);

assert.strictEqual(queue.pop(), 2);

assert.strictEqual(queue.front, 3);
assert.strictEqual(queue.back, 3);
assert.strictEqual(queue.size, 1);

queue.push(4);

assert.strictEqual(queue.front, 4);
assert.strictEqual(queue.back, 3);
assert.strictEqual(queue.size, 2);

assert.strictEqual(queue.pop(), 3);

assert.strictEqual(queue.front, 4);
assert.strictEqual(queue.back, 4);
assert.strictEqual(queue.size, 1);


assert.strictEqual(queue.pop(), 4);

assert.strictEqual(queue.front, null);
assert.strictEqual(queue.back, null);
assert.strictEqual(queue.size, 0);

assert.strictEqual(queue.pop(), void 0);

assert.strictEqual(queue.front, null);
assert.strictEqual(queue.back, null);
assert.strictEqual(queue.size, 0);

process.exit(0);
