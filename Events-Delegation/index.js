// navItems = document.querySelectorAll("nav ul li a").forEach(function (element) {
//   //   console.log(element);
//   element.addEventListener("click", function (event) {
//     event.preventDefault();
//     const id = this.getAttribute("href");
//     // console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

//Implementing Event Delegation to above functionalities

document
  .querySelector(".list-container")
  .addEventListener("click", function (event) {
    // console.log(event.target);
    // console.log(event.target.getAttribute("href"));
    event.preventDefault();
    if (event.target.tagName === "A") {
      //   console.log(event.target);
      const id = event.target.getAttribute("href");
      //   console.log(id);
      const mainId = id.substring(1);
      //   console.log(mainId);
      document.getElementById(mainId).scrollIntoView({ behavior: "smooth" });
    }
  });
