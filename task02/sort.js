let arr = [];
for(let i = 0; i < 100; i++){
    arr[i] = Math.floor(Math.random()*100+1);
}
arr.sort(compareN);
console.log(arr);

function compareN(i, j){
    return i-j;
}