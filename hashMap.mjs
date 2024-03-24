export default () => {
  let aMap = new Array(16);

  const hash = (key) => {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  };

  const checkKey = (hashedKey, value, bucket) => {
    console.log(bucket);
    if (hashedKey in bucket) {
      bucket[hashedKey] = value;
      return `Existing key in bucket ${bucket} has been updated to ${value}`;
    } else {
      bucket[hashedKey] = value;
      return `New key added to bucket ${bucket} with value ${value}`;
    }
  };

  const set = (key, value) => {
    const hashedKey = hash(key);
    const bucket = getBucket(key);
    console.log(typeof aMap[bucket]);

    if (typeof aMap[bucket] != "object") {
      aMap[bucket] = {};
      const newObject = aMap[bucket];
      newObject[hashedKey] = value;
      return `The key: ${key} and value: ${value} has been pushed to bucket ${bucket}`;
    } else {
      return checkKey(hashedKey, value, aMap[bucket]);
    }
  };

  const getBucket = (key) => {
    const hashedKey = hash(key);
    return hashedKey % aMap.length;
  };

  const get = (key) => {
    const hashedKey = hash(key);
    const bucket = getBucket(key);
    if (typeof aMap[bucket] != "object") {
      return null;
    } else {
      if (hashedKey in aMap[bucket]) {
        return aMap[bucket][hashedKey];
      } else return null;
    }
  };

  const has = (key) => {
    const hashedKey = hash(key);
    const bucket = getBucket(key);
    if (typeof aMap[bucket] != "object") {
      return false;
    } else {
      if (hashedKey in aMap[bucket]) {
        return true;
      } else return false;
    }
  };
  const remove = (key) => {
    const hashedKey = hash(key);
    const bucket = getBucket(key);
    if (typeof aMap[bucket] != "object") {
      return false;
    } else {
      if (hashedKey in aMap[bucket]) {
        delete aMap[bucket][hashedKey];
        return true;
      } else return false;
    }
  };
  const clear = () => {
    aMap = Array(16);
    return true;
  };

  const length = () => {
    const keyList = [];
    aMap.forEach((bucket) => {
      if (typeof bucket == "object") {
        const subList = Object.keys(bucket);
        subList.forEach((key) => {
          keyList.push(key);
        });
      }
    });
    return keyList;
  };

  const getContents = (bucket) => {
    if (typeof bucket != "number") {
      return null;
    } else if (bucket > aMap.length || bucket < 0) {
      return null;
    } else {
      return JSON.stringify(aMap[bucket]);
    }
  };

  return { set, get, has, remove, clear, getBucket, length, getContents };
};
