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

  const getMap = () => {
    for(items in aMap){
      console.log(getMap(items));
    }
  }
  return {
    getHash: (key) => hash(key),
    setHash: (key, value) => set(key, value, aMap),
    getMap: () => getMap
  }
}