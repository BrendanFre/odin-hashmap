import Hash from "./Hash.mjs";
import LinkedList from "./LinkedList/LinkedList.mjs";

export default function Set(key, value, hashMap, buckets) {
  const keyHashed = Hash(key);
  const bucket = (keyHashed % buckets) - 1;
  const newNode = LinkedList(key,value)
  const hashBucket = hashMap[bucket];

  if(isEmpty(hashBucket)) {
    hashBucket.push(newNode)
  } else if(hashBucket[0]['key'] == key) {
    hashBucket[0]['value'] = value
  } else hashBucket[0][next] = newNode

function isEmpty(obj) {
  const size = Object.keys(obj);
  if (size.length > 0) {
    return false;
  } else {
    return true;
  }
}}