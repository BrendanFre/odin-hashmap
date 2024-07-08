export default function Keys(arr) {
  let keyList = [];
  if (Array.isArray(arr)) {
    arr.forEach((object) => {
      if (Object.keys(object).length === 0) {

      } else {
        const objKeys = Object.keys(object);
        objKeys.forEach((element) => {
          if (element !== "next") {
            keyList.push(element);
          }
        });
        // if (object["next"] != null) {
        //   console.log(Keys(object["next"]));
        // }
      }
    });
  } else {
    const theKeys = Object.keys(arr);
    // console.log(theKeys);
    theKeys.forEach((element) => {
      return element;
    });
    return theKeys;
  }
  return keyList;
}