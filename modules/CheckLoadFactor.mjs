export default function CheckLoadFactor(load, buckets, items, arr) {
  const loadFactor = buckets * load;
  if (items >= loadFactor) {
    arr.push({});
    return buckets + 1;
  } else return buckets;
}

//   checkLoadFactor(load, buckets, Length(theMap));
