import GetBucket from "./GetBucket.mjs";
import Hash from "./Hash.mjs";
import Node from "./LinkedList/Node.mjs";

export default function Get(key, arr) {
  const hashedKey = Hash(key);
  const bucketCount = arr.length;
  const selectedBucket = GetBucket(arr, bucketCount, hashedKey);
  if (selectedBucket != {}) {
    for (const objKey in selectedBucket) {
      if (objKey == key) {
        return selectedBucket[key];
      }
    }
    if (selectedBucket["next"] == Node) {
      return selectedBucket["next"].Get(key);
    } else return false;
  }
  return false;
}
