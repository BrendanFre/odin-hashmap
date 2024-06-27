import HashMap from "./modules/HashMap.mjs";

const test = (value) => {
    const map = HashMap()

    map.hash(value)
}

export {test}

const newMap = HashMap()

console.log(newMap.hash('tree'));

newMap.set('Green', 'Green')
newMap.set('Blue', 'Blue')
newMap.set('Yellow', 'Yellow')
newMap.showMap()

newMap.set('Green', 'Love')
newMap.showMap()
console.log(`Total Elements: ${newMap.totaled()}`);
console.log(newMap.showMap());