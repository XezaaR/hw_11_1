let a = prompt("Input a");
let b = prompt("Input b");
function fun1(a,b) {
    if (a > b) {
        return alert("a > b");
    }
    if (a < b) {
        return alert("a < b");
    }
    if (a == b) {
        return alert("a == b");
    }
    if (a === b) {
        return alert("a === b");
    }
}
fun1(a,b);

//function 2

const button = document.querySelector('.btn');
function fun2() {
    c = prompt("Input c");
    if (c >= 0) {
        console.log(c.includes("0"));
    }
}
button.addEventListener("click", fun2);

//function 3

const button1 = document.querySelector('.btn1');
function fun3() {
    let n = 0;
    while (n < 10) {
        alert('n+1');
        n++;
        console.log(n);
    }
}
button1.addEventListener("click", fun3);

//function 4

const button2 = document.querySelector('.btn2');
function fun4() {
    for (let k = 1; k < 10; k++){
        alert(k);
    }
}
button2.addEventListener("click", fun4);
