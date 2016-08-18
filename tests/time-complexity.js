const QueueStorage = require('..');
const assert = require('assert');

const test = (times) => {
  let queue = new QueueStorage();
  let begin = Date.now();
  for (let i = 0; i < times; i++) {
    queue.push(i);
  }
  for (let i = 0; i < times; i++) {
    queue.pop();
  }
  assert.strictEqual(queue.size, 0);
  return Date.now() - begin;
};

let e5 = test(1E5) * 10;
let e6 = test(1E6);
let e7 = test(1E7) / 10;

let d1 = e5 / e6;
let d2 = e6 / e7;

assert(d1 > 0.5);
assert(d2 > 0.5);

process.exit(0);
