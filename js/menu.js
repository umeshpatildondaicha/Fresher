document.addEventListener("DOMContentLoaded", function() {
  const mynavbarmymenu = document.getElementById("mymenu");
  const myburgermymenu = document.getElementById("myburger");

  myburgermymenu.addEventListener("click", () => {
    mynavbarmymenu.classList.toggle("is-active");
    myburgermymenu.classList.toggle("is-active");
  });

  const mydropdown = document.querySelectorAll(".mydropdown");

  mydropdown.forEach((item) => {
    const mydropdownToggle = item.querySelector(".mydropdown-toggle");

    mydropdownToggle.addEventListener("click", () => {
      const mydropdownShow = document.querySelector(".mydropdown-show");
      togglemydropdownItem(item);

      if (mydropdownShow && mydropdownShow != item) {
        togglemydropdownItem(mydropdownShow);
      }
    });
  });

  const togglemydropdownItem = (item) => {
    const mydropdownContent = item.querySelector(".mydropdown-content");

    if (item.classList.contains("mydropdown-show")) {
      mydropdownContent.removeAttribute("style");
      item.classList.remove("mydropdown-show");
    } else {
      mydropdownContent.style.height = mydropdownContent.scrollHeight + "px";
      item.classList.add("mydropdown-show");
    }
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      document.querySelectorAll(".mydropdown-content").forEach((item) => {
        item.removeAttribute("style");
      });
      mydropdown.forEach((item) => {
        item.classList.remove("mydropdown-show");
      });
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      if (mynavbarmymenu.classList.contains("is-active")) {
        mynavbarmymenu.classList.remove("is-active");
        myburgermymenu.classList.remove("is-active");
      }
    }
  });

  
});
