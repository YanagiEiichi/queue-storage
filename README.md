## queue-storage

Queue storage with linked list.

#### Env

node^6

#### Usage

```js
let queue = new QueueStorage();

queue.push(data); // push data to front of queue

queue.pop(data); // pop data from back of queue

queue.front; // get front item

queue.back; // get back item

queue.size; // get size of queue

// iterable
for (let i of queue) {
  // do somethings
}

let result = QueueStorage.from([ 1, 2, 3 ]); // Cast from an array

JSON.stringfiy(result) === '[1,2,3]'; // Stringify as an array
```

###### Parameters

* `limit` is a number, it represents the max size of this queue, `0` means no limit, default `0`.
* `overflow` is a string, `POP` or `IGNORE`, it represents how to deal the overflowed item, default `POP`.

```js
let queue = new QueueStorage({ limit: 10, overflow: 'POP' });

for (let i = 0; i < 20; i++) {
  queue.push(i);
}

queue.size; // 10
queue.front; // 19
queue.back; // 10
```

```js
let queue = new QueueStorage({ limit: 10, overflow: 'IGNORE' });

for (let i = 0; i < 20; i++) {
  queue.push(i);
}

queue.size; // 10
queue.front; // 9
queue.back; // 0
```
