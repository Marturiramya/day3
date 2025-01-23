//!document.getElementById("");

let element = document.getElementById("demo");
element.innerText="DOM";
console.log(element);

let div = document.getElementById("test");
//div.inner Text = "<h1>Header</h1>"
div.innerHTML ="<h1>Header</h1>"
console.log(div);