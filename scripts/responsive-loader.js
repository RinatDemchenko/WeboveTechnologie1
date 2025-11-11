function loadResponsiveCSS() {
  const width = window.innerWidth;
  let href;

  if (width < 700) href = "styles/responsiveness/responsive-700.css";
  else if (width < 900) href = "styles/responsiveness/responsive-900.css";
  else if (width < 1300) href = "styles/responsiveness/responsive-1300.css";
  else href = "styles/responsiveness/responsive-1600.css";

  let existing = document.querySelector('link[data-responsive="true"]');
  if (existing) existing.remove();

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  link.dataset.responsive = "true";
  document.head.appendChild(link);
}

document.addEventListener("DOMContentLoaded", loadResponsiveCSS);
window.addEventListener("resize", loadResponsiveCSS);
