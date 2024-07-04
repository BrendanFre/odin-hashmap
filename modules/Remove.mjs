import Hash from "./Hash.mjs";
import GetBucket from "./GetBucket.mjs";

export default function Remove(key, arr) {
  let myBucket;
  if (Array.isArray(arr)) {
    const hashed = Hash(key);
    myBucket = GetBucket(arr, arr.length, hashed);
  } else myBucket = arr;

  if (Object.hasOwn(myBucket, key)) {
    return delete myBucket[key];
  } else if (Object.keys(myBucket).length == 0) {
    return false;
  } else if (myBucket["next"] == null) {
    return false;
  } else {
    return Remove(key, myBucket["next"]);
  }
}