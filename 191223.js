// for(let i=25;i<=100;i++){
//     if(i%2==0){
//         console.log(`${i}는 짝수`);
//     }else{
//     console.log(`${i}는 홀수`);}
// }

// i=100;
// while(i>=0){
//     if(i%2==0){
//         console.log(`${i}는 짝수`);
//     }else{
//         console.log(`${i}는 홀수`);
//     }
//     i-=3;
// }

// const arr_1=[];

// const arr_2=[0,1,2,3,4,5,6,7,8,9,10];

// for(let i=0;i<=100;i++){
//     arr_1[i]=i;
// }
// let i=0;
// while(i<=arr_1.length-1){
//     if(arr_1[i]%2==0){
//         console.log(`${i}는 짝수`);    
//     }else{
//         console.log(`${i}는 홀수`);
//     }
//     i++;
// }

// for(let i=0;i<=arr_1.length-1;i+=3){
//     console.log(i);
// }

// const dummy=arr_1.slice(0,10);
// console.log(dummy);

let a = 10;
let b = 20;
function sum(numb_1, numb_2){//함수를 정의할 때 numb_1를 매개변수 '파라매터'라고 함
    console.log(numb_1);
    console.log(numb_2);
    console.log(numb_1+numb_2);
}
sum(a,b);//a, b는 전달인자, '어규먼트'라고 함
let c = 30;
sum(a,c);

function minus(n1,n2){
    console.log(n1);
    console.log(n2);
    console.log(n2-n1);
}
minus(10,30);

function sq(n_1,n_2){
    console.log(n_1);
    console.log(n_2);
    console.log(n_1*n_2);
}
sq(10,20);

function triple(num1,num2,num3){
    console.log(num1);
    console.log(num2);
    console.log(num3);
    console.log(num1+num2+num3);
}
triple(10,20,30);

function max(num1,num2,num3){
    console.log(num1);
    console.log(num2);
    console.log(num3);
    if(num1>num2&&num1>num3){
        console.log(num1);
    }else{
        if(num3>num1){
            console.log(num3);
        }else{
            console.log(num2);
        }
    }
}
max(30,10,20);

const array1=[];
function full(array){
    for(let j=0;j<=100;j++){
        array[j]=j;
    }
}
full(array1);
console.log(array1);

const array2=[];
function print(array){
    for(let i=0;i<=100;i++){
        array[i]=i;
        if(array[i]%2==0){
            console.log(`${i}는 짝수`);
        }else{
            console.log(`${i}는 홀수`);
        }
        
    }
}
print(array2);

function sum1(n1,n2){
    return n1+n2;
    console.log("helloworld");//여기에 이거 써도 출력 안됨 앞에 return 썼기 때문
}
let dummy1 = sum1(10,20);
console.log(dummy1);

let dummy_1=sum1(10,20);
let dummy_2=sum1(30,20);
console.log(dummy_1);
console.log(dummy_2);

function randomPush(){
    const random = Math.floor(Math.random()*100);
    const array = [];
    for(let i =0; i<random;i++){
        const value = Math.floor(Math.random()*10);
        array[i]=value;
    }
    return array;
}
let array_1=randomPush();
console.log(array_1);

let array_2=randomPush();
console.log(array_2);

function randomPrint(array_1){
    for(let i=0;i<array_1.length-1;i++){
        console.log(array_1[i]);
    }
}
randomPrint(array_1);

let dum=10;
function dummyCall(){
    dum =20;
    console.log(dum);
}
dummyCall();