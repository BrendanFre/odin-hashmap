export default function Keys(arr) {
  let keyList = [];
  arr.forEach((object) => {
    for (const key in object) {
      if (Object.hasOwnProperty.call(object, key)) {
        keyList.push(key);
      }
    }
  });
  return keyList;
}
