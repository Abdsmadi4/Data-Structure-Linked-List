"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  insertAtBeginning(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  insertAtLast(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  deleteAtMiddle() {
    if (this.size() === 0) {
      return null;
    }
    if (this.size() === 1) {
      this.head = null;
      return;
    } else if (this.size() === 2) {
      this.head.next = null;
      return;
    } else if (this.size() > 2 && this.size() % 2 === 0) {
      let count = this.size() / 2;
      let currentNode = this.head;
      while (count - 1) {
        currentNode = currentNode.next;
        count--;
      }
      currentNode.next = currentNode.next.next;
      return;
    } else if (this.size() > 2 && this.size() % 2 !== 0) {
      let count = this.size() / 2 + 0.5;
      let currentNode = this.head;
      while (count - 2) {
        currentNode = currentNode.next;
        count--;
      }
      currentNode.next = currentNode.next.next;
    } else {
      return;
    }
  }

  insertAt(value, idx) {
    const newNode = new Node(value);
    if (this.size() === 0) {
      this.head = newNode;
    } else {
      if (idx === 0) {
        this.insertAtBeginning(value);
      } else if (idx > this.size()) {
        this.insertAtLast(value);
      } else {
        let count = 0;
        let current = this.head;
        while (current) {
          if (count === idx - 1) {
            newNode.next = current.next;
            current.next = newNode;
            break;
          }
          current = current.next;
          count++;
        }
      }
    }
  }
}

module.exports = LinkedList;
