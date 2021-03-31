// Write your code here!
const element=document.querySelector('body');
element.children[0].remove();

const newHeader = document.createElement("h1");
const text=document.createTextNode("YOUR-NAME is the champion");
newHeader.appendChild(text)
newHeader.id = "victory";
const element1=document.getElementById("victory")
element1.appendChild('body')
