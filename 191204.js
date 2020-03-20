// console.log('안녕 a');

// for(조건에 쓰일 변수; 반복 실행되는 조건; 반복 될때마다 실행될 코드){
//     반복적으로 실행될 코드
// }

// for(let i = 0; i>9; i++){
//     console.log('안녕 반복문');
// }

for(var i = 100; i>0; i--){
    if(i % 3 == 0){
        console.log(`${i}는 3의 배수입니다`);
    } else if(i % 2 == 0){
        console.log(`2의 배수입니다`);
    } else{
        console.log(`이도저도 아닙니다`);
    }
}

let a = 0;
while(a < 10){
    console.log(a);
    a++;
}

while(i <= 100){
    if(i % 5 == 0){
        console.log(`${i}는 5의 배수입니다`);
    }
    i++;
}
