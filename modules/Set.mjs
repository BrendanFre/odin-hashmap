import Hash from "./Hash.mjs";

export default function Set(key, value, hashMap, buckets) {
  const keyHashed = Hash(key);
  const bucket = (keyHashed % buckets) - 1;
  console.log(`Buckets is ${bucket}`);
  const hashBucket = hashMap[bucket];

  if (isEmpty(hashBucket)) {
    hashBucket[key] = value;
  } else if (Object.prototype.hasOwnProperty.call(hashBucket, key)) {
    hashBucket[key] = value;
  } else console.log(`${key} caused collision`);
}

function isEmpty(obj) {
  const size = Object.keys(obj);
  if (size.length > 0) {
    return false;
  } else {
    return true;
  }
}
