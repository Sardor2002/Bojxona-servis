window.addEventListener("DOMContentLoaded", () => {
    let loader = document.querySelector(".Loader");
    setTimeout(() => {
      loader.style.opacity = 0;
      loader.style.display = "none";
      setTimeout(() => {
          loader.style.display = 'none';
      }, 500);
    }, 500);
  });
  