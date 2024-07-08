import Length from './Length.mjs'
import Entries from './Entries.mjs'
import Set from './Set.mjs'

export default function Grow (arr, load) {
  if (Array.isArray(arr)) {
    const currentBuckets = arr.length
    const loadFactor = (currentBuckets * load)
    const itemCount = Length(arr)
    if (itemCount > loadFactor) {
      const newBuckets = currentBuckets * 2
      const entries = Entries(arr)
      if (entries === 'undefined') {
        console.error('entries empty')
      } else {
        arr = []
        for (let i = 0; i < newBuckets; i++) {
          arr.push({})
        }
        entries.forEach(item => {
          if (item.length === 2) {
            Set(item[0], item[1], arr, newBuckets, load)
          }
        })
      }
    }
  }
  return arr
}