// Animation: X spins in from nothing
const barH  = Math.round(Math.max(document.documentElement.clientWidth * 0.085, window.innerHeight * 0.09));
const xSize = Math.round(barH * 1.5);

document.getElementById('xLogo').style.width  = xSize + 'px';
document.getElementById('xLogo').style.height = xSize + 'px';
document.querySelector('.logo-stage').style.height = Math.round(barH * 2.5) + 'px';

gsap.set("#xLogo", { opacity: 0, scale: 0.4, rotate: -240, filter: "blur(8px)", transformOrigin: "center center" });
gsap.to("#xLogo",  { opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)", duration: 0.7, ease: "back.out(1.4)" });
