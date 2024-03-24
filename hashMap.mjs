export default () => {
  let aMap = new Array(16)

  
  const hash = (key) => {
    let hashCode = 0;
    const primeNumber = 31;
    
    
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  const set = (key, value, array) => {
    const hashedKey = hash(key)
    const bucket = hashedKey % array.length
    if(aMap[bucket] == null){
      let theBucket = aMap[bucket]
      theBucket = {}
      theBucket[hashedKey] = value
      console.log(`New bucket contents ${theBucket}`)
    } else if (hashedKey in aMap[bucket]){
      aMap[bucket][hashedKey] = value
    } else aMap[bucket][hashedKey] = value
    console.log(`${key} goes into the ${bucket} bucket`);
  }

  const getBucket = (bucket) => {
    const theBucket = aMap[bucket]
    return console.log(theBucket);
  }
  const get = (key, array) => {
    const hashedKey = hash(key)
    const bucketHash = hashedKey % array.length
    const bucket = aMap[bucketHash]

    // const bucketSearch = bucket.find(element => {
    //   element == hashedKey
    // })
    // return bucketSearch
    
  }

  const getMap = () => {
    return aMap
  }
  return {
    hash: (key) => hash(key),
    setHash: (key, value) => set(key, value, aMap),
    getMap: () => getMap(),
    get: (key) => get(key, aMap),
    getBucket: (index)=> getBucket(index)
  }
}