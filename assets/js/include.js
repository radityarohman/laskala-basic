function includeHTML() {
  const elements = document.querySelectorAll("[data-include]");
  let fetchPromises = [];

  elements.forEach(el => {
    const file = el.getAttribute("data-include");
    if (file) {
      const fetchPromise = fetch(file)
        .then(response => response.text())
        .then(data => {
          el.innerHTML = data;
        })
        .catch(error => console.error('Error loading file:', error));
      
      fetchPromises.push(fetchPromise);
    }
  });

  Promise.all(fetchPromises).then(() => {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const dropdownNav = document.querySelector(".dropdown-menu");

    if (hamburgerMenu && dropdownNav) {
      hamburgerMenu.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("active");
        dropdownNav.classList.toggle("active");
      });

      const checkScreenSize = () => {
        if (window.innerWidth > 768) {
          hamburgerMenu.classList.remove("active");
          dropdownNav.classList.remove("active");
        }
      };

      checkScreenSize();

      window.addEventListener("resize", checkScreenSize);

      const checkScrollPosition = () => {
        if (window.scrollY > 300) {
          hamburgerMenu.classList.remove("active");
          dropdownNav.classList.remove("active");
        }
      };

      window.addEventListener("scroll", checkScrollPosition);
    }
  });
}

window.onload = includeHTML;
