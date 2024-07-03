export default function Values(arr) {
  let keyList = [];
  arr.forEach((object) => {
    if (Object.keys(object).length == 0) {
      return;
    } else {
      const objKeys = Object.keys(object);
      objKeys.forEach((element) => {
        if (element != "next") {
          keyList.push(object[element]);
        }
      });
      if (object["next"] != null) {
        return keyList.push(Values(object["next"]));
      }
    }
  });
  return keyList;
}
