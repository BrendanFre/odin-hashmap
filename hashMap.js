export default () => {
  const hash = (key) => {
    let hashCode = 0;
    const primeNumber = 31;
    let aMap = []
    
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  const set = (key, value) => {
    const hashValue = hash(key)

  }
  return {
    getHash: (key) => hash(key)
  }
}