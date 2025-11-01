let body = document.body;
let nav=document.createElement("nav");

let homediv=document.createElement("div");
homediv.innerHTML="Home";

let aboutdiv=document.createElement("div")
aboutdiv.innerHTML="about";

let contactdiv=document.createElement("div")
contactdiv.innerHTML="contact";

let logindiv=document.createElement("div")
logindiv.innerHTML="login";

// nav.append(homediv);
// nav.append(aboutdiv);
// nav.append(contactdiv);
// nav.append(logindiv);

nav.append(homediv,aboutdiv,contactdiv,logindiv)
body.append(nav);

// console.log(nav)
// console.log(homediv)
// console.log(aboutdiv)
// console.log(contactdiv)
// console.log(logindiv)

nav.style.cssText=`border:solid red;
display:flex;
`;

homediv.style.cssText=`border:solid white;padding:5px 10px;flex:1;text-align:center;
background-color:teal;color:white`
aboutdiv.style.cssText=`border:solid white;padding:5px 10px;flex:1;text-align:center
;background-color:teal;color:white`
contactdiv.style.cssText=`border:solid white;padding:5px 10px;flex:1;text-align:center;
background-color:teal;color:white`
logindiv.style.cssText=`border:solid white;padding:5px 10px;flex:1;text-align:center;
background-color:teal;color:white`


//?read
console.log(nav.style.getPropertyValue("border"));
console.log(nav.style.getPropertyValue("display"));
console.log(nav.style.getPropertyValue("text-align"));

console.log(homediv.style.getPropertyValue("border"));
console.log(homediv.style.getPropertyValue("padding"));
console.log(homediv.style.getPropertyValue("background-color"));

// ? Update
nav.style.cssText +=`border:solid brown;`;

//?Delete
// nav.style.cssText="";
homediv.style.removeProperty("text-align");

