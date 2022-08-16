// Q. Find the smallest Number in given array

function displayMin(array){
    if(!array.length){
        return "Empty Array Not Allow";
    }
    else if(array.length === 1){
        return array[0];
    }
    else{
        let min = array[0];
        for(let i = 1; i < array.length; i++){
            if(array[i] < min){
                min = array[i];
            }
        }
        return min;
    }
}

const result = displayMin([5,6,9,8,11,1]);
console.log(result);

function findSmallest(array){
    if(!array.length){
        return "Empty Array Not Allow";
    }
    else if(array.length === 1){
        return array[0];
    }
    else{
        for(let i = 0 ; i < array.length; i++){
            let outerValue = array[i];
            for(let j = i + 1; j < array.length; j++){
                let innerValue = array[j];

                // Swap The Value
                if(innerValue < outerValue){
                    array[i] = innerValue;
                    array[j] = outerValue;
                    innerValue = array[j];
                    outerValue = array[i];
                }
            }
        }
        return array[0];
    }
}

const find = findSmallest([2,3,5,6,8,1]);
console.log(find);