export default function Hash(value) {
  if (typeof (value) !== 'undefined') {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < value.length; i++) {
    hashCode = primeNumber * hashCode + value.charCodeAt(i);
  }
    return hashCode
  }
}
