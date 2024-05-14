// let item = true ? console.log('true') : console.log('false');

let a = Number(prompt('a의 값을 숫자로 입력해주세요.'));
let b = Number(prompt('b의 값을 숫자로 입력해주세요.'));

let message = a == b ? '같은 숫자입니다.' :
    (a > b) ? 'a=' + String(a) + ' a가 큽니다.' : 'b=' + String(b) +' b가 큽니다.';

alert(message)