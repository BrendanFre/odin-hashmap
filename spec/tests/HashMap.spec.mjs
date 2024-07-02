import HashMap from "../../modules/HashMap.mjs";

describe("Linked List", function () {
  const map = HashMap();
  it("Created new HashMap object", function () {
    expect(map.hash("hello")).toEqual(99162322);
  });
});
