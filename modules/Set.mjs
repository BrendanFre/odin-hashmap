import Hash from "./Hash.mjs";

export default function Set(key, value, hashMap, buckets) {
    const keyHashed = Hash(key)
    const bucket = buckets % keyHashed
    const hashBucket = hashMap[bucket]

    if (isEmpty(hashBucket)) {
        hashBucket[key] = value
        console.log('new key pair added');
    } else if (Object.prototype.hasOwnProperty.call(hashBucket, key)) {
        hashBucket[key] = value
        console.log(`${key}'s value has been changed to ${value}`);
    } else console.log('Collision detected');

    
};

function isEmpty(obj) {
    const size = Object.keys(obj)
    if (size.length > 0) {
        return false
    } else { console.log(`is Empty`);return true }
}