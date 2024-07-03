export default function Length(arr) {
  let totalKeys = 0;
  arr.forEach((element) => {
    if (Object.keys(element).length != 0) {
      totalKeys += lengthObj(element);
    }
  });

  return totalKeys;
}

const lengthObj = (object) => {
  let objectLength = 0;
  if (object["next"] == null) {
    return 1;
  } else {
    return (objectLength += lengthObj(object["next"]));
  }
};
