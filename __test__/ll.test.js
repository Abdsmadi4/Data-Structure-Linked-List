"use strict";

const LinkedList = require("../ll");

describe("Testing Linked List class", () => {
  it("create a new linked list", () => {
    const ll = new LinkedList();
    expect(ll).toBeDefined();
    expect(ll).toBeInstanceOf(LinkedList);
    expect(ll.head).toBeNull();
  });

  it("insert a new node at beginning", () => {
    const ll = new LinkedList();
    ll.insertAtBeginning("Abd");
    expect(ll.head.value).toEqual("Abd");
    expect(ll.head.next).toBeNull();
  });

  it("insert a new node to empty linked list", () => {
    const ll = new LinkedList();
    ll.insertAtLast("100");
    expect(ll.head.value).toEqual("100");
    expect(ll.head.next).toBeNull();
  });

  it("insert multiple nodes at last of linked list", () => {
    const ll = new LinkedList();
    ll.insertAtBeginning("100");
    ll.insertAtLast("200");
    ll.insertAtLast("300");
    ll.insertAtLast("400");

    expect(ll.head.value).toEqual("100");
    expect(ll.head.next.value).toEqual("200");
    expect(ll.head.next.next.value).toEqual("300");
    expect(ll.head.next.next.next.value).toEqual("400");
    expect(ll.head.next.next.next.next).toBeNull();
  });

  it("delete the middle node when the list has 5 node", () => {
    const ll = new LinkedList();
    ll.insertAtLast("100");
    ll.insertAtLast("200");
    ll.insertAtLast("300");
    ll.insertAtLast("400");
    ll.insertAtLast("500");
    ll.deleteAtMiddle();
    expect(ll.head.value).toEqual("100");
    expect(ll.head.next.value).toEqual("200");
    expect(ll.head.next.next.value).toEqual("400");
    expect(ll.head.next.next.next.value).toEqual("500");
    expect(ll.head.next.next.next.next).toBeNull();
  });

  it("insert a node into given index of the linked list", () => {
    const ll = new LinkedList();
    ll.insertAtLast("a");
    ll.insertAtLast("b");
    ll.insertAtLast("c");
    ll.insertAtLast("d");
    ll.insertAtLast("e");
    ll.insertAt("Z", 3);
    expect(ll.head.value).toEqual("a");
    expect(ll.head.next.value).toEqual("b");
    expect(ll.head.next.next.value).toEqual("c");
    expect(ll.head.next.next.next.value).toEqual("Z");
    expect(ll.head.next.next.next.next.value).toEqual("d");
    expect(ll.head.next.next.next.next.next.value).toEqual("e");
    expect(ll.head.next.next.next.next.next.next).toBeNull();
  });

  it("insert a out of range index", () => {
    const ll = new LinkedList();
    ll.insertAtLast(10);
    ll.insertAtLast(20);
    ll.insertAtLast(30);
    ll.insertAtLast(40);
    expect(ll.insertAt(70, 6)).toBeUndefined();
  });
});
