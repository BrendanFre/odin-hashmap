import hash from './hashMap.mjs'

const checkValidIndex = (index, buckets) => {
    if (index < 0 || index >= buckets.length) {
        throw new Error("Trying to access index out of bound");
    }
}


const theMap = hash()

console.log(`The hashed value of twelve is ${theMap.getHash('first')}`)

theMap.setHash('first', 'twelve')
console.log(theMap.getHash('first'))
console.log(theMap.get('first'));