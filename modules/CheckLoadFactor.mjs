import Length from "./Length.mjs";

export default function CheckLoadFactor(load, buckets, items, arr) {
  const loadFactor = buckets * load;
  const numberItems = Length(items);
  if (Length(items) >= loadFactor) {
    items.push({});
  }
  return buckets + 1;
}

//   checkLoadFactor(load, buckets, Length(theMap));
