const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("openSidebar");
const closeBtn = document.getElementById("closeSidebar");
const sidebarLinks = document.querySelectorAll(".sidebar a");

// SIDEBAR TOGGLE
const toggleSidebar = (state) => {
  sidebar.classList.toggle("active", state);
  document.body.style.overflow = state ? "hidden" : "";
};

openBtn.onclick = () => toggleSidebar(true);
closeBtn.onclick = () => toggleSidebar(false);

sidebarLinks.forEach(link => {
  link.onclick = () => toggleSidebar(false);
});

// CLOSE SIDEBAR ON OUTSIDE CLICK
document.addEventListener("click", (e) => {
  if (sidebar.classList.contains("active") &&
      !sidebar.contains(e.target) &&
      !openBtn.contains(e.target)) {
    toggleSidebar(false);
  }
});

// REVEAL ANIMATION ON SCROLL
const revealCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      
      // If the entry has skill bars, animate them
      const skillBars = entry.target.querySelectorAll(".fill");
      if (skillBars.length > 0) {
        skillBars.forEach(bar => {
          bar.style.width = bar.dataset.width + "%";
        });
      }
      
      observer.unobserve(entry.target);
    }
  });
};

const revealObserver = new IntersectionObserver(revealCallback, {
  threshold: 0.15
});

document.querySelectorAll(".reveal").forEach(el => {
  revealObserver.observe(el);
});

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
});

backToTopBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

// SMOOTH SCROLL FOR ALL ANCHOR LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  });
});
