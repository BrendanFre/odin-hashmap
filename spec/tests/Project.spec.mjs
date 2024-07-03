import HashMap from "../../modules/HashMap.mjs";

const test = HashMap();

describe("Project Odin Tests: ", function () {
  it("Mass update map with nodes", function () {
    test.set("apple", "red");
    test.set("banana", "yellow");
    test.set("carrot", "orange");
    test.set("dog", "brown");
    test.set("elephant", "gray");
    test.set("frog", "green");
    test.set("grape", "purple");
    test.set("hat", "black");
    test.set("ice cream", "white");
    test.set("jacket", "blue");
    test.set("kite", "pink");
    test.set("lion", "golden");
  });
  it("find the dog key and return brown", function () {
    expect(test.get("dog")).toBe("brown");
  });
  it("find the lion key and return golden", function () {
    expect(test.get("lion")).toBe("golden");
  });
});
