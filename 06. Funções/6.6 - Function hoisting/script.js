// function hoisting

sayMyName()

function sayMyName() {
    console.log('Diego');
}

sayMyName2()

var sayMyName2 = function () {
    console.log('Diego Silva');
}