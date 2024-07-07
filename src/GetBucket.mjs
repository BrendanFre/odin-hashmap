export default function GetBucket(arr, bucketCount, hashedKey) {
  return arr[(hashedKey % bucketCount) - 1];
}
