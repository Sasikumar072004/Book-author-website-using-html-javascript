var addbtn = document.querySelector(".add-btn")
var overlay = document.querySelector(".overlay")

addbtn.addEventListener("click", function(){
    overlay.style.display = "block"
})

var popupcancel = document.getElementById("popup-cancel")

popupcancel.addEventListener("click", function(event){
    event.preventDefault()
    overlay.style.display = "none"
})


var popupadd = document.getElementById("popup-add")
var bookname =document.getElementById("book-name")
var authorname = document.getElementById("author-name")
var textarea = document.getElementById("text-area")
var container = document.querySelector(".container")

popupadd.addEventListener("click", function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML= `<h2>${bookname.value}</h2> 
    <h3>${authorname.value}</h3> 
    <p>${textarea.value}</p>
    <button onclick="popupdelete(event)">Delete</Delete>`
    container.append(div)
    overlay.style.display="none"
})

function popupdelete(event){
    event.target.parentElement.remove()
}