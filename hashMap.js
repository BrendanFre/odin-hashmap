export default () => {
  const hash = (key) => {
    let hashCode = 0;
    const primeNumber = 31;
    let aMap = new Array(16)
    
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    console.log(`${key} will go in the ${hashCode % aMap.length} bucket`);

    return hashCode;
  }

  const set = (key, value) => {
    const hashedKey = hash(key)
    const bucket = hashedKey % aMap.length()
    aMap[bucket] = hashedKey
  }
  return {
    getHash: (key) => hash(key),
    setHash: (key, value) => set(key, value)
  }
}