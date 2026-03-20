// Animation: white square appears, then collapses into the X
const barH  = Math.round(Math.max(document.documentElement.clientWidth * 0.085, window.innerHeight * 0.09));
const xSize = Math.round(barH * 1.5);

document.getElementById('xLogo').style.width  = xSize + 'px';
document.getElementById('xLogo').style.height = xSize + 'px';
document.getElementById('xSquare').style.width  = xSize + 'px';
document.getElementById('xSquare').style.height = xSize + 'px';
document.querySelector('.logo-stage').style.height = Math.round(barH * 2.5) + 'px';

gsap.set("#xSquare", { opacity: 0, scale: 0.6, transformOrigin: "center center" });
gsap.set("#xLogo",   { opacity: 0, transformOrigin: "center center" });

const tl = gsap.timeline();
// square pops in
tl.to("#xSquare", { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.7)" });
// square holds briefly, then collapses into the X
tl.to("#xSquare", { opacity: 0, scale: 0, rotate: 45, duration: 0.35, ease: "power3.in" }, "+=0.2");
tl.to("#xLogo",   { opacity: 1, duration: 0.25, ease: "power2.out" }, "-=0.2");
