import HashMap from "./modules/HashMap.mjs";

const newMap = HashMap()

console.log(newMap.hash('tree'));

newMap.set('Green', 'Tree')
newMap.set('abcd', 'Tree')
newMap.set('abcde', 'Tree')
newMap.showMap()

console.log(`Total Elements: ${newMap.totaled()}`);
