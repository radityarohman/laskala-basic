function includeHTML() {
  const elements = document.querySelectorAll("[data-include]");
  let fetchPromises = [];

  elements.forEach(el => {
    const file = el.getAttribute("data-include");
    if (file) {
      const fetchPromise = fetch(file)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.text();
        })
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

    setActiveNav();
  });
}

window.onload = includeHTML;

function setActiveNav() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar a');

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentPath.includes(linkPath)) {
      link.classList.add('active');
    }
  });
}
