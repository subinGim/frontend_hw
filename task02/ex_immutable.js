// 배열은 mutable. object타입.
var text1 = ['h', 'e', 'l', 'l', 'o'];
text1[0] = 'b';
console.log(text1);

// 문자열은 immutable.
// 문자열에서 하나의 글자를 배열과 같이 []로 접근할 수 있지만,
// 해당 글자를 바꿀 수는 없다.

var text2 = 'hello';
text2[0] = 'b';
console.log(text2);

// function log(a,b){
//     console.log(a+" * "+b+" = "+a*b);
// }
// log(3, 4);
// log(3, 2);
// log(7, 5);
// log(3, 4);
// log(3, 4);
// log(3, 4);