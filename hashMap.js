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

  const set = (key, value) => {}
  return {
    getHash: (key) => hash(key)
  }
}