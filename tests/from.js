const QueueStorage = require('..');
const assert = require('assert');

let queue1 = QueueStorage.from([ 1, 2, 3 ]);

assert.strictEqual(queue1.front, 3);
assert.strictEqual(queue1.back, 1);

let queue2 = QueueStorage.from({ 0: 1, 1: 2, 2: 3, length: 3 });

assert.strictEqual(queue2.front, 3);
assert.strictEqual(queue2.back, 1);

let queue3 = QueueStorage.from({ 0: 1, 1: 2, 2: 3 });

assert.strictEqual(queue3.front, null);
assert.strictEqual(queue3.back, null);

let queue4 = QueueStorage.from({ length: 1 });

assert.strictEqual(queue4.front, void 0);
assert.strictEqual(queue4.back, void 0);

process.exit(0);
