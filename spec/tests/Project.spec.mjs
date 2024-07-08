import HashMap from '../../src/HashMap.mjs'

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
    // console.log(test.theMap);
    expect(test.length()).toBe(12);
  });
  it("Overwrite carrot's value with crunchy", function () {
    test.set("carrot", "crunchy");
    expect(test.get("carrot")).toBe("crunchy");
  });
  it("Overwrite lion's value with cat", function () {
    test.set("lion", "cat");
    expect(test.get("lion")).toBe("cat");
  });

  it('Expand the map by one bucket', function () {
    expect(test.bucketSize()).toBe(16)
    test.set('moon', 'silver')
    test.set('sun', 'orange')
    // console.log(test.theMap)
    expect(test.bucketSize()).toBe(32)
  })
  it('Update key kite with value toy', function () {
    test.set('kite', 'toy')
    expect(test.get('kite')).toBe('toy')
  })
});
