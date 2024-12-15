const openPopupButtton = document.getElementById("openPopupButtton");
const blurBackground = document.getElementById("blur-background");
const popup = document.getElementById("popup");

openPopupButtton.addEventListener("click", (event) => {
    blurBackground.style.display = "flex";
    console.log("Capturing: open Popup Button  Clicked!")
}, true)


// blurBackground.addEventListener("click", (event) => {
    
//     if(event.target === blurBackground){
//         console.log("Capturing : Blur background Clicked!");
//         blurBackground.style.display = "none"
//     }
    
// }, true)

window.addEventListener('click', (e) => {
    if (e.target === blurBackground) {
        e.preventDefault();
        e.stopPropagation();
    }
}, true) 

window.addEventListener('click', (e) => {
    if (!blurBackground.contains(e.target)) {
        blurBackground.style.display = "none"
    }
}, true)

// popup.addEventListener("click", (event) => {

//     // event.stopPropagation(); // Stops event from bubbling up

//     alert("Popup Clicked! Closing the Popup")
//     blurBackground.style.display = "none"
//     console.log("Capturing : POP up Clcikced")
// }, true)



