// callback function

function sayMyName(name) {
    console.log(name)
}

sayMyName(
    () => {
        console.log('Im a callback');
    }
)