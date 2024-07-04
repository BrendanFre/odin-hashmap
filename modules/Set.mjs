import Hash from "./Hash.mjs";

export default function Set(key, value, hashMap, buckets, load) {
  // console.log(hashMap);
  if (Array.isArray(hashMap)) {
    const keyHashed = Hash(key);
    const bucket = (keyHashed % buckets) - 1;
    const hashBucket = hashMap[bucket];
    if (isEmpty(hashBucket)) {
      // console.log(`Empty bucket adding key pair`);
      hashBucket["next"] = null;
      return (hashBucket[key] = value);
    } else {
      // console.log(`Bucket is not empty`);
      return Set(key, value, hashBucket, buckets, load);
    }
  } else if (typeof hashMap == "object") {
    if (Object.hasOwn(hashMap, key)) {
      return (hashMap[key] = value);
    } else if (Object.hasOwn(hashMap, "next")) {
      if(hashMap['next'] == null){
        // console.log(`Hashmap has no next`);
        const newNode = {next: null}
        newNode[key] = value
        return hashMap['next'] = newNode
      }
      // console.log(`${key} needs to go in next`);
      Set(key, value, hashMap["next"], buckets, load);
  } else {hashMap["next"] = null;
    // console.log(`create new next:${hashMap}`);
  return Set(key, value, hashMap["next"], buckets, load);}
} else {
  // console.log(`${hashMap} is not an object`);
  return 'Not an object or array'}
}

function isEmpty(obj) {
  const size = Object.keys(obj);
  if (size.length > 0) {
    return false;
  } else {
    return true;
  }
}
