import Hash from "./Hash.mjs";

export default function Has(key, arr) {
    const hashedKey = Hash(key)
    const bucketCount = arr.length
    const selectedBucket = arr[bucketCount % hashedKey]
const keys = Object.keys(selectedBucket)
if(keys.includes(key)) {
    return true
} else return false
    
};
