// select popup overlay add  through var
var popup=document.querySelector(".popup");
var overlay=document.querySelector(".overlay");
var addbutton=document.getElementById("add");


addbutton.addEventListener("click", function(){
    popup.style.display="block";
    overlay.style.display="block";
    
})

//select the cancel button
var cancelbutton=document.getElementById("can1")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault();
     popup.style.display="none";
    overlay.style.display="none";
})
//select box,d1,book-t-in,book-a-in,book-des-in
var cantainer= document.querySelector(".box");
var addbook= document.getElementById("d1");
var title= document.getElementById("book-t-in");
var author= document.getElementById("book-a-in");
var description= document.getElementById("def");


addbook.addEventListener("click",function(event){
    event.preventDefault();
    popup.style.display= "none";
    overlay.style.display= "none";
    var div=document.createElement("div")
    div.setAttribute("class","inbox1")
    div.innerHTML=`<h3>${title.value}</h3>
        <h5>${author.value}</h5>
        <p>${description.value}</p>
        <button  type="button" id="btn" onclick="deletebutton(event)">delete </button>`
    cantainer.append(div)
})
function deletebutton(event)
{
    event.target.parentElement.remove()
}
