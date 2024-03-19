export default () => {
  let aMap = new Array(16)
  
  const hash = (key) => {
    let hashCode = 0;
    const primeNumber = 31;
    
    
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    console.log(`${key} will go in the ${hashCode % aMap.length} bucket`);

    return hashCode;
  }

  const set = (key, value, array) => {
    const hashedKey = hash(key)
    const bucket = hashedKey % array.length
    aMap[bucket] = value
  }
  const get = (key, array) => {
    const hashedKey = hash(key)
    const bucket = hashedKey % array.length
    const bucketSearch = array.find(element => {
      return element[bucket][0] == hashedKey
    })
    
  }

  const getMap = () => {
    aMap.forEach(item => {return aMap[item]})
  }
  return {
    getHash: (key) => hash(key),
    setHash: (key, value) => set(key, value, aMap),
    getMap: () => getMap(),
    get: (key) => get(key)
  }
}