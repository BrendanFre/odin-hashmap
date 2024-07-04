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
    if(key == 'hat'){
      console.log('inner');
    }
    if (key != 'next'){
      keyCount += 1
    } else if(object[key] != null){
      return keyCount = keyCount + Length(object[key])
    }
    }
  return keyCount
  }
