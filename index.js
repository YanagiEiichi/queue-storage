class QueueItem {
  constructor(data, next) {
    this.data = data;
    this.next = next;
    this.prev = null;
  }
}

const FRONT = Symbol('front');
const BACK = Symbol('back');
const SIZE = Symbol('size');

class QueueStorage {
  static from(iterable) {
    let gen = iterable[Symbol.iterator] || [][Symbol.iterator];
    let queue = new this();
    for (let item of gen.call(iterable)) {
      queue.push(item);
    }
    return queue;
  }
  constructor({ limit = 0, overflow = 'POP' } = {}) {
    // Check Range
    if (overflow !== 'POP' && overflow !== 'IGNORE')
      throw new RangeError('"overflow" must be one of "POP" or "IGNORE"');
    if (limit < 0)
      throw new RangeError('"limit" must not be negative');
    // Init Props
    this.overflow = overflow;
    this.limit = limit;
    this[SIZE] = 0;
  }
  push(data) {
    // Check Overflow
    if (this.overflow === 'POP') {
      if (this.limit) while (this[SIZE] >= this.limit) this.pop();
    } else {
      if (this.limit && this[SIZE] >= this.limit) return;
    }
    // Increase Size
    this[SIZE]++;
    // Create Item and Push to Front on LinkedList
    let item = new QueueItem(data, this[FRONT]);
    if (this[FRONT]) this[FRONT].prev = item;
    this[FRONT] = item;
    // Set to "back" If LinkedList is Empty
    if (!this[BACK]) this[BACK] = item;
  }
  pop() {
    // Check Empty
    if (this[SIZE] === 0) return;
    // Discrease Size
    this[SIZE]--;
    // Pop Item from LinkedList
    let item = this[BACK];
    this[BACK] = item.prev;
    item.prev = null;
    if (this[BACK]) this[BACK].next = null;
    // Remove Front If Empty
    if (this[SIZE] === 0) this[FRONT] = null;
    return item.data;
  }
  *[Symbol.iterator]() {
    let item = this[BACK];
    while (item) {
      yield item.data;
      item = item.prev;
    }
  }
  get front() {
    return this[FRONT] ? this[FRONT].data : null;
  }
  get back() {
    return this[BACK] ? this[BACK].data : null;
  }
  get size() {
    return this[SIZE];
  }
  toJSON() {
    return Array.from(this);
  }
}

module.exports = QueueStorage;
