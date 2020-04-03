let arr = [];
for(let i = 0; i < 100; i++){
    arr[i] = Math.floor(Math.random()*100+1);
}

for(let j = 0; j < arr.length; j++){
    if(arr[j] % 2 == 0) {
        arr.splice(j,1);

        //윗 줄에 의해 원소 하나가 삭제될 경우 배열값들이 하나씩 앞으로 당겨진다.
        //따라서, 방금 탐색한 인덱스를 한번 더 짝수인지 판별해야 하므로 j-1 해준다.
        j = j-1;
    }
}

console.log(arr);
