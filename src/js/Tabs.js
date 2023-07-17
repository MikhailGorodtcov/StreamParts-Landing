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
    // что это такое ? 
    let colors;
    if (event.code === 'Tab') {
      if (bodyType.style.background === '') {
        colors = bodyType.style.background = 'rgba(0, 123, 255, 1)';
      } else {
        colors = bodyType.style.background = ''
      }
    }

    tabs[index].classList.add("active__link");
    for (let el of contents) {
      el.classList.remove("active");
    }
    contents[index].classList.add("active");
  }
})();
