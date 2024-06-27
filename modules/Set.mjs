import Hash from "./Hash.mjs";

export default function Set(key, value, hashMap, buckets) {
    const keyHashed = Hash(key)
    const bucket = buckets % keyHashed
    console.log(bucket);
    const hashBucket = hashMap[bucket]

    if (isEmpty(hashBucket)) {
        hashBucket[key] = value
    } else if (Object.prototype.hasOwnProperty.call(Object, hashBucket, key)) {
        hashBucket[key] = value
    } else console.log('Collision detected');

    
};

function isEmpty(obj) {
    const size = Object.keys(obj)
    console.log(size);
    if (size.length > 0) {
        console.log('not empty');
        return false
    } else { console.log(`is Empty`);return true }
}