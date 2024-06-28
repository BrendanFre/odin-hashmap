export default function GetBucket(arr, bucketCount, hashedKey) {
  return arr[(bucketCount % hashedKey) - 1];
}
