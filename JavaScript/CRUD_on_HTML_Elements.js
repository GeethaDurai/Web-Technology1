// ! Create
//? step:1 creatElement()
let h1=document.createElement("h1");
console.log(h1)

// ? step 2:add text using textcontent/innertext/innerhtml
h1.textContent="Welcome to HTML Class";

h1.innerText="Welcome to CSS Class"

h1.innerHTML="Welcome to <i>JS</i> Class"

// ? step 3: push into dom tree using append()/appendchild()
let body=document.querySelector("body")
console.log(body);

body.append(h1)
body.append("Hello World")

//! read
//? DOM Selectors

// ! Update
// ? content Update:
h1.innerHTML="I am Updated 1.0"
h1.innerText="I am Updated 2.0"
h1.textContent="I am Updated 3.0"

//? Element Update:  replacechild()

let h5=document.createElement("h5");
h5.innerHTML="Hii, i am h5 Tag";

body.replaceChild(h5,h1)

//! delete
body.removeChild(h5)




