(function Tabs() {
  const tabs = document.querySelectorAll(".tablinks");
  const contents = document.querySelectorAll(".tab-content__item");

  tabs.forEach((tab, index) => {
    tab.onclick = () => {
      changeTab(index);
    };
  });

  function changeTab(index) {
    for (let tab of tabs) {
      tab.classList.remove("active__link");
    }
    tabs[index].classList.add("active__link");
    for (let el of contents) {
      el.classList.remove("active");
    }
    contents[index].classList.add("active");
  }
})();
