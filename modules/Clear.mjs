export default function Clear(arr) {
    arr.forEach(object => {
            for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            delete object[key]
        }
    }
    });

    return 'clear'

}