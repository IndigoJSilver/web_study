//주어진 문자열이 palindrome인지 체크하는 문제

function palindrome(str) {
    var len = Math.floor(str.length / 2);
    for (var i = 0; i < len; i++)
      if (str[i] !== str[str.length - i - 1]){
        console.log("not palindrome");
        return 0;
      }else{
        console.log("palindrome");
        return 1;
      }
}

palindrome("abcdcbadd");