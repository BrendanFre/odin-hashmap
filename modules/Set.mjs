import Hash from "./Hash.mjs";

export default function Set(key, value, hashMap, buckets) {
    let keyFound = false
    const keyHashed = Hash(key)
    const bucket = buckets % keyHashed
    const hashBucket = hashMap[bucket]

    hashBucket[keyHashed] = value

    console.log(hashBucket);
    return true
    
};
