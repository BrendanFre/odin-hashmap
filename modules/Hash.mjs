export default function Hash(value) {
    const primeNumber = 29
    let hashCode = 0;
    for (let i = 0; i < value.length; i++){
        hashCode = (value.charCodeAt(i) + primeNumber * hashCode) % 16
    }

    return hashCode;    
};
