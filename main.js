import hash from './hashMap'

const checkValidIndex = (index, buckets) => {
    if (index < 0 || index >= buckets.length) {
        throw new Error("Trying to access index out of bound");
    }
}


const theMap = hash()

const newParagraph = document.createElement('p')

newParagraph.innerText = theMap.hash('twelve')