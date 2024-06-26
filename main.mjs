import HashMap from "./modules/HashMap.mjs";

const test = (value) => {
    const map = HashMap()

    map.hash(value)
}

export {test}

const newMap = HashMap()

console.log(newMap.hash('tree'));

newMap.set('Green', 'Not blue')
newMap.set('Blue', 'Blue')
newMap.set('Yellow', 'Yellow')
newMap.showMap()

newMap.set('Green', 'Love')
newMap.showMap()
console.log(`Total Elements: ${newMap.totaled()}`);
console.log(newMap.showMap());

console.log(newMap.get('Green'));
console.log(newMap.get('GreenS'));
console.log(newMap.has('Green'));
console.log(newMap.get('GreenS'));

console.log(newMap.remove('Blue'));

console.log(newMap.showMap());

console.log(`The current number of keys: ${newMap.length()}`);

console.log(newMap.clear());

console.log(newMap.showMap());

newMap.set('Green', 'Not blue')
newMap.set('Blue', 'Blue')
newMap.set('Orange', 'Yellow')

console.log(newMap.keys());

console.log(newMap.values());
console.log(newMap.entries());