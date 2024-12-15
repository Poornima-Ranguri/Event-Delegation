let buttonElement = document.getElementById("childContainer");

buttonElement.addEventListener("click", (event) => {
    console.log("Button Triggered")
    event.stopImmediatePropagation()
    
})

 const parentContainerElement = document.getElementById("parentContainer");

 parentContainerElement.addEventListener("click", ()=>{
    console.log("Parent at Bubbling Phase")
    
 })