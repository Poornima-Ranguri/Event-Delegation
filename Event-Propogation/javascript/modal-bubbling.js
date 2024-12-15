const backgroundBlurElement = document.getElementById("blur-background");
const popup = document.getElementById("popup");
const openPopupButtton = document.getElementById("openPopupButtton");

popup.addEventListener("click", () => {
    alert("Popup is Clicked!")
    backgroundBlurElement.style.display = "none";
})

openPopupButtton.addEventListener("click", (event) => {
    event.stopPropagation()
    backgroundBlurElement.style.display = "flex"
})

