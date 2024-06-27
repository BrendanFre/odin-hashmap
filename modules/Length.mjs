export default function Length(arr) {
    let totalKeys = 0;
    arr.forEach(element => {
        const keysList = Object.keys(element)
        totalKeys += keysList.length
    });

    return totalKeys
    
};
