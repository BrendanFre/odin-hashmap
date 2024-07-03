import Hash from "./Hash.mjs";
import Node from "./LinkedList/Node.mjs";
import UpdateCount from "./UpdateCount.mjs";

export default function Set(key, value, hashMap, buckets, load) {
  const keyHashed = Hash(key);
  const bucket = (keyHashed % buckets) - 1;
  const newNode = Node(key, value);
  const hashBucket = hashMap[bucket];

  if (isEmpty(hashBucket)) {
    hashBucket["next"] = null;
    UpdateCount(hashMap, load);
    return (hashBucket[key] = value);
  } else if (hashBucket[key]) {
    return (hashBucket[key] = value);
  } else {
    return (hashBucket["next"] = newNode);
  }
}

function isEmpty(obj) {
  const size = Object.keys(obj);
  if (size.length > 0) {
    return false;
  } else {
    return true;
  }
}
