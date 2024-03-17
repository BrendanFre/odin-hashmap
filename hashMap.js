export default () => {
  const hash = (key) => {
    let hashCode = 0;
    const primeNumber = 31;
    
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    console.log('trying')

    return hashCode;
  }
  return {
    getHash: (key) => hash
  }
}