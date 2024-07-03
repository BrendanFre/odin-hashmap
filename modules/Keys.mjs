export default function Keys(arr) {
  let keyList = [];
  arr.forEach((object) => {
    if (Object.keys(object).length == 0) {
      return;
    } else {
      const objKeys = Object.keys(object);
      objKeys.forEach((element) => {
        if (element != "next") {
          keyList.push(element);
        }
      });
      if (object["next"] != null) {
        return keyList.push(Keys(object["next"]));
      }
    }
  });
  return keyList;
}
