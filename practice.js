let a = 20; // 그냥 a = 20; 이렇게 하면 var로 선언됨
let b = 30;
let c = 40;
if(a > b){
    console.log("a는 b보다 큽니다");
} else{
    console.log("b=a 보다 큽니다");
    if(c > b){
        console.log("c는 b보다 큽니다");
    } else{
        console.log("b는 c보다도 큽니다");
    }
}

if(b > a && b < c){
    console.log("b는 c와 a의 median값입니다");
}
for(var i = 0; i<11;i++){
    console.log(i);
}

for(var i=50;i>=0;i--){
    if(i%2==0){
        console.log(`${i}는 짝수입니다`);
    }else{
        console.log(`${i}는 홀수입니다`);
    }
}

var i=25;
while(i<=100){
    if(i%2!=0){
        console.log(`${i}값은 홀수입니다`);
    }else{
        console.log(i);
    }
    i++;
}

let i=0;
while(i<10){
    if(i%2==0){
        i++;
        continue;
    }
    console.log(i);
    i++;
}
//배열은 비슷한것들끼리 한줄로 나열해 놓은 것
//데이터타입? string, number머 이런 것들
//const array = [1,2,3,4,5]; 이렇게 배열 씀
//const arrry = []; 선언과 할당을 동시에 함
//배열에서 index는 방 번호를 의미