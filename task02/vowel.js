let str = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be."
let index = 0;
while(index <= str.length){
    
    let changed;
    if(index > 0){
        //이전에 찾은 모음의 바로 다음 인덱스부터 찾기위해(index+1)
        changed = str.substring(index+1); //새로 반환된 문자열
        let pre_index = index;
        
        index = changed.search(/[aeiouAEIOU]/)+index+1; 
        //새 문자열에서는 다시 0부터 세기 시작한다.
        //이전 문자열까지 세었던 인덱스 또한 0부터 세기 시작한다.
        //따라서, +1을 해주는 것이 필요하다.

        //search함수가 -1이 되는 경우 기존 인덱스 == 현재 인덱스 상태가 된다.
        //더이상 비교할 필요가 없으므로 break로 반복루프 빠지기 
        if(index == pre_index) break;
    }
    else{
        changed = str.substring(index);
        index = changed.search(/[aeiouAEIOU]/); 
    }
    console.log(index);
}
