//const array = [1,2,3,4,5,6,7,8];
//console.log(array[3]);

// const array = [];
// array[0] = 10;
// console.log(array[0]);
// array[1] = 20;
// console.log(array);

// array[2] = "hello";
// array[3] = "world";
// console.log(array[0],array[1],array[2],array[3]);
// for(let i = 0;i<4;i++){
//     console.log(array[i]);
// }

// const arr = [10,20,30];
// arr[5]=40;
// console.log(arr);

// const emp = [];
// for(let i=0;i<=99;i++){
//     emp[i]=i;
//     //console.log(emp[i]);
// }
// for(let i=0;i<=99;i++){
//     console.log(emp[i]);
// }
// for(let i=99;i>=0;i--){
//     console.log(emp[i]);
// }

// console.log(emp.length);//얘는 배열의 크기를 말함

// let i=0;
// while(i<emp.length){
//     console.log(emp[i]);
//     i++;
// }

// let a=emp.length-1;
// while(a>=0){
//     console.log(emp[a]);
//     a--;
// }

// const random = Math.floor(Math.random() * 100); //0부터 99까지 랜덤한 숫자
// const array_ = [];
// for(let i =0; i<random; i++){//0부터 9까지 랜덤한 숫자를 array_에 넣는 반복문
//     array_[i]=Math.floor(Math.random()*10);
// }
// console.log(array_);

const random = Math.floor(Math.random() * 100); //0부터 99까지 랜덤한 숫자
const array_ = [];
for(let i =0; i<random; i++){
    array_[i]=Math.floor(Math.random()*10);
}
for(let i=0; i<array_.length; i++){
    console.log(array_[i]);
}
for(let i=array_.length-1;i>=0;i--){
    console.log(array_[i]);
}
for(let i =0; i<array_.length;i++){
    if(array_[i]==0){
        console.log(`${i}번째 방에 있는 값은 0이다`);
        break;
    }
    if(array_[i]%2==0){
        console.log(`${i}번째 방에 있는 ${array_[i]}값은 짝수입니다`);
    }else{
        console.log(`${i}번째 방에 있는 ${array_[i]}값은 홀수입니다`);
    }
}

const array1 = [1,2,3];
array1.push("done");
console.log(array1);
array1.pop();
const last = array1.pop();
console.log(array1);
console.log(last);
console.log(array1.slice(0,1));
console.log(array1.reverse());
//sort쓰면 마구잡이로 된 배열을 순차대로 나열해줌