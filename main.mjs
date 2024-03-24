import hash from './hashMap.mjs'

const checkValidIndex = (index, buckets) => {
    if (index < 0 || index >= buckets.length) {
        throw new Error("Trying to access index out of bound");
    }
}


const theMap = hash()

console.log(`The bucket for the word "admin" is ${theMap.getBucket("admin")}`)