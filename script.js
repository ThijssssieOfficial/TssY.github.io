document.addEventListener("DOMContentLoaded", () => {

  const sidebar = document.getElementById("sidebar");
  const openBtn = document.getElementById("openSidebar");
  const closeBtn = document.getElementById("closeSidebar");

  if (!sidebar || !openBtn || !closeBtn) return;

  // SINGLE SOURCE OF TRUTH
  let open = false;

  function renderSidebar() {
    sidebar.classList.toggle("active", open);
  }

  function toggleSidebar() {
    open = !open;
    renderSidebar();
  }

  function closeSidebar() {
    open = false;
    renderSidebar();
  }

  function openSidebar() {
    open = true;
    renderSidebar();
  }

  // OPEN BUTTON = TOGGLE (belangrijk!)
  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleSidebar();
  });

  // CLOSE BUTTON = ALWAYS CLOSE
  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeSidebar();
  });

  // CLICK OUTSIDE = CLOSE
  document.addEventListener("click", (e) => {
    if (!open) return;

    const clickedInside = sidebar.contains(e.target);
    const clickedButton = openBtn.contains(e.target);

    if (!clickedInside && !clickedButton) {
      closeSidebar();
    }
  });

  // PREVENT INNER SIDEBAR CLOSING BY CLICK BUBBLE
  sidebar.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // SMOOTH SCROLL NAV LINKS
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {

      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      closeSidebar();
    });
  });

});
