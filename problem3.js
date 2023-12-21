const converToLower = (string) => {
    return (string.toLowerCase())
}




const converArrayToLowercase = (arr) => {
    const newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(converToLower(arr[i]))
    }
    return newArr;
}



const arr = ["MA", "SA", "I", "SCH", "OOL"];


console.log(converArrayToLowercase(arr))