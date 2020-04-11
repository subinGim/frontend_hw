let persons1 = [];
for(let i=0; i<10; i++){
    persons1[i] = {name: "홍길동", age: i+16};
}

let persons2 = [];
for(let j=0; j<persons1.length; j++){
    persons2[j] = Object.assign({},persons1[j]);
}
console.log(persons2);