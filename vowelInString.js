function  vowelInString(array){
    let counter = 0;
    for(let i = 0; i < array.length ; i++){
        if(array[i] === 'a' || array[i] === 'e' || array[i] === 'i' || array[i] === 'o' || array[i] === 'u' || array[i] === 'A' || array[i] === 'E' || array[i] === 'I' || array[i] === 'O' || array[i] === 'U'){
            console.log(array[i]);
            counter++
        }
    }
    return counter;
}

const result = vowelInString("Shubham");
// console.log(result);