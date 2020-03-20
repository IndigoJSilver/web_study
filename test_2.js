console.log(3);
console.log(0);
console.log(0.1+0.2);

console.log(0x000ff); //16진수
console.log(0o0022); //8진수
console.log(21.5); //십진수
console.log(3.0e4); //지수계산
console.log(Infinity); //무한대
console.log(-1.6e7); //음수 지수 계산
console.log(-Infinity); //음의 무한대
console.log(NaN); //숫자가 아님

console.log(Math.pow(3,2)); //3의 2승
console.log(Math.round(10.6)); //반올림
console.log(Math.ceil(10.2)); //올림
console.log(Math.floor(10.6)); //내림
console.log(Math.sqrt(9)); //루트
console.log(Math.random()); //0부터 1.0까지 랜덤한 숫자를 반환합니다

// 문자열은 "" '' `` 

let hello_my_dear = "hello my man";
let response = 'hello my girl';
let asdasd = String("kimaaaaaaaaaaaaaaaaaaaa");
console.log(asdasd);
console.log(" hi my name is \"nam ji eun\" ");
console.log(' hi my name is \'nam ji eun\' ');
console.log(" aaa'aaaaa'aaa "); //큰따옴표 안에 작은따옴표는 역슬래쉬 안쓰고 그냥 쓰면 됨
console.log(hello_my_dear);
console.log(response);

let my_name = "ji eun";
let family_name = "nam";

console.log(family_name + my_name);

let my_full_name = "hello " + my_name + family_name;


const where = "article";
const who = "admit";
const getNumb = "6";

// const url = "http://www.naver.com/" + where + "/" + who + "&"
const url = `http://www.naver.com/where=${where}&who${who}&numb=${getNumb}`;
console.log(url);

console.log(my_full_name);

console.log(10<20);