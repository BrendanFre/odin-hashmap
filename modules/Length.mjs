export default function Length(arr) {
  let totalKeys = 0;
  if(Array.isArray(arr)){
  arr.forEach((element) => {
  if(Object.keys(element).length > 1){
      return totalKeys += lengthObj(element)
      }
    })}

  return totalKeys;
}

const lengthObj = (object) => {
  let keyCount = 0
  for (const key in object) {
    if (object[key] !=null){
      if(key != 'next'){
        keyCount++
      } else if (key == 'next') {
      keyCount += lengthObj(object[key])
      }
    }
    }
  return keyCount
  }
