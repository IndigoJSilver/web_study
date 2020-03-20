function sum(n1, n2){
    return n1 + n2;
}
const result = sum(10, 20);
console.log(result);

function compare(n1, n2){
    if(n1 > n2){
        return n1;
    }else{
        return n2;
    }
}
const compareResult = compare(10, 20);
console.log(compareResult);

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
    for(let i=0;i<array_1.length;i++){
        console.log(array_1[i]);
    }
}
randomPrint(array_1);
