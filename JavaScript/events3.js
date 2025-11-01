let body=document.body
let section=document.createElement("section");

// creating div tags for tis red, orange,yellow,green,blue,indigo,violet colors
let red=document.createElement("div");
let orange=document.createElement("div");
let yellow=document.createElement("div");
let green=document.createElement("div");
let blue=document.createElement("div");
let indigo=document.createElement("div");
let violet=document.createElement("div");

section.append(red,orange,yellow,green,blue,indigo,violet);

body.append(section);
console.log(section);

//apply CSS
section.style.cssText=`
height:100vh;
width:100vw;
border:solid;
display:flex;`

red.style.cssText='border:solid white;background-color:white;flex:1;'
orange.style.cssText='border:solid white;background-color:white;flex:1;'
yellow.style.cssText='border:solid white;background-color:white;flex:1;'
green.style.cssText='border:solid white;background-color:white;flex:1;'
blue.style.cssText='border:solid white;background-color:white;flex:1;'
indigo.style.cssText='border:solid white;background-color:white;flex:1;'
violet.style.cssText='border:solid white;background-color:white;flex:1;'

//apply mouseover events
red.addEventListener("mouseover",()=>{
    console.log("hovered on red box");
    red.style.cssText +=`border:solid red;background-color:red;flex:1;transition:0s;
    `
})

orange.addEventListener("mouseover",()=>{
    console.log("hovered on orange box");
    orange.style.cssText +=`border:solid orange;background-color:orange;flex:1;transition:0s;
    `
})

yellow.addEventListener("mouseover",()=>{
    console.log("hovered on yellow box");
    yellow.style.cssText +=`border:solid yellow;background-color:yellow;flex:1;trasition:0s;
    `
})

green.addEventListener("mouseover",()=>{
    console.log("hovered on green box");
    green.style.cssText +=`border:solid green;background-color:green;flex:1;trasition:0s;
    `
})

blue.addEventListener("mouseover",()=>{
    console.log("hovered on blue box");
    blue.style.cssText +=`border:solid blue;background-color:blue;flex:1;trasition:0s;
    `
})

indigo.addEventListener("mouseover",()=>{
    console.log("hovered on indigo box");
    indigo.style.cssText +=`border:solid indigo;background-color:indigo;flex:1;trasition:0s;
    `
})

violet.addEventListener("mouseover",()=>{
    console.log("hovered on violet box");
    violet.style.cssText +=`border:solid violet;background-color:violet;flex:1;trasition:0s;
    `
})



red.addEventListener("mouseout",()=>{
    console.log("hovered out red box");
    red.style.cssText +=`border:solid white;background-color:white;flex:1;trasition:0s;
    `
})

orange.addEventListener("mouseout",()=>{
    console.log("hovered out orange box");
    orange.style.cssText +=`border:solid white;background-color:white;flex:1;trasition:0s;
    `
})

yellow.addEventListener("mouseout",()=>{
    console.log("hovered out yellow box");
    yellow.style.cssText +=`border:solid white;background-color:white;flex:1;trasition:0s;
    `
})

green.addEventListener("mouseout",()=>{
    console.log("hovered out green box");
    green.style.cssText +=`border:solid white;background-color:white;flex:1;trasition:0s;
    `
})

blue.addEventListener("mouseout",()=>{
    console.log("hovered out blue box");
    blue.style.cssText +=`border:solid white;background-color:white;flex:1;trasition:0s;
    `
})

indigo.addEventListener("mouseout",()=>{
    console.log("hovered out indigo box");
    indigo.style.cssText +=`border:solid white;background-color:white;flex:1;trasition:0s;
    `
})

violet.addEventListener("mouseout",()=>{
    console.log("hovered out violet box");
    violet.style.cssText +=`border:solid white;background-color:white;flex:1;trasition:0s;
    `
})








