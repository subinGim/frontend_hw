let count = 0;
function timer(msg){
    if(count < 10){
        console.log(msg,count+1, new Date());
        count++;
    }
    else clearInterval();

}
setInterval(timer, 1000, "횟수 : ");