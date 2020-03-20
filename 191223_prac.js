a=20;
b=30;
c=40;

if(a > b){
    console.log("a는 b보다 큽니다");
}else{
    if(c>b){
        console.log("c는 b보다 큽니다");
    }else{
        console.log("b는 c보다도 큽니다");
    }
    //console.log("b는 a보다 큽니다");
}

if(b>a&&b<c){
    console.log("b는 c와 a의 median값입니다");
}

for(let i=0;i<=10;i++){
    console.log(i);
}

for(let i=50;i>=0;i--){
    if(i%2==0){
        console.log(`${i}는 짝수입니다`);
    }else{
        console.log(i);
    }
}

i=25;
while(i<=100){
    if(i%2!=0){
        console.log(`${i}값은 홀수입니다`);
    }else{
        console.log(i);
    }
    i++;
}