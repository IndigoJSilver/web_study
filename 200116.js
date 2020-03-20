const namjieun = { //이게 객체 리터럴
    eye : 2,
    mouth : 1,
    height : 155,
    saymyname : function(){ // 메서드. saymyname 자체가 메서드임. 이 객체만 접근할 수 있는 메서드.
        console.log(`안녕 나는 ${this.eye}개의 눈을 가지고 있어`);
    }
}
console.log(namjieun);
namjieun.saymyname(); //메서드

//saymyname()를 호출하면 안나옴. 왜냐? 이 객체만 접근할 수 있기 때문


//만든 변수의 프로퍼티 중 한 가지를 출력하고 메서드를 호출해라
console.log(namjieun.eye);
namjieun.saymyname();


//함수를 이용해서 스마트폰 클래스를 만들어라. 이 때 전달인자로 모델명, 통신사, 전화번호를 매개변수로 받아 각 프로퍼티에 할당하고,
//전달인자로 받은 전화번호로 받아 `${나의 전화번호}가 ${받은 번호}에 전화거는 중입니다` 라고 출력하는 메서드를 만들어라.
function smartphone(model, carrier, number){
    return{
        model : model, //키 : value
        carrier : carrier,
        number : number,
        calling : function(phonenumber){
            console.log(`${this.number}가 ${phonenumber}에 전화거는 중입니다.`);
        }
    }
}
const iphone = smartphone("iphone 8", "skt", "01020771059");
console.log(iphone);
iphone.calling("010222"); //calling 안에 괄호에 있는 숫자는 전달인자임

class smartphone2{
    constructor(model, carrier, number){
        this.model = model;
        this.carrier = carrier;
        this.number = number;
    }
    showInfo(model, carrier, number){
        console.log(`내가 가진 기종은 ${model}, 통신사는 ${carrier}, 번호는 ${number}이다.`);
    }
}
const iphone2 = new smartphone2("iphone 8", "skt", "01020771059");
iphone2.showInfo("iphone 8", "skt", "01020771059");


//캡슐화는 객체내부에 있는 프로퍼티를 숨기고 접근을 제한하는 방법
function user(id, password, phonenum){
    let pw = password;
    let num = phonenum;
    let myfriend = [];
    return{
        id : id,
        setPassword : function(prePw, setPw){
            if(prePw === pw){
                pw = setPw;
                console.log("비밀번호가 변경되었습니다");
            }else{
                console.log("비밀번호가 다릅니다");
            }
        },
        login : function(id, password){
            if(id === this.id && password === pw){
                console.log("접속 하였습니다");
            }else{
                console.log("비밀번호가 틀렸습니다");
            }
        },
        number : function(phonenum){
            if(num === phonenum){
                console.log(`지금 비밀번호는 ${pw}입니다. 비밀번호를 변경해 주세요`);
            }else{
                console.log("전화번호가 틀렸습니다.");
            }
        },
        setPushMyfriend : function(number){
            myfriend.push(number);
            console.log(myfriend);
        },
        getMyfriend : function(){
            return myfriend;
        }
    }
}
let nam = user("jini", "1234", "0102323");
console.log(nam);
nam.login("jini","1234");
nam.number("0102323");
nam.setPushMyfriend(1234);
console.log(nam.getMyfriend());
const hackingRoot = getMyfriendlist();
hackingRoot[4] = "파국이다";
console.log(nam.getMyfriendlist());


//자바스크립트의 객체의 프로퍼티는 모두 퍼블릭 성격을 가진다
// 이 말의 즉슨 외부에서 프로퍼티를 변경 할 수 있다
// 그러나 보여지지 않거나, 함부로 설정할 수 없게 끔 해야 하는 값들도 존재한다
//이 때 해당 값을 스코프를 전역으로 두어 객체에서 직접 접근이 안 되게 끔 하는 것이 캡슐화이다.
// get메서드와 set메서드로 해당 변수의 값을 얻거나 변경할 수 있도록 제한하는 패턴을 모듈 패턴이라 한다.

class user{
    constructor(id, pw, phonenumber){
        let password = pw;
        let num = phonenumber;
        let lock = 0;
        this.id = id;
        this.getmyphonenumber = function(password_1){
            if(password_1 === password){
                return num;
            }else{
                return "비밀번호가 다릅니다";
            }
        }
        this.login = function(id_1, password_1){
            if(id_1 === this.id && password === password_1){
                console.log("접속하였습니다");
            }else{
                console.log("비밀번호 혹은 아이디가 다릅니다");
                lock++;
                console.log(`${lock}번 틀렸습니다`);
                if(lock == 5){
                    console.log("접근 제한 되었습니다.");
                }
            }
        }
    }
}
const namjieun = new user("jini","1234","112");
console.log(namjieun);
namjieun.login("jini","12");
namjieun.login("jini","12");
namjieun.login("jini","12");
namjieun.login("jini","12");
namjieun.login("jini","12");
