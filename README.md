# The Odin Project - HashMap Project

Build your own Hashmap

[![Node.js CI](https://github.com/BrendanFre/odin-hashmap/actions/workflows/nodeGithubTest.yml/badge.svg)](https://github.com/BrendanFre/odin-hashmap/actions/workflows/nodeGithubTest.yml)

## Tasks

- [x] **hash(key)** takes a key and produces a hash code with it. We did implement a fairly good hash function in the previous lesson. As a reminder:

- [x] **set(key, value)** takes two arguments, the first is a key and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten or we can say that we update the key’s value (e.g. Carlos is our key but it is called twice: once with value I am the old value., and once with value I am the new value.. From the logic stated above, Carlos should contain only the latter value).

- [x] get(key) takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
- [x] has(key) takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
- [x] remove(key) takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.
- [x] length() returns the number of stored keys in the hash map.
- [x] clear() removes all entries in the hash map.
- [x] keys() returns an array containing all the keys inside the hash map.
- [x] values() returns an array containing all the values.
- [x] entries() returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]
