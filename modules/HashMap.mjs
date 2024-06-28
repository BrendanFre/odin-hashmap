import Clear from "./Clear.mjs";
import Get from "./Get.mjs";
import Has from "./Has.mjs";
import Hash from "./Hash.mjs"
import Keys from "./Keys.mjs";
import Length from "./Length.mjs";
import Remove from "./Remove.mjs";
import Set from "./Set.mjs";
import Values from "./Values.mjs";
import Entries from "./Entries.mjs";

export default function HashMap() {
    let theMap = []
    let totalElements = 0;
    const buckets = 16
    for (let i = 0; i < 16; i++) {
        theMap.push({})
    }

    const get = (key) => {
        return Get(key, theMap)
    }

    const has = (key) => {
        return Has(key, theMap)
    }
  
    const hash = (value) => {
        return Hash(value);
    }

    const set = (key, value, arr = theMap, theBuckets = buckets) => {
        Set(key, value, arr, theBuckets)
        totalElements += 1
    }

    const showMap = () => {
        return theMap
    }

    const totaled = () => {
        return totalElements
    }

    const remove = (key) => {
        return Remove(key, theMap)
    }

    const length = () => {
        return Length(theMap)
    }

    const clear = () => {
        return Clear(theMap)
    }

    const keys = () => {
        return Keys(theMap)
    }

    const values = () => {
        return Values(theMap)
    }

    const entries = () => {
        return Entries(theMap)
    }

    return {hash, set, showMap, totaled, get, has, remove, length, clear, keys, values, entries}
    
};
