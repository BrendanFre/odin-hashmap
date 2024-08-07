import GetBucket from "./GetBucket.mjs";
import Hash from "./Hash.mjs";

export default function Get(key, arr) {
  // console.log(`${key} : ${arr}`);

  let myBucket;
  if (Array.isArray(arr)) {
    const hashed = Hash(key);
    myBucket = GetBucket(arr, arr.length, hashed);
  } else myBucket = arr;
  if (key in myBucket) {
    return myBucket[key];
  } else if (myBucket === {}) {
    return false;
  } else if (myBucket["next"] == null) {
    return false;
  } else {
    return Get(key, myBucket["next"]);
  }
}
