import hash from "./hashMap.mjs";

const checkValidIndex = (index, buckets) => {
  if (index < 0 || index >= buckets.length) {
    throw new Error("Trying to access index out of bound");
  }
};

const theMap = hash();

console.log(`The bucket for the word "admin" is ${theMap.getBucket("admin")}`);
console.log(`The bucket for the word "minda" is ${theMap.getBucket("minda")}`);
console.log(
  `The bucket for the word "oliver" is ${theMap.getBucket("oliver")}`
);
console.log(`The bucket for the word "dad" is ${theMap.getBucket("dad")}`);
console.log(`${theMap.set("admin", "Brendan")}`);
console.log(`${theMap.set("admin", "Trees")}`);
console.log(`${theMap.set("oliver", "son")}`);
console.log(`${theMap.set("dad", "brendan")}`);
console.log(theMap.getContents(7));
console.log(`The value of "admin" is ${theMap.get("admin")}`);
console.log(`Does theMap contain key if oliver: ${theMap.has("oliver")}`);
console.log(`Delete Olive if exists: ${theMap.remove("Oliv")}`);
console.log(`Delete oliver if exists: ${theMap.remove("oliver")}`);
console.log(`Contents of hashmap: ${theMap.length()}`);
