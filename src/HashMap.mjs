import Clear from "./Clear.mjs";
import Get from "./Get.mjs";
import Has from "./Has.mjs";
import Hash from "./Hash.mjs";
import Keys from "./Keys.mjs";
import Length from "./Length.mjs";
import Remove from "./Remove.mjs";
import Set from "./Set.mjs";
import Values from "./Values.mjs";
import Entries from "./Entries.mjs";
import BucketSize from "./BucketSize.mjs";

export default function HashMap(load = 0.75) {
  let theMap = [];
  let totalElements = 0;

  for (let i = 0; i < 16; i++) {
    theMap.push({});
  }

  let buckets = theMap.length;

  const bucketSize = () => {
    return BucketSize(theMap);
  };
  const get = (key) => {
    return Get(key, theMap);
  };

  const has = (key) => {
    return Has(key, theMap);
  };

  const hash = (value) => {
    return Hash(value);
  };

  const set = (key, value) => {
    return Set(key, value, theMap, buckets, load);
  };

  const showMap = () => {
    return theMap;
  };

  const totaled = () => {
    return totalElements;
  };

  const remove = (key) => {
    return Remove(key, theMap);
  };

  const length = () => {
    return Length(theMap);
  };

  const clear = () => {
    return Clear(theMap);
  };

  const keys = () => {
    return Keys(theMap);
  };

  const values = () => {
    return Values(theMap);
  };

  const entries = () => {
    return Entries(theMap);
  };

  return {
    hash,
    set,
    showMap,
    totaled,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
    theMap,
    bucketSize,
  };
}
