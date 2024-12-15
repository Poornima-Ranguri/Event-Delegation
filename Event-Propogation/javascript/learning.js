const listContainerElement = document.getElementById("listContainer");
const addingItemsElement = document.getElementById("addingItems")

addingItemsElement.addEventListener("click", () => {
    const listElement = document.createElement("li");
    listElement.textContent = "Poori"
    listContainerElement.appendChild(listElement)
    // listElement.addEventListener('click', (e) => console.log('clicked list item: ', e.target.textContent))
})

listContainerElement.addEventListener('click', (e) => {
    console.log('Clicked on: ', e.target.textContent)
})