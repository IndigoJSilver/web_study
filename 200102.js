// function randomArray(){
//     const length = Math.floor(Math.random()*100);
//     const array = [];
//     for(let i = 0; i<length; i++){
//         array[i]=Math.floor(Math.random()*10);
//     }
//     return array;
// }
// const array = randomArray();
// console.log(array);

// function print(){
//     for(let i = 0; i<array.length; i++){
//         array[i]=Math.floor(Math.random()*10);
//     }
//     return array;
// }
// const arr = print();
// console.log(arr);

// function compare(n1, n2){
//     if(n1>n2){
//         return n1;
//     }else{
//         return n2;
//     }
// }
// const comparedResult = compare(10, 20);
// console.log(comparedResult);

let ten = 10;
function change(n){
    n=20;
    console.log(n);
}
change(ten);
console.log(ten);

let hiThere = "hi there";
function changeString(string){
    string = "hello world";
    console.log(string);
}
changeString(hiThere);
console.log(hiThere);

const array = [10,20,30];
function push(arr){
    arr[3]=40;
    console.log(array);
}
push(array);
console.log(array);

const sum = function(n1, n2){
    return n1+n2;
}
let a = sum(10, 20);
console.log(a);

const b = function c(){
    console.log(10);
}
b();

//익명 함수를 이용한 콜백
function showCompareResult(compareFunc, n1, n2){
    console.log(compareFunc(n1, n2));
}
showCompareResult(function(n1, n2){
    if(n1>n2){
        return n1;
    }else{
        return n2;
    }
},10,20);

function merry(){
    console.log("hello");
    (function(){
        console.log("fine");
    })();
}
merry();

let initText;

(function(number){
    const textlist = ["is Odd Text", "is even text"];
    if(number%2==0){
        initText= textlist[0];
    }else{
        initText=textlist[1];
    }
})(5);
console.log(initText);

//function을 안써도 되는 경우
const f1 = () => {
    console.log("it's arrow function");
    console.log("hi");
}

//매개변수가 한 개일 때 소괄호를 제거 할 수 있다
const f2 = name => {
    console.log(name);
}

//실행할 코드가 한 개 일 때 중괄호도 제거 가능
const f3 = ()=> console.log("hi");
