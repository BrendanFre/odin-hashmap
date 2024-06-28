export default function Vakues(arr) {
    let keyList = [];
    arr.forEach((object) => {
      for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
          keyList.push(object[key]);
        }
      }
    });
    return keyList;
  }
  