import hash from './hashMap.js'

const checkValidIndex = (index, buckets) => {
    if (index < 0 || index >= buckets.length) {
        throw new Error("Trying to access index out of bound");
    }
}


const theMap = hash()

const newParagraph = document.createElement('p')
const app = document.querySelector('.app')

newParagraph.innerText = theMap.setHash('twelve')

theMap.setHash('first', 'twelve')

console.log(theMap.getHash('first'))

app.appendChild(newParagraph)