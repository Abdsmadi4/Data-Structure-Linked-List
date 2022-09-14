"use strict";

const Node = require("../node");

describe("Testing Node", () => {
  it("Test create new node", () => {
    const node = new Node("Abd");
    expect(node).toBeInstanceOf(Node);
    expect(node.value).toBe("Abd");
    expect(node.next).toBeNull();
  });
});
