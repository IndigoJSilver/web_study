//es6 문법
class TV{
    constructor(display, speaker, who){
        this.display = display;
        this.speaker = speaker;
        this.whoMade = who;
        this.chanel = 7; //this는 이 클래스 안에서 자기 자신을 칭하는 것임
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

//es5 문법
function tv(display, speaker){
    return{
        display:display,
        speaker:speaker,
    }
}
let t = new tv("hi");
console.log(t.display);