import Menu from "./components/menu";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

window.addEventListener("load", function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  new Menu;
});

// let tabsContainer = document.querySelector("#tabs");

// let tabTogglers = tabsContainer.querySelectorAll("#tabs a");

// console.log(tabTogglers);

// tabTogglers.forEach(function (toggler) {
//   toggler.addEventListener("click", function (e) {
//     e.preventDefault();

//     let tabName = this.getAttribute("href");

//     let tabContents = document.querySelector("#tab-contents");

//     for (let i = 0; i < tabContents.children.length; i++) {

//       tabTogglers[i].parentElement.classList.remove("border-t", "border-r", "border-l", "-mb-px", "bg-white"); tabContents.children[i].classList.remove("hidden");
//       if ("#" + tabContents.children[i].id === tabName) {
//         continue;
//       }
//       tabContents.children[i].classList.add("hidden");

//     }
//     e.target.parentElement.classList.add("border-t", "border-r", "border-l", "-mb-px", "bg-white");
//   });
// });
