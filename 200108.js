// let a = 10;
// function change(){
//     a = 20;
// }
// change();

// let name = "남지은";
// let age = 22;

// function hello(name){
//     console.log(name);
// }
// function getBirthYear(age){
//     console.log(new Date().getFullYear() - age);
// }
// //new Date().getFullYear() 현재 년도를 가리킴
// hello(name);
// getBirthYear(age);



// //지역 스코프
// //1. 함수 스코프
// let string = "hi";
// var dummy = "cool";

// function helloworld(){
//     let string = "hello world";
//     var dummy = "boo";
//     console.log(string); //hello world
// }
// helloworld();
// console.log(string); //hi
// console.log(dummy); //cool

// //2. 블록 스코프 let과 const
// let string = "hello";
// var dummy = "cool";

// {
//     let string = "hi";
//     const dummy = "hello";
//     console.log(string); //hi
//     console.log(dummy); //hello
// }
// console.log(string); //hello
// console.log(dummy); //cool

// //전역스코프는 함수, 블록 외부에서 선언된 변수로 참조 가능한 변수를 말한다
// //지역스코프는 함수스코프 블록스코프가 있다.
// //함수 스코프는 함수 내부에서 선언된 변수로 함수 내부에서만 참조 가능하다.
// //블록 스코프는 블록 내부에서 선언된 변수로 블록 내부에서만 참조 가능하다.

function first(){
    let a = 10;
    function second(){
        function third(){
            let a = 20; //변수 숨김
            function four(){
                console.log(a); // 20
            }
            four();
        }
        third();
    }
}
first();

// let user;
// (function(userNum){
//     let secret = ["남지은","박가영","이종호","이상학"];
//     user = secret[userNum];
// })(2);
// console.log(user);

// function a(){
//     console.log("hi");
// }
// let b = {
//     hello : function(){
//         console.log("it obj");
//     }
// };
// let c = {
//     function(){
//         console.log("hi there");
//     }
// }
// let callback = function(func){
//     func();
// }
// callback(a);
// (function(){
//     console.log("no name");
// })();


//클로저는 함수가 특정 스코프에 접근할 수 있도록 의도적으로 특정 스코프에서 정의하여, 스코프를 함수 주변으로 좁히는 것

//let globalFunc;
// {
//     let block = 20;
//     globalFunc = function(){
//         console.log(block);
//     }
// }
// globalFunc();
// {
//     const array = ["hi"];    
//     globalFunc = function(){
//         return array;
//     }
// }
// const itArray = globalFunc();
// console.log(itArray);
// itArray[1] = "im fine";
// console.log(itArray);
let globalFunc;
let idontknowpassword;
{
    let password = "wake";
    let phonenum = "01020771059";
    globalFunc = function(preventPass, setPass){
        if(password===preventPass){
            password = setPass;
            console.log(password);
        }else{
            console.log("비밀번호 올바르지 않음");
        }
    }
    idontknowpassword = function(phone, setPass){
        if(phonenum===phone){
            password = setPass;
            console.log(password);
        }else{
            console.log("전화번호 올바르지 않음");
        }
    }
}
globalFunc("wake up","변경된 비번"); //(wake, 변경된 비번)으로 하면 password 출력됨
idontknowpassword("01020771059", "변경된 비번");