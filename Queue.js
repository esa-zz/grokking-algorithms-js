export class Queue {
  #queue;
  constructor() {
    this.#queue = [];
  }

  enqueue(item) {
    this.#queue.push(item);
  }

  dequeue() {
    if (this.isEmpty) return null;
    return this.#queue.shift();
  }

  get peek() {
    if (this.isEmpty) return null;
    return this.#queue[0];
  }

  get isEmpty() {
    return this.#queue.length === 0;
  }

  get size() {
    return this.#queue.length;
  }
}
