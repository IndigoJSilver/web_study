//객체 리터럴을 변수에 직접 할당하여 스마트폰을 할당해라
//2가지 프로퍼티와 2가지 메서드를 가진 객체여야 한다
const phone = {
    number : "01020771059",
    model : "iphone 8",
    calling : function(numb){
        console.log(`${numb}에게 전화 거는 중`);
    },
    showMyModelId : function(){
        console.log(`모델명은 ${this.model}입니다.`);
    }
}
phone.showMyModelId();


//함수를 이용해서 user클래스를 만들어라
//3가지 전달인자를 받는다. 아이디, 비번, 주소를 받아 프로퍼티에 할당해라
//해당 객체의 비밀번호가 맞다면 2번째 전달인자로 받은 값으로 비번 프로퍼티를 변경하는 메서드를 만들어라 setMyPassword : {prev, next}{}
function user(id, password, address){
    let pw = password;
    return{//캡슐화
        id : id,
        setMyPassword : function(prev, next){
            if(prev === pw){
                pw = next;
                console.log("비밀번호 변경");
            }else{
                console.log("비번 다름");
            }
        }
    }
}
let nam = user("jini", "1234", "111");
console.log(nam);
nam.setMyPassword("1234","1");
nam.setMyPassword("12","1");

//함수로 만든 user클래스를 클래스 문법으로 만들어라
class user{
    constructor(id, password, address){
        let Id = id;
        let pw = password;
        let add = address;
        this.setMyPassword = function(prev, next){//캡슐화 this.setMyPassword = (prev, next)=>{}이거랑 동일 es6 문법이다
            if(prev === pw){
                pw = next;
                console.log("비번 변경");
            }else{
                console.log("비번 다름");
            }
        }
    }
}
const nam = new user("jini","123","111");
nam.setMyPassword("123","11");
nam.setMyPassword("123","11");


class Mammal{
    pregnant(){
        console.log("새끼를 낳습니다");
    }
}
class Dog extends Mammal{
    constructor(name){
        super();
        this.legs = 4;
        this.eyes = 2;
        this.tale = true;
        this.shout = "멍멍";
        this.name = name;
    }
    bite(){
        console.log(`${this.shout}`);
    }
}
class BoolDog extends Dog{
    constructor(name){
        super(name);
        this.skin = "미끈";
    }
}
class Dalmasian extends Dog{
    constructor(name){
        super(name);
        this.skin = "점박이";
    }
}
const gary = new BoolDog("게리");
const tom = new Dalmasian("톰");
console.log(gary);
console.log(tom);
gary.bite();
gary.pregnant();


class Machine{
    constructor(fuel){
        this.fuel = fuel;
        this.makeEnergyFromFuel = function(){
            console.log(`${this.fuel}을 태워서 에너지를 만듭니다`);
        }
    }
}
class Car extends Machine{
    constructor(fuel){
        super(fuel);
        this.wheel = 4;
    }
    drive(){
        console.log("주행 하겠습니다");
    }
}
class Airplane extends Machine{
    constructor(wheel, fuel){
        super(fuel);
        this.wing = 2;
        this.wheel = wheel;
    }
    fly(){
        console.log("날다");
    }
}
const fly = new Airplane(2, "휘발유");
const car = new Car("수소");
console.log(fly);
console.log(car);
fly.makeEnergyFromFuel();
const flyMixin = (superClass) => {
    return class extends superClass{
        fly(){
            console.log("날고 있습니다.");
        }
    }
}
const driveMixin = (superClass) => {//mixin은 다중상속을 받는 것 처럼 보이게 하는 방법
    return class extends superClass{
        drive(){
            console.log("달리고 있습니다.");
        }
    }
}
class Machin{
    makeEnergyFromFuel(){
        console.log(`${this.fuel}로 부터 에너지를 만드는 중입니다.`);
    }
}
class flyCar extends flyMixin(driveMixin(Machine)){
    constructor(fuel){
        super();
        this.fuel = fuel;
    }
    driveFly(){
        console.log("달리면서 날려고 하는 중입니다.");
    }
}
const tom = new flyCar("수소");
tom.fly();
tom.drive();
tom.makeEnergyFromFuel();

//상속이란 부모의 속성을 그대로 물려받고 새로운 속성을 추가하여 확장할 수 있는 기능
//this는 일반적으로 메소드를 호출한 객체가 저장되어 있는 속성