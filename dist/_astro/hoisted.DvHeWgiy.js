const t=document.querySelector(".mobile-nav-toggle"),o=document.querySelector(".mobile-nav"),e=document.querySelector(".arrow-mobile"),c=document.querySelector(".has-submenu .submenu");t?.addEventListener("click",()=>{o?.classList.toggle("active")});e?.addEventListener("click",()=>{c?.classList.toggle("active"),e.classList.toggle("rotated")});
