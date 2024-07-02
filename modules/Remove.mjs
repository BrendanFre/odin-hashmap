import Hash from "./Hash.mjs";
import GetBucket from "./GetBucket.mjs";

export default function Remove(key, arr) {
  let myBucket;
  if (Array.isArray(arr)) {
    const hashed = Hash(key);
    myBucket = GetBucket(arr, arr.length, hashed);
  } else myBucket = arr;
  if (key in myBucket) {
    return Cleanse(myBucket)
  } else if (myBucket == {}) {
    return false;
  } else if (myBucket["next"] == null) {
    return false;
  } else {
    arr = Remove(key, myBucket["next"]);
  }
}

const Cleanse = (node) => {
  if(node['next'] == null) {
    for (const prop in node) {
        delete node[prop]
      }
    } else {
    const {key, next} = node['next']
    console.log(key + next);
  }
  
}
