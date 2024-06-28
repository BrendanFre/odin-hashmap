import Hash from "./Hash.mjs";

export default function Remove(key, arr) {
  const hashedKey = Hash(key);
  const bucketCount = arr.length;
  const selectedBucket = GetBucket(arr, bucketCount, hashedKey)
  const keys = Object.keys(selectedBucket);
  if (keys.includes(key)) {
    delete selectedBucket[key];
    return true;
  } else return "Key not in map";
}
