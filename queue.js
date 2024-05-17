/**
 * Queue Implementation Using Linked List
 * by José Delpino
 *
 * This module defines a Queue class which implements a queue data structure using
 * a linked list approach. It includes a nested Node class to represent each node
 * in the queue.
 *
 * @module Queue
 */

/**
 * Node: Ebbeded Node class for builfing queues.
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Queue: Chained-together nodes where you can
 * remove from the front or add to the back.
 */
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /**
   * enqueue(val): Add new value to end of the queue. Returns undefined.
   * @param {*} val - The value to add to the queue.
   */
  enqueue(val) {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  /**
   * dequeue(): Remove the node from the start of the queue and return
   * its value. Should throw an error if the queue is empty.
   * @returns {*} The value of the dequeued node.
   * @throws Will throw an error if the queue is empty.
   */
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty. Cannot dequeue.");
    }
    const removedNode = this.first;
    this.first = this.first.next;
    this.size--;
    if (this.isEmpty()) {
      this.last = null;
    }
    return removedNode.val;
  }

  /**
   * peek(): return the value of the first node in the queue.
   * @returns {*} The value of the first node in the queue.
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.first.val;
  }

  /**
   * isEmpty(): return true if the queue is empty, otherwise false.
   * @returns {boolean} True if the queue is empty, otherwise false.
   */
  isEmpty() {
    return this.size === 0;
  }
}

export default Queue;
