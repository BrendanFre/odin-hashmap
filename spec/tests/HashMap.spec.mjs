import HashMap from "../../modules/HashMap.mjs";

describe("HashMap Set and create functions:", function () {
  const map = HashMap();
  it("Created new HashMap object", function () {
    expect(map.hash("hello")).toEqual(99162322);
  });
  it("Set many keys and pairs", function () {
    const hello = map.set("hello", "greeting");
    expect(hello).toEqual('greeting');
  });
  it("Check hello's bucket", function () {
    const mappy = map.theMap[1]["hello"];
    expect(mappy).toEqual("greeting");
  });
});

describe("HashMap Get:", function () {
  const map = HashMap();
  map.set("hello", "greeting");
  map.set("goodbye", "farewell");
  map.set("welcome", "greeting");
  map.set("to", "verb");
  map.set("and", "connective");
  map.set("tree", "noun");
  it("Return the the value from the hello key", function () {
    expect(map.get("hello")).toEqual("greeting");
  });
  it("Search hashmap for key noob, should return false.", function () {
    expect(map.get("noob")).toEqual(false);
  });
});
