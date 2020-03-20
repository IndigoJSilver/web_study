let a = 20;
let b = 30;
let c = 40;

a > '40' ? console.log('a는 40보다 큽니다.') : console.log('a는 40보다 작습니다.');

a >= b ? console.log('a는 b보다 크거나 같습니다') : console.log('a는 b보다 크거나 같지 않습니다');

if(a > b){
    console.log('a는 b보다 큽니다');
} else if(a < b){
    console.log('a는 b보다 작습니다');
} else if(a == b){
    console.log('a는 b와 같습니다');
}
if(b > a && c > b){
    console.log('c가 제일 큽니다');
}
if(a > b || c > b){
    console.log('helloworld');
}
switch(a) {
    case 20 :{
        console.log('a는 20입니다');
        break;
    }
    case 30 : {
        console.log('a는 30입니다');
        break;
    }
    default : {
        console.log('이것도 저것도 아닙니다');
        break;
    }
}

b > c ? console.log('b가 c보다 큽니다') : console.log('c가 b보다 큽니다');


let d = b > c ? 30 : 40;
console.log(d);