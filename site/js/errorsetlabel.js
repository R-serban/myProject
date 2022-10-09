// const xhr = new XMLHttpRequest();
// xhr.response()

fetch("http://localhost:3000/")
.then(
    res => res.text()
)
.then(answer => console.log(answer))
.catch(e => console.log(e));