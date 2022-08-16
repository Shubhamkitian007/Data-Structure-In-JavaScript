
const arrayFile = [22,33,44,55,66,77,88,12,23,34,45,65,67,89,100];

function findArray(){
    const val = document.getElementById('input').value;
    // console.log(val);
    // console.log(arrayFile[val]);
    // for(let i = 0 ; i < arrayFile.lengt ; i++){
    // }
    if(val < arrayFile.length && typeof parseInt(val) === "number" || val < 0 ){
        console.log(arrayFile[val])
    }
    else{
        console.log("please enter valid index Number");
    }
}