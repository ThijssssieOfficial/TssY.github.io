// SIDEBAR
const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("openSidebar");
const closeBtn = document.getElementById("closeSidebar");

openBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();

    const target = document.querySelector(a.getAttribute("href"));
    if(target){
      target.scrollIntoView({behavior:"smooth"});
    }

    sidebar.classList.remove("active");
  });
});
