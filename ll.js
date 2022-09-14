"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
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
}

module.exports = LinkedList;
