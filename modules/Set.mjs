import Hash from "./Hash.mjs";
import LinkedList from "./LinkedList/LinkedList.mjs";
import Node from "./LinkedList/Node.mjs";

export default function Set(key, value, hashMap, buckets) {
  const keyHashed = Hash(key);
  const bucket = (keyHashed % buckets) - 1;

  const newNode = Node(key, value);
  const hashBucket = hashMap[bucket];

  if (isEmpty(hashBucket)) {
    hashBucket["next"] = null;
    return hashBucket[key] = value;
  } else if (hashBucket[key]) {
    return hashBucket[key] = value;
  } else {
    return hashBucket["next"] = newNode;
  }
  return bucket;
}

function isEmpty(obj) {
  const size = Object.keys(obj);
  if (size.length > 0) {
    return false;
  } else {
    return true;
  }
}
