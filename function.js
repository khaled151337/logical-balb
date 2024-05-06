


function light(show) {
    let pic;
    if (show == 0) {
        pic = "Off balp.png"
    }

    else{
        pic = "On balp.png"
    }

    document.getElementById('light').src = pic;
}


let arry = ["hello", "Papped", "Jocker", "Ironman", "Hulk"];
console.log(typeof(arry));
console.log(arry);

arry = null;

console.log(arry);

let shonkha = 12345;
console.log(shonkha); console.log(typeof(shonkha));