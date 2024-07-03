import HashMap from "../../modules/HashMap.mjs";

const map = HashMap();
describe("HashMap Set and create functions:", function () {
  it("Created new HashMap object", function () {
    expect(map.hash("hello")).toEqual(99162322);
  });
  it("Set many keys and pairs", function () {
    const hello = map.set("hello", "greeting");
    expect(hello).toEqual("greeting");
  });
  it("Check hello's bucket", function () {
    const mappy = map.theMap[1]["hello"];
    expect(mappy).toEqual("greeting");
  });
});

describe("HashMap Get:", function () {
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

describe("HashMap Has:", function () {
  it("HashMap.has: search for to and should return true", function () {
    expect(map.has("to")).toEqual(true);
  });
  it("HashMap.has: search for ten and should return false", function () {
    expect(map.has("ten")).toEqual(false);
  });
});

describe("HashMap Remove:", function () {
  let testWord;
  afterEach(function () {
    expect(map.has(testWord)).toBe(false);
  });
  it("Remove existing key 'to', it should return true", function () {
    testWord = "to";
    expect(map.remove(testWord)).toEqual(true);
  });
  it("Remove existing key 'trollop', it should return false", function () {
    testWord = "trollop";
    expect(map.remove(testWord)).toEqual(false);
  });
});

describe("Hashmap Length:", function () {
  const newMap = HashMap();
  it("Calculate length after adding keys", function () {
    newMap.set("ice", "white");
    newMap.set("ice cream", "white");
    newMap.set("jacket", "blue");
    newMap.set("kite", "pink");
    newMap.set("lion", "golden");
    expect(newMap.length()).toBe(5);
  });
  it("Calculate length adding additional keys", function () {
    newMap.set("tomato", "red");

    expect(newMap.length()).toBe(6);
  });
});

describe("Hashmap Clear:", function () {
  const newMap = HashMap();
  it("Add keys, then clear all data", function () {
    newMap.set("ice", "white");
    newMap.set("ice cream", "white");
    newMap.set("jacket", "blue");
    newMap.set("kite", "pink");
    newMap.set("lion", "golden");
    newMap.clear();
    expect(newMap.length()).toBe(0);
  });
});

describe("Hashmap Keys:", function () {
  const newMap = HashMap();
  let expected = ["ice", "lion", "ice cream", "jacket", "kite"];
  it("Add keys, then return list of keys", function () {
    newMap.set("ice", "white");
    newMap.set("ice cream", "white");
    newMap.set("jacket", "blue");
    newMap.set("kite", "pink");
    newMap.set("lion", "golden");
    expect(newMap.keys()).toEqual(expected);
  });
  it("Add keys, then return list of keys", function () {
    expected = ["Land Rover", "Vauxhall", "Ferrari"];
    const carMap = HashMap();
    carMap.set("Vauxhall", "Corsa");
    carMap.set("Ferrari", "F50");
    carMap.set("Land Rover", "Discovery");
    expect(carMap.keys()).toEqual(expected);
  });
});

describe("Hashmap Values:", function () {
  const newMap = HashMap();
  let expected = ["white", "blue", "white", "pink", "golden"];
  it("Add keys, then return list of keys", function () {
    newMap.set("ice", "white");
    newMap.set("ice cream", "white");
    newMap.set("jacket", "blue");
    newMap.set("kite", "pink");
    newMap.set("lion", "golden");
    expect(newMap.values().sort()).toEqual(
      jasmine.arrayWithExactContents(expected)
    );
  });
  it("Add keys, then return list of keys", function () {
    expected = ["Corsa", "F50", "Discovery"];
    const carMap = HashMap();
    carMap.set("Vauxhall", "Corsa");
    carMap.set("Ferrari", "F50");
    carMap.set("Land Rover", "Discovery");
    expect(carMap.values().sort()).toEqual(
      jasmine.arrayWithExactContents(expected)
    );
  });
});

describe("Hashmap Entries:", function () {
  const newMap = HashMap();
  let expected = [
    ["ice", "white"],
    ["ice cream", "white"],
    ["jacket", "blue"],
    ["kite", "pink"],
    ["lion", "golden"],
  ];
  it("Add keys, then return list of keys", function () {
    newMap.set("ice", "white");
    newMap.set("ice cream", "white");
    newMap.set("jacket", "blue");
    newMap.set("kite", "pink");
    newMap.set("lion", "golden");
    expect(newMap.entries().sort()).toEqual(
      jasmine.arrayWithExactContents(expected)
    );
  });
  it("Add keys, then return list of entries", function () {
    let expected = [
      ["Vauxhall", "Corsa"],
      ["Ferrari", "F50"],
      ["Land Rover", "Discovery"],
    ];
    const carMap = HashMap();
    carMap.set("Vauxhall", "Corsa");
    carMap.set("Ferrari", "F50");
    carMap.set("Land Rover", "Discovery");
    expect(carMap.entries()).toEqual(jasmine.arrayWithExactContents(expected));
  });
});
