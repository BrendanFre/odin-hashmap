import LinkedList from "../../src/LinkedList/LinkedList.mjs";

describe("Linked List", function () {
  const list = LinkedList("tree", "oak");
  it("Created new LinkedList object and expect it to contain tree: oak, next:null", function () {
    const a = list.node;
    expect(a).toEqual({ tree: "oak", next: null });
  });
  it("Get the tree key and return oak", function () {
    const b = list.get("tree");
    expect(b).toEqual("oak");
  });
  it("get function returns false as key does not exist.", function () {
    const c = list.get("store");
    expect(c).toEqual(false);
  });
  it('Update the "tree" value to "pine"', function () {
    expect(list.set("tree", "pine")).toEqual({ tree: "pine", next: null });
  });
  it("Create a new node and attach the key animal with value cat", function () {
    const d = list.set("animal", "cat");
    expect(d).toEqual({ animal: "cat", next: null });
    });
  });

