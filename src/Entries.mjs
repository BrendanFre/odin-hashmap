export default function Entries(arr) {
  let entryList = [];
  arr.forEach((object) => {
    if (Object.keys(object).length === 0) {

    } else {
      const objKeys = Object.keys(object);
      objKeys.forEach((element) => {
        if (element !== "next") {
          entryList.push([element, object[element]]);
        }
      });
      if (object["next"] != null) {
        return entryList.push(Entries(object["next"]));
      }
    }
  });
  return entryList;
}
