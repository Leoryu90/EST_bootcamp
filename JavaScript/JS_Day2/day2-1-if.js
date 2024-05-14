
function sum(x, y){
    if (x != null && y != null) {
        return x + y;
    }
    else {
        return console.log("두 가지 수를 전달해야 합니다");
    }
}

console.log(sum(5, ));


function add(val1, val2){
    if(String(val1 + val2) == 'NaN'){
        console.log('두 가지 수를 전달해야 합니다.');
    }
    return val1 + val2;
}

console.log(add(10, 1, 1));