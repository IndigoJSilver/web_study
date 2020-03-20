//다시 공부
let c; //c는 스코프가 다르기 때문에 string에 접근할 수 없음 그래서 클로저 생성해서 접근할 수 있도록 해야함
{
    let string = "hello world";
    setClosure = function(newString){
        string = newString;
    }
    getClosure = function(){
        console.log(string);
    }
    c = string;
}
console.log(c);
setClosure("hi");
console.log(c);
getClosure();


const myBoyfriend = { //프로피티
    eye : 2, // key : value
    age : 24,
    face : "handsome in the world",
    hair : "풍성",
    tall : 187,
    weight : 65,
    sayMyName : function(){
        console.log("안녕 나는 네 남친이야");
    }
}
console.log(myBoyfriend.face);
myBoyfriend.sayMyName(); //메서드

//프로피티 3개 만들고, 메서드 2개 만들어라. 출력해라

const namjieun = {
    eye : 2,
    age : 22,
    face : "awesome",
    hair : "a lot of",
    tall : 155,
    say : function(){
        console.log("안녕 난 남지은이야");
    }
}
const alice = {
    eye : 2,
    age : 25,
    face : "awesome",
    hair : "a lot of",
    tall : 175,
    say : function(){
        console.log("난 엘리스");
    }
}
const cindy = {
    eye : 2,
    age : 21,
    face : "awesome",
    hair : "a lot of",
    tall : 160,
    say : function(){
        console.log("난 신디");
    }
}
console.log(namjieun.eye);
console.log(alice.face);
console.log(cindy.tall);
cindy.say();
alice.say();

function fishBread(so){
    return{
        반죽 : "밀가루",
        만든사람 : "지니",
        언제만듦: new Date(),
        내용물 : so
    }
}
const first = fishBread("크림");
const second = fishBread("피자");
console.log(first);
console.log(second);

class TV{
    constructor(display, speaker, who){
        this.display = display;
        this.speaker = speaker;
        this.whoMade = who;
        this.chanel = 7;
    }
    presentChanel(){
        return this.chanel;
    }
    changeChanel(setchanel){
        this.chanel = setchanel;
    }
    up(){
        return ++this.chanel;
    }
    down(){
        return --this.chanel;
    }
}
const samsungTv = new TV("samsung", "화면카던", "samsung")
console.log(samsungTv);
console.log(samsungTv.presentChanel());
samsungTv.changeChanel(20);
console.log(samsungTv.presentChanel());

function tV(display){
    return {
        display : display,
        speaker : speaker,
        whoMade : who,
        chanel : 7
    }
}

//스마트폰 class 전화번호, 통신사, 제조사
//메서트 call을 만들어라
//전화()인자로 스트링을 받고 console.log(`${string}에 전화를 거는 중입니다`);

class Smartphone{
    constructor(address, telecome, made){
        this.address = address;
        this.telecome = telecome;
        this.made = made;
    }
    call(address){
        console.log(`${address}에 전화를 거는 중입니다`);
    }
}
const iphone = new Smartphone("01020771059", "skt", "apple");
iphone.call("0102012323");
