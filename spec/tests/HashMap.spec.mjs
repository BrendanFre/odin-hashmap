import HashMap from "../../modules/HashMap.mjs";

describe("Linked List", function () {
  const map = HashMap();
  it("Created new HashMap object", function () {
    expect(map.hash("hello")).toEqual(99162322);
  });
  it("Set many keys and pairs", function () {
    const hello = map.set("hello", "greeting");
    expect(hello).toEqual(1);
  });
  it("Check hello's bucket", function () {
    const mappy = map.theMap[1]["hello"];
    expect(mappy).toEqual("greeting");
  });
});
