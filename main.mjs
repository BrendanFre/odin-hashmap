import hash from './hashMap.mjs'

const checkValidIndex = (index, buckets) => {
    if (index < 0 || index >= buckets.length) {
        throw new Error("Trying to access index out of bound");
    }
}


const theMap = hash()

console.log(`The hash map at the start: ${theMap.getMap()}`);

console.log(`The hashed value of twelve is ${theMap.hash('first')}`)
console.log(`${theMap.getBucket(0)}`)
theMap.setHash('first', 'twelve')
console.log(theMap.get('first'));

console.log(`Contents of aMap is ${theMap.getMap()}`);
console.log(`Contents of bucket 0 is ${theMap.getBucket(0)}`);