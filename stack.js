/**
 * Queue Implementation Using Linked List
 * by José Delpino
 *
 * This module defines a Stack class which implements a stack
 * data structure using a linked list approach. It includes a nested Node class
 * to represent each node in the stack.
 *
 * @module Stack
 */

/** Node: node for a stack. */
class Node {
  /**
   * Create a new Node.
   * @param {*} val - The value to store in the node.
   */
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Stack: chained-together nodes where you can
 * remove from the top or add to the top.
 */
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /**
   * push(val): add new value to the top of the stack. Returns undefined.
   * @param {*} val - The value to add to the stack.
   */
  push(val) {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
  }

  /**
   * pop(): remove the node from the top of the stack and return its value.
   * Should throw an error if the stack is empty.
   * @returns {*} The value of the popped node.
   * @throws Will throw an error if the stack is empty.
   */
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty. Cannot pop.");
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
   * peek(): return the value of the top node in the stack.
   * @returns {*} The value of the top node in the stack.
   */
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.first.val;
  }

  /**
   * isEmpty(): return true if the stack is empty, otherwise false.
   * @returns {boolean} True if the stack is empty, otherwise false.
   */
  isEmpty() {
    return this.size === 0;
  }
}

export default Stack;
